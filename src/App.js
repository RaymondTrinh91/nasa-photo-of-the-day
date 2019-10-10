import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaApod from "./Components/Image";
import ImageDescription from "./Components/ImageDescription";
//https://api.nasa.gov/planetary/apod


function App() {

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const [nasaImg, setNasaImg] = useState([]);
const [imgDate] = useState(date);
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
        <h1 className = "title">Nasa's Picture of the Day!</h1> 
          <NasaApod 
          title={nasaImg.title} 
          description={nasaImg.explanation}
          date={nasaImg.date}
          hdurl={nasaImg.hdurl}  
          />
          <ImageDescription
          title={nasaImg.title} 
          description={nasaImg.explanation}
          date={nasaImg.date}
          />
      </div>
    </div>
  );
}

export default App;
