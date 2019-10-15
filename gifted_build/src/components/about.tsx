import * as React from "react";
import "../css/about.css"

class about extends React.Component<{}, {}> {
    render () {
        return (
            <div>
                <div>
                    <div className="top-img">
                        <img src={require('../files/about_logo.png')} />
                    </div>
                    <div>
                        <p className="top-about">
                        Everyone is Gifted. Through our uniquely-designed apparel and slogan, we strive to show that everyone has their own special gift. We are pledging to donate a portion of every sale to numerous non-profit organizations as our way of giving back to the Gifted communities.
                        Tired of walking through endless shops, looking for just the right item? Enter Gifted, where you’ll find a quality selection of apparel at great prices, only a few clicks away!
                        Gifted was founded by a group of like-minded fashion devotees, determined to deliver a new style in streetwear to a Gifted community. Our store policies are fair and generous, our customer service is smart and useful, and our values are genuine. So what are you waiting for? Start shopping online today and find out more about what makes us Gifted.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bottom-about">
                        <p>
                        Everyone is Gifted. Through our uniquely-designed apparel and slogan, we strive to show that everyone has their own special gift. We are pledging to donate a portion of every sale to numerous non-profit organizations as our way of giving back to the Gifted communities.
                        Tired of walking through endless shops, looking for just the right item? Enter Gifted, where you’ll find a quality selection of apparel at great prices, only a few clicks away!
                        Gifted was founded by a group of like-minded fashion devotees, determined to deliver a new style in streetwear to a Gifted community. Our store policies are fair and generous, our customer service is smart and useful, and our values are genuine. So what are you waiting for? Start shopping online today and find out more about what makes us Gifted.
                        </p>
                    </div>
                    <div className="top-img">
                        <img src={require('../files/about_logo.png')} />
                    </div>
                </div>
            </div>
        )
    }
}

export default about;