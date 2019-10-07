import * as React from "react";
import "../css/homepage.css"

class Homepage extends React.Component<{}, {}> {
    render () {
        return (
            <div>
                <div id="container">
                    <div className="title">Homepage</div>
                    <img src={require('../files/BuildUmass.jpeg')} />
                </div>
            </div>
        )
    }
}

export default Homepage;