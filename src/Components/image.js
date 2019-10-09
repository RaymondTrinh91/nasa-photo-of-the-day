import React from "react";


const NasaApod = props => {
    return(
        <div className = "imageContain">
            <h2>{props.title}</h2>
            <p>{props.desciption}</p> 
            <img className="dailyImg" alt="A random photo from Nasa!" src={props.hdurl}/>
            <p>{props.date}</p>
        </div>
    )
}

export default NasaApod;