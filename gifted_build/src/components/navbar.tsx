import * as React from "react";
import '../css/navbar.css';

class NavBar extends React.Component<{}, {}> {
    render () {
        return (
            <div className='container'>
                <ul id='navbar'>
                    <a href="/"><li id='nav-name' className="nav-label button-left">Gifted-Ny</li></a>
                    <a href="/2"><li className="nav-label button-left">Gifted</li></a>
                    <a href="/"><li className="nav-label button-right">Cart</li></a>
                    <a href="/about"><li className="nav-label button-right">About</li></a>
                    <a href="/"><li className="nav-label button-right">Shop</li></a>
                    <a href="/"><li className="nav-label button-right">Home</li></a>
                </ul>
            </div>
            )
    }
}

export default NavBar;