import * as React from "react";
import '../css/navbar.css';

class NavBar extends React.Component<{}, {}> {
    render () {
        return (
            <div className='container'>
                <ul id='navbar'>
                    <a href="/"><li id='nav-name' className="nav-label">    Gifted-Ny       </li></a>
                    <a href="/2"><li className="nav-label">                 Second Page     </li></a>
                    <a href="/"><li className="nav-label">                  Element 1       </li></a>
                    <a href="/"><li className="nav-label">                  Element 2       </li></a>
                    <a href="/"><li className="nav-label">                  Steven          </li></a>
                    <a href="/"><li className="nav-label">                  is cool         </li></a>
                </ul>
            </div>
            )
    }
}

export default NavBar;