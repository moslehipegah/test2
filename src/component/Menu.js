import React from 'react'

function Menu({mp3Url}) {
    return (
        <div className="menu">
                <ul>
                    <li>About</li>
                    <li>How It Work</li>
                    <li>Contact</li>
                </ul>
                <img src="./img/8.jpg"/>
                <audio controls src={mp3Url}></audio>
            </div>
    )
}

export default Menu
