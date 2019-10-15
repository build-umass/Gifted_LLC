import * as React from "react";
import '../css/navbar.css';

class NavBar extends React.Component<{}, {}> {
    render () {
        return (
            <div className='container'>
                <ul id='navbar'>
                    <a href="/"><li id='nav-name' className="nav-label">Gifted-Ny</li></a>
                    <a href="/2"><li className="nav-label">Gifted</li></a>
                    <a href="/"><li className="nav-label">Home</li></a>
                    <a href="/"><li className="nav-label">Shop</li></a>
                    <a href="/"><li className="nav-label">About</li></a>
                    <a href="/"><li className="nav-label">Cart</li></a>
                </ul>
            </div>
            )
    }
}

export default NavBar;