import * as React from "react";
import "../css/second_page.css"

class About_page extends React.Component<{}, {}> {
    render () {
        return (
            <div id="container">
                <div id="our_partners_container">
                    <div id="our_partners_text_container">
                        <h1 className="our_partners_title">OUR PARTNERS </h1>
                        <p className="summary_text"> Here at Gifted Clothing Brand, LLC, we take pride in our 
                            stance on self-awareness and philanthropy. Because of this, 
                            we strive to continuously expand our Gifted family by 
                            partnering with non-profit organizations. Thank you for 
                            your continued support to us and our partners!</p>
                    </div>
                    <div id="handshake_img">
                        <img src={require('../files/Handshake_edited.jpeg')} />
                    </div>
                </div>
                <div id="spolympics_container">
                    <div id="spolympics_img">
                        <img className="spolympics_img_resize" src={require('../files/spolympics_logo.jpeg')} />
                    </div>
                    <div id="spolympics_text_container">
                        <h1 className="spolympics_title">SPECIAL OLYMPICS NEW YORK </h1>
                        <p className="summary_text"> We are extremely proud to be partnered with such a prestigious 
                        non-profit organization that does so much for the special needs community. 
                        Click below to learn more about our partnership:</p>
                        <div id="learn_more_button">
                            <a href="/partners"><p className="learn_more_p"> Learn More </p></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About_page;