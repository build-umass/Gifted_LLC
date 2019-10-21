import * as React from "react";
import "../css/homepage.css"

class Homepage extends React.Component<{}, {}> {

    
    render () {
        return (
            <div>
                <div id="brand_container">
                    <div className="title">GIFTED CLOTHING BRAND,</div>
                    <div className="title">LLC</div>
                    <p className="paragraph">Everyone is.</p>
                </div>
                <div id="shop_container">
                    <img src={require('../files/shirt1.jpg')} />
                    <img src={require('../files/shirt2.jpg')} />
                    <img src={require('../files/shirt3.jpg')} />
                    <div className="description1">Unisex Combined Logo Script T</div>
                    <div className="description2">Unisex Combined Logo Script T</div>
                    <div className="description3">Unisex Gifted Logo T (Black/White)</div>
                </div>
                <div id="mission_statement_container">
                    <div id="statement_container">
                        <h1 className="mission_title"> Mission </h1>
                        <p className="mission_paragraph">Everyone is Gifted. Through our uniquely-designed apparel and slogan, we strive to show that everyone has their</p>
                        <p className="mission_paragraph"> own special gift. We are pledging to donate a portion of every sale to numerous non-profit organizations as our way</p>
                        <p className="mission_paragraph">of giving back to the Gifted communities.</p>
                        <div id="learn_more_button">
                            <p className="learn_more_p"> Learn More </p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Homepage;