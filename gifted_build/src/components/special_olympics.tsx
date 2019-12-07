import * as React from "react";
import "../css/special_olympics.css"

class Special_Olympics extends React.Component<{}, {}> {
    render () {
        return (
            <div id="container">
                <div id="special_olympics_img">
                    <img src={require('../files/spolympics_logo.jpeg')} />
                </div>
                <div id="about_partnership_container">
                    <h1>About the Partnership </h1>
                    <p className="about_partnership_text"> Special Olympics New York provides authentic sports and inclusive opportunities for people with intellectual  
                            disabilities to stay active for life, achieve goals, taste victory, and overcome defeat.
                            Through Special Olympics New York, everyone is included and athletes are given the opportunity to compete fairly. 
                            Win or lose, they develop their own character and find unknown wells of determination within themselves.
                            We at Gifted admire all the work they have done for this community and wanted to make our own contributions to 
                            such an outstanding organization. Through our partnership, we will be donating a portion of EVERY sale to Special 
                            Olympics New York as our way of giving back. Below, you can visit their website to learn more about the organization, 
                            the athletes, upcoming events, and you can go directly to their donation page at SpecialOlympicsNY.org to leave 
                            your own contribution.</p>
                    <div id="home_button">
                        <a href="/"><p className="home_button_p"> Home Page </p></a>
                    </div>
                    <div id="donate_button">
                        <a href="/"><p className="home_button_p">Donate </p></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Special_Olympics;