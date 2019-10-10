import React from "react";

const ImageDescription = props => {
    return(
    <div className="infoContain">
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.description}</p>
    </div>
    );

}
    

export default ImageDescription;