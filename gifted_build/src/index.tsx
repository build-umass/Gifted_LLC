import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import NavBar from "./components/navbar";
import Homepage from "./components/homepage";
import Second_Page from "./components/second_page";
import Footer from "./components/footer";
import './css/common.css'

const Body = (
    <Router>
        <Route exact path ="/" component={Homepage} />
        <Route path="/2" component={Second_Page} />
    </Router>
)

ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(Body, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('foot'));