import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import NavBar from "./components/navbar";
import Homepage from "./components/homepage";
import About_Page from "./components/about_page";
import Special_Olympics from "./components/special_olympics";
import Footer from "./components/footer";
import Shop_Item from "./components/shop_item";
import './css/common.scss'

const Body = (
    <Router>
        <Route exact path ="/" component={Homepage} />
        <Route path="/about" component={About_Page} />
        <Route path="/partners/Special_Olympics" component={Special_Olympics} /> {/** Should dynamically load partner pages */}
    </Router>
)

ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(Body, document.getElementById('index'));
ReactDOM.render(<Footer />, document.getElementById('foot'));