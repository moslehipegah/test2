import React from 'react'
import Content2Detail from './Content2Detail'
import DetailRight from './DetailRight'
import LeftDetail from './LeftDetail';

function Content2() {
    let t = "";
    let a = "";
    let c="";
    let f="";
    return (
        <div className="content2">
            <h1>1000+ Customer</h1>
            <p>
                Analyze any Business or Creator account including your
                competitors to find the imagery,
                visuals, and captions that drive audience engagement.
                Get social calendars planned faster
                and spend less time testing content strategies.
            </p>
            <br />
            <Content2Detail t="PRODUCT" a="10,00000+" />
            <Content2Detail t="LIKES" a="45600" />
            <Content2Detail t="SALE" a="576864" />
            <Content2Detail t="CUSTOMERS" a="947444" />
            <DetailRight />
            <div className="left">
                <img src="./img/5.png" style={{ width: '100%' }} />
                <LeftDetail c="DESIGN" f="Emlen Beaver" />
                <LeftDetail c="DESIGN" f="Emlen Beaver" />
                <LeftDetail c="MEKT" f="Jaquon Hart" />
            </div>
        </div>

    )
}

export default Content2
