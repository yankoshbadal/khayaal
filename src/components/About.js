const myPhoto = new URL("../utils/images/my_photo.jpg", import.meta.url).href;
import { useState,useEffect } from "react";

const About = ({value}) => {

    return (
        <div className="about-container">
            <div className="my-photo">
                <img src={myPhoto} alt="Yankosh Kumar Badal"/>
                {console.log(myPhoto)}
            </div>
            <div className="about">
                <h1>About Yankosh</h1>
                <p style={{ whiteSpace: "pre-wrap" }}>{value}</p>
            </div>
        </div>
    ); 
}

export default About;