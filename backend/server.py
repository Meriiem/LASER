from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from faster_whisper import WhisperModel
from pydub import AudioSegment
import argparse
import json
from pytube import YouTube


# Importing deps for image prediction
# from tensorflow.keras.preprocessing import image
# from PIL import Image
# import numpy as np
# from tensorflow.keras.models import load_model




app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def home():
    return {"message": "hello from backend"}

@app.route("/upload", methods=['POST'])
def upload():
    
    file = request.files['file']
    file.save("C:\\Users\\omar0\\Desktop\\LASER_WEB\\LASER\\backend\\uploads\\" + file.filename)
    file = "C:\\Users\\omar0\\Desktop\\LASER_WEB\\LASER\\backend\\uploads\\" + file.filename

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
    out_file = video.download(output_path="C:\\Users\\omar0\\Desktop\\LASER_WEB\\LASER\\backend\\uploads\\")
    base, ext = os.path.splitext(out_file)
    new_file = base + '.wav'
    if not os.path.exists(new_file):
        os.rename(out_file, new_file)
    file = new_file

    print(new_file)

    # file = "C:\\Users\\omar0\\Desktop\\LASER_WEB\\LASER\\backend\\uploads\\helloworld.wav"
    model_size = 'base'
    model = WhisperModel(model_size, device="cpu", compute_type="int8_float32")


    segments, info = model.transcribe(file, beam_size=5)


    transcripts = []
    counter = 0

    for segment in segments:
        print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
        # audio_file = AudioSegment.from_wav(file)
        # audio_file = audio_file[(segment.start * 1000):(segment.end * 1000)]
        # audio_file.export(file, format="wav")
        # counter += 1
        transcripts.append(segment.text)

   

    return jsonify({"Youtubetranscript" : transcripts})
      
    


if __name__ == '__main__':
    app.run(debug=True)
