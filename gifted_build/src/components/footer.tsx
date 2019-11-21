import * as React from "react";
import "../css/footer.css"

class Footer extends React.Component<{}, {}> {
    render () {
        return (
            <div id="footer">
                <img className = "socail_media_img" src="https://img.icons8.com/small/15/000000/instagram-new.png"></img>
                <img className = "socail_media_img" src="https://img.icons8.com/material-rounded/15/000000/facebook-f--v1.png"></img>
                <img className = "socail_media_img" src="https://img.icons8.com/windows/15/000000/linkedin-2.png"></img>
                <img className = "socail_media_img" src="https://img.icons8.com/android/13/000000/twitter.png"></img>


            <div className= "footer_information">©2019 by Gifted Clothing Brand, LLC.</div>
            </div>

        )
    }
}

export default Footer;