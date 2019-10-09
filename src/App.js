import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaApod from "./Components/image";
//https://api.nasa.gov/planetary/apod



function App() {

const [nasaImg, setNasaImg] = useState([]);

//API GRAB
useEffect(() => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=MMMT5Bs2HxfMUCSbeL0vb6RwB7hxqVJlRAw5uYNh")
    .then(response => {
      console.log(response.data);
      setNasaImg(response.data);
    })
    .catch(error => {
      console.log(error);
    })
}, []);//Closes useEffect

  return (
    <div className="App">
      <div className = "container">
     
          <NasaApod 
          title={nasaImg.title} 
          description={nasaImg.explanation} 
          hdurl={nasaImg.hdurl} 
          date={nasaImg.date} 
          />
      </div>
    </div>
  );
}

export default App;
