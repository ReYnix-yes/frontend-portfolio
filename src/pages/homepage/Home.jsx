import React, { useState } from "react";
import "./home.css"
import NavBar from "../../components/navBar/NavBar";
import bg from "../../img/home/background.jpg"
import myPhoto from "../../img/home/Gphoto.png"

function Home() {
    let [hide, setHide] = useState(0)
    setTimeout(() => { setHide(1) }, 30)
    return (
        <div className="home">
            <NavBar />
            <aside className="aside__text" style={{ opacity: hide }}>
                Hi! I'm a Front-End (React/Redux) developer, and this is my portfolio. <br />
                You can take a look at my work on this website.
            </aside>
            
            <aside className="stack">
                <h1 className="stack__title">Tech Stack:</h1>
                <ul className="stack__list">
                    <li className="stack__skill">HTML</li>
                    <li className="stack__skill">CSS</li>
                    <li className="stack__skill">JavaScript</li>
                    <li className="stack__skill">React</li>
                    <li className="stack__skill">Redux</li>
                </ul>
            </aside>
            <img className="home__photo" src={myPhoto} alt=""/>
            
        </div>
    )
}

export default Home;