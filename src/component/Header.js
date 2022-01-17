import React from 'react'
import Detail from './Detail'
import Menu from './Menu'


function Header() {
    let t = "";
    return (
        <div className="header">
            <img src="./img/header card.svg" style={{ float: 'right', margin: '1rem' }} />
            <Menu />
            <br />
            <p style={{ fontSize: '80px' }} >Banking <br />more smart</p>
            <span style={{ fontSize: '30px' }}>
                Meet the only spend management
                platform and corporate card.
            </span>
            <img src="./img/2.jpg" style={{position:'relative',right:'50rem',top:'6rem' }}/>
            <br/>
            <p style={{ fontSize: '40px',position:'relative',right:'10rem' }} >Get your card</p>

            <Detail t="Save Money
Online shopping for retail
sales direct to consumers
Hot" />
            <Detail t="1.5% cashback
Online shopping for retail
sales direct to consumers" />
            <Detail t="30-day terms
Online shopping for retail
sales direct to consumers"/>
            <Detail t="Hot deals for you
Online shopping for retail sales
direct to consumers" />



        </div>
    )
}

export default Header
