import React from "react";


const NasaApod = props => {
    return(
        <div className = "imageContain">
            <img className="dailyImg" alt="A random photo from Nasa!" src={props.hdurl}/>
        </div>
    )
}

export default NasaApod;