from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from faster_whisper import WhisperModel
from pydub import AudioSegment
import argparse
import json


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
    # FOR IT TO WORK YOU NEED TO CHANGE THE PATH BELLOW SO THAT THE AUDIO FILE WILL BE SAVED INTO THE GIVE FILE :D
    # NOTE: just note that when we will deploy the website we will add the path that we want the file to be saved to in the server's computer 
    file.save("C:\\Users\\omar0\\Desktop\\LASER_WEB\\LASER\\backend\\uploads\\" + file.filename)  #change path here 
    file = "C:\\Users\\omar0\\Desktop\\LASER_WEB\\LASER\\backend\\uploads\\" + file.filename # and change path here

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


# this is to recive data from the frontend and then resend the data back to the frontend inorder to print the youtube generated transcript
# NOTE: still working on it (its still not working)
@app.route("/youtubeUpload", methods=['POST'])
def youtubeUpload():
    data = request.get_json(); #reciving data from frontend in json format
    print(type(data)) #for testing purposes you can remove it
    print()
    print(data["link"]) # same here (only for testing purposes

    return jsonify({"Youtubetranscript" : "hello world from backend"}) #just a test were i am trying to send back to the frontend the Youtube link
      
    


if __name__ == '__main__':
    app.run(debug=True)
