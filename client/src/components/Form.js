import React, { useState } from "react";
import axios from "axios";

export const Form = ({ setYoutubeLink, setYoutubeVal }) => {
  const [input, setInput] = useState("");
  const [youtubeeVal, setYoutubeeVal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setYoutubeLink(input);

    // setYoutubeVal(input);
    axios
      .post("http://localhost:5000/youtubeUpload", { link: input })
      .then((res) => {
        let result = res.data;
        console.log(result);
        setYoutubeeVal(result["Youtubetranscript"]);
        setYoutubeVal(result["Youtubetranscript"]);
      });

    //empty form
    setInput("");
  };

  return (
    <form
      className="form-group custom-form"
      onSubmit={handleSubmit}
      method="post"
    >
      <label>Enter Youtube URL</label>

      <input
        type="text"
        id="youtubeVariable"
        style={{ width: "40%", textAlign: "center", borderRadius: "10px" }}
        className="form-control custom-input"
        placeholder="Enter Youtube URL"
        required
        onChange={(e) => setInput(e.target.value)}
        value={input || ""}
      />

      <button
        type="submit"
        style={{
          backgroundColor: "blue",
          marginLeft: "20px",
          borderRadius: "10px",
          width: "100px",
          height: "25px",
        }}
        className="btn btn-success btn-md"
      >
        Generate
      </button>
      <br></br>
    </form>
  );
};
