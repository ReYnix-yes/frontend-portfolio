import React from "react";
import "./gallery.css"
import NavBar from "../../components/navBar/NavBar";

function Gallery() {
    return (
        <div>
            <NavBar/>
            <div className="gallery__title__text">
            You found my works! <br /> Maybe a couple of them will seem interesting to you? <br /> I also have a GitHub where you can check out more (<a href="https://github.com/ReYnix-yes">https://github.com/ReYnix-yes</a>).
            </div>
        </div>
    )
}

export default Gallery;