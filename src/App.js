import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaApod from "./Components/image";
//https://api.nasa.gov/planetary/apod


function App() {

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let yesterday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1);
const [nasaImg, setNasaImg] = useState([]);
const [imgDate, setImgDate] = useState(date);
console.log(imgDate);
console.log(today.getDate()-1);
//API GRAB
useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=MMMT5Bs2HxfMUCSbeL0vb6RwB7hxqVJlRAw5uYNh&date=${imgDate}`)
    .then(response => {
      console.log(response.data);
      setNasaImg(response.data);
    })
    .catch(error => {
      console.log(error);
    })
}, [imgDate]);//Closes useEffect

  return (
    <div className="App">
      <div className = "container">
          <button className="button left" onClick={() => setImgDate(yesterday)}> Go Back </button>
          
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
