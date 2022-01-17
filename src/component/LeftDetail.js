import React from 'react'

function LeftDetail(props) {
    return (
        <div className="left-detail">
            <p>{props.c}</p>
            <img src="./img/9.jpg"/>
            <p>{props.f}</p>
        </div>
    )
}

export default LeftDetail
