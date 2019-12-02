import * as React from "react"
import "../css/homepage.css"
import Shop_item from "./shop_item"

class Homepage extends React.Component<{}, {offset: number}> {
    constructor(props: {}) {
        super(props)    
      this.state = {
        offset: 0
      };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
      }
      parallaxShift = () => {
        this.setState({
          offset: window.pageYOffset
        });
      };

    render () {
        return (
            <div id="wrapper">
                <section className="hero is-fullheight"> 
                    <div id="big_boy" className="hero-body container is-fixed"
                    style={{ backgroundPositionY: this.state.offset / 1.5}}>
                    </div> 
                </section>
                <div className="container" >
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
            </div>
        )
    }
}

export default Homepage;