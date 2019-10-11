import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaApod from "./Components/Image";
import ImageDescription from "./Components/ImageDescription";
//https://api.nasa.gov/planetary/apod


function App() {

let today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let [modal, setModal] = useState(false);
const [nasaImg, setNasaImg] = useState([]);
const [imgDate, setDate] = useState(date);

//API GRAB
useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=59J7kSEYqSBeUVM6FoH5zF9vLbSe6aHsWnQwqPzS&date=${imgDate}`)
    .then(response => {
      console.log(response.data);
      setNasaImg(response.data);

    })
    .catch(error => {
      console.log(error);
    })
}, [imgDate]);//Closes API useEffect



  useEffect(()=>{
    window.addEventListener("click", toggle)
  })

  const toggle = () => {
    setModal(modal = !modal);
  }

  return (
    <div className="App">
      <div className = "container">
        <h1 className = "title">Nasa's Picture of the Day!</h1> 
          <NasaApod  
          hdurl={nasaImg.hdurl}  
          />
          <ImageDescription
          title={nasaImg.title} 
          description={nasaImg.explanation}
          date={nasaImg.date}
          toggle={toggle}
          modal={modal}
          setDate={setDate}
          />
      </div>
    </div>
  );
}

export default App;
