import * as React from "react";
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class NavBar extends React.Component<{}, {}> {

    handle_active() {
        document.getElementById("nav-collapsed").classList.toggle('is-active')
        document.getElementById("nav-collapsed").classList.toggle('has-text-centered')
    }

    render () {
        return (
            <nav className="navbar navbar is-transparent">
                <div id="top-row" className="container">
                    <div className="navbar-end navbar-tabs">
                        <a className="navbar-item">
                            Login
                        </a>
                        <div className="navbar-item">
                            <a id="nav-button" className="button is-info is-outlined" href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item button-home" href="/">
                            <img src={require('../files/gifted_logo.png')}/>
                        </a>

                        <a className="navbar-item"> 
                            <div>
                                <p id="logo_title">Gifted</p> 
                                <p id="logo_subtitle">Everyone is.</p>
                            </div> 
                        </a>

                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={this.handle_active}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="nav-collapsed" className="navbar-menu container">
                        <div className="navbar-end">
                            <a className="navbar-item" href="/">Home</a>
                            <a className="navbar-item" href="/">Shop</a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-item">
                                    Our Partners
                                </a>  
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        Special Olympics New York
                                    </a>
                                </div>
                            </div>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-item">
                                    About
                                </a>  
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        Values
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </nav>

            // <div className='container'>
            //     <ul id='navbar'>
            //         {/* <a href="/"><li id='nav-name' className="nav-label button-left button-home"><img src={require('../files/gifted_logo.png')}/></li></a> */}
            //         <a href="/2"><li className="nav-label button-left button-home">Image</li></a>
            //         <a href="/2"><li className="nav-label button-left">Gifted</li></a>
            //         <a href="/"><li className="nav-label button-right button-cart">Cart</li></a>
            //         <a href="/"><li className="nav-label button-right">About</li></a>
            //         <a href="/"><li className="nav-label button-right">Shop</li></a>
            //         <a href="/"><li className="nav-label button-right">Home</li></a>
            //     </ul>
            // </div>
            )
    }
}

export default NavBar;