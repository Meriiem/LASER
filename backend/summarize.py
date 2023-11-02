
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer, AutoConfig
import os

class Summarizer():
    def __init__(self):
        print(os.getcwd())
        self.full_lecture_model_path = "./backend/model/full_lecture_summarizer"
        self.long_lecture_model_path = "./backend/model/full_lecture_summarizer_lsg_2048_v2"

        self.full_lecture_tokenizer = AutoTokenizer.from_pretrained(self.full_lecture_model_path)
        self.long_lecture_tokenizer = AutoTokenizer.from_pretrained(self.long_lecture_model_path)
        self.max_input_length = 1024
        self.max_summary_length = 512
        self.long_input_length = 2048
        config = AutoConfig.from_pretrained(self.full_lecture_model_path)
        config.max_length = self.max_summary_length
        config.min_length = 256
        config.no_repeat_ngram_size = 3
        config.early_stopping = True
        config.length_penalty = 2.0
        config.num_beams = 4
        self.full_lecture_model = AutoModelForSeq2SeqLM.from_pretrained(self.full_lecture_model_path, config=config)
        config = AutoConfig.from_pretrained(self.long_lecture_model_path)
        config.max_length = self.max_summary_length
        config.min_length = 256
        config.no_repeat_ngram_size = 3
        config.early_stopping = True
        config.length_penalty = 2.0
        config.num_beams = 4
        self.long_lecture_model = AutoModelForSeq2SeqLM.from_pretrained(self.long_lecture_model_path, config=config)

    

    def summarize(self,transcript):
        token_count = len(self.full_lecture_tokenizer.encode(transcript))
        if token_count > self.max_input_length:
            print("long lecture: ", token_count)
            tokens =   self.long_lecture_tokenizer(transcript, return_tensors='pt', truncation=True, max_length=self.long_input_length)  
                
            outputs =  self.long_lecture_model .generate(**tokens,max_new_tokens = self.max_summary_length)

            output_text = self.long_lecture_tokenizer.decode(outputs[0], skip_special_tokens=True)
            
        else:
            tokens =   self.full_lecture_tokenizer(transcript, return_tensors='pt', truncation=True, max_length=self.max_input_length)      
            
            outputs =  self.full_lecture_model .generate(**tokens,max_new_tokens = self.max_summary_length)

            output_text = self.full_lecture_tokenizer.decode(outputs[0], skip_special_tokens=True)

        return output_text
