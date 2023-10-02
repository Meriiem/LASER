from pytube import YouTube
from moviepy.editor import *

video_link = "YouTube Link"

yt = YouTube(video_link)
stream = yt.streams.filter(only_audio=True).first()
stream.download()

video_path = stream.default_filename
wav_path = video_path.split('.')[0] + '.wav'
video_clip = AudioFileClip(video_path)
video_clip.write_audiofile(wav_path)

os.remove(video_path)
