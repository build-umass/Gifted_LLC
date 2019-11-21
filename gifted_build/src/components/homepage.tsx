import * as React from "react";
import "../css/homepage.css"
import Shop_item from "./shop_item";
import Navbar from "./navbar";
import Footer from "./footer";


class Homepage extends React.Component<{}, {}> {
    render () {
        return (
            <div>
            <div>
                <Navbar/>
            </div>
            <div id="wrapper">
                <div id="large_logo">
                    <img  src={require('../files/gifted_logo.png')} />
                </div>
                <div id="content" className="panels" >
                    <div id="brand_container">
                        <div className="title">Gifted Clothing Brand,</div>
                        <div className="title">LLC</div>
                        <p className="paragraph">Everyone is.</p>
                    </div>
                    <div className="shop_container">
                        <div>
                            <Shop_item/>
                        </div>
                        <div>
                            <Shop_item/>
                        </div>
                        <div>
                            <Shop_item/>
                        </div>
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
                <div>
                    <Footer/>
                </div>
            </div>
            </div>
        )
    }
}

export default Homepage;