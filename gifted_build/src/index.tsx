import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import NavBar from "./components/navbar";
import Homepage from "./components/homepage";
import Second_Page from "./components/second_page";
import Special_Olympics from "./components/special_olympics";
import Footer from "./components/footer";
import Shop_Item from "./components/shop_item";
import './css/common.css'

const Body = (
    <Router>
        <Route exact path ="/" component={Homepage} />
        <Route path="/about" component={Second_Page} />
        <Route path="/spolympics" component={Special_Olympics} />
    </Router>
)

ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(Body, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('foot'));