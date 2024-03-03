import React from 'react';
import tailwind from "./tailwind.png";

function Link() {
    return(
        <div>
            <center>
                {/* Change a Name and Underline of Link Color depends on colors of (logo) or the most two colors in (website, web or mobile Application or What is Fits the name) */}
            <span class="Link">Tailwind CSS</span> <span><img src={tailwind} style={{
            height: "70px", width: "70px", borderRadius: "20%", display: "inline-block" }} alt="" /></span>
            </center>
        </div>
    );
}

export default Link;