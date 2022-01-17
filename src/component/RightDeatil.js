import React from 'react'

function RightDeatil(props) {
    let t = "";
    let a = "";
    return (
        <div className="RightDeatil">
            <img src="./img/4.jpg" style={{ display: 'flex',left:'15rem',top:'3rem' ,position:'relative'}} />
            <h3>{props.t}</h3>
            <p>{props.a}</p>
        </div>
    )
}

export default RightDeatil
