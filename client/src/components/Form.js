//this js file is dedicated to get the youtube link from the user then send that given link to Youtube.js

//NOTE: this were i am having a problem were i was able to send data to the server but i cant recive data from the server
import React,{useState, useEffect} from 'react'
import axios from "axios"

// const [youtubeVal, setYoutubeVal] = useState({});

// TRIED TO USE THE BELLOW CODE TO RETREIVE DATA FROM THE SERVER BUT I AM GETTING AN ERROR THAT I AM NOT ALLOWED TO ADD FETCH OUTSIDE FUNCTION


// const fetchData = async () => {
  //   const response = await axios.get("/youtubeUpload");
  //   return setYoutubeVal(response.data);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[])

export const Form = ({setYoutubeLink}) => {

    const [input, setInput] = useState('');
    const [youtubeVal, setYoutubeVal] = useState({});
   
    

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setYoutubeLink(input);
      
        setYoutubeVal(input);
        axios.post('http://localhost:5000/youtubeUpload',{"link":input}).then((res) => {
                
                console.log(res);
                
                
                }
                
            )
           
        
        //empty form
        setInput('');
        const fetchUserData = () => {
            fetch("https://localhost:5000/youtubeUpload")
              .then(response => {
                return response.json()
              })
              .then(data => {
                setYoutubeVal(data.link)
              })
          }
          
       
    }
    
    

   return(

        <form className='form-group custom-form' onSubmit={handleSubmit} method = "post"> 


            <label>Enter Youtube URL</label>

            <input  type='text'id="youtubeVariable" style={{width:"40%", textAlign:"center",borderRadius:"10px"}} className='form-control custom-input'
            placeholder='Enter Youtube URL' required
            onChange={(e)=>setInput(e.target.value)} value={input||''} />


            <button type='submit'style={{backgroundColor:"blue",marginLeft:"20px",borderRadius:"10px",width:"100px",height:"25px" }}className='btn btn-success btn-md'>
                Generate
            </button>
            <br></br>

            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r to-violet-600 from-blue-900 font-black">
          Youtube generated Transcript : {youtubeVal}
        </span> */}




        </form>


   )
   }
