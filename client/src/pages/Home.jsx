import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CircleLoader from "react-spinners/CircleLoader";
import Navigation from "./Navigation";
import Trial from "./Trial";

function Home() {
  //To use react spinners
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="home">
      {loading ? (
        <div className="loader">
          <CircleLoader color={"#83bdfd"} loading={loading} size={200} />
        </div>
      ) : (
        <div className="App-Header">
          <div>
            <Main />
            <Trial />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
