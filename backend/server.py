from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from faster_whisper import WhisperModel
from pydub import AudioSegment
import argparse


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
    file.save('./uploads/' + file.filename)
    
    file = os.path.abspath(file)
    print("this is the file : ")
    print(file)


    model_size = 'base'
    model = WhisperModel(model_size, device="cpu", compute_type="int8_float32")

    parser = argparse.ArgumentParser()
    # parser.add_argument('--file',type=str,default='lect_short.wav',help='File to transcribe')
    # args = parser.parse_args()

    segments, info = model.transcribe(file, beam_size=5)


    # split the wav file into segments of diffrent starting and ending time



    # Number of steps in your total script
    # steps_needed = len(list(segments))
    # current_step = 0

    # setup progress bar
    # pb = ProgressBar(steps_needed, bar_length=100)
    # pb.start()

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

# When you are done you can force the progress bar to fini""sh
# PB.finished()

    # Load the image to predict
    # img_path = f"./uploads/{file.filename}"
    # img = image.load_img(img_path, target_size=(150, 150))
    # x = image.img_to_array(img)
    # x = np.expand_dims(x, axis=0)
    # x /= 255

    # loaded_model = load_model('./model/dogs_cat_model.h5')

    # # Make the prediction
    # prediction = loaded_model.predict(x)
    # # if os.path.exists(f"./uploads/{file.filename}"):
    # #     os.remove(f"./uploads/{file.filename}")
        
    # if prediction < 0.5:
    #     return jsonify({"message": "Cat"})
    # else:
    #     return jsonify({"message": "Dog"})
     

if __name__ == '__main__':
    app.run(debug=True)
