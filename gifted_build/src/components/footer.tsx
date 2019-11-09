import * as React from "react";
import "../css/footer.css"

class Footer extends React.Component<{}, {}> {
    render () {
        return (
            <div id="footer">
                <img src={require('../files/instagram.png')}/>
                <img src={require('../files/facebook.png')}/>
                <img src={require('../files/linkedin.png')}/>
                <img src={require('../files/twitter.png')}/>

            <div className= "footer_information">©2019 by Gifted Clothing Brand, LLC.</div>
            </div>

        )
    }
}

export default Footer;