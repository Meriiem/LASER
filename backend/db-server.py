from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin
from faster_whisper import WhisperModel
from pydub import AudioSegment
from pytube import YouTube
from models import db, User
from config import ApplicationConfig
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
import json
import argparse
import os

app = Flask(__name__)
app.config.from_object(ApplicationConfig)


bcrypt = Bcrypt(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
server_session = Session(app)
db.init_app(app)


with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return {"message": "hello from backend"}

@app.route("/upload", methods=['POST'])
def upload():
    
    file = request.files['file']
    file.save('./uploads/' + file.filename)
    file = './uploads/' + file.filename

    model_size = 'base'
    model = WhisperModel(model_size, device="cpu", compute_type="int8_float32")

    parser = argparse.ArgumentParser()

    segments, info = model.transcribe(file, beam_size=5)


    transcripts = []
    counter = 0

    for segment in segments:
        print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
        audio_file = AudioSegment.from_wav(file)
        audio_file = audio_file[(segment.start * 1000):(segment.end * 1000)]
        audio_file.export(file, format="wav")
        counter += 1
        transcripts.append(segment.text)

    return jsonify({"message": transcripts})


@app.route("/youtubeUpload", methods=['POST'])
def youtubeUpload():
    data = request.get_json();
    yt = YouTube(data["link"])
    video = yt.streams.filter(only_audio=True).first()
    out_file = video.download(output_path='./uploads/' )
    base, ext = os.path.splitext(out_file)
    new_file = base + '.wav'
    if not os.path.exists(new_file):
        os.rename(out_file, new_file)
    file = new_file

    print(new_file)

    model_size = 'base'
    model = WhisperModel(model_size, device="cpu", compute_type="int8_float32")


    segments, info = model.transcribe(file, beam_size=5)


    transcripts = []
    counter = 0

    for segment in segments:
        print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
        transcripts.append(segment.text)

    return jsonify({"Youtubetranscript" : transcripts})
      
@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })


@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"


@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    }) 


if __name__ == '__main__':
    app.run(debug=True)

