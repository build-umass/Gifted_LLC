import * as React from "react";
import '../css/navbar.css';

class NavBar extends React.Component<{}, {}> {
    render () {
        return (
            <div className='container'>
                <ul id='navbar'>
                    <a href="/"><li id='nav-name' className="nav-label button-left button-home"><img src={require('../files/gifted_logo.png')} height="30" width="40"/></li></a>
                    <a href="/2"><li className="nav-label button-left">Gifted</li></a>
                    <a href="/"><li className="nav-label button-right button-cart">Cart</li></a>
                    <a href="/"><li className="nav-label button-right">About</li></a>
                    <a href="/"><li className="nav-label button-right">Shop</li></a>
                    <a href="/"><li className="nav-label button-right">Home</li></a>
                </ul>
            </div>
            )
    }
}

export default NavBar;