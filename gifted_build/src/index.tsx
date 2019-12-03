import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router, RouteComponentProps, Redirect } from 'react-router-dom'

import NavBar from "./components/navbar";
import Homepage from "./components/homepage";
import About_Page from "./components/about_page";
import Special_Olympics from "./components/special_olympics";
import Footer from "./components/footer";
import Shop_Item from "./components/shop_item";
import './css/common.scss'

function Partner_entry_wrapper({ match }: RouteComponentProps<{partner_name : string}>) {

    class Partner_wrapper extends React.Component<{partner_name: string},{}> {
        constructor(props: {partner_name: string}){
            super(props)
        }

        render() {
            console.log("help")
            return (
                (match.params.partner_name != "Special_Olympics") ? <Redirect to="/" /> : <Special_Olympics />
            )
        }
    }
 
    return <Partner_wrapper partner_name={match.params.partner_name} />
}

const Body = (
    <Router>
        <Switch>
            <Route exact path ="/" component={Homepage} />
            <Route exact path="/about" component={About_Page} />
            <Route exact path="/partners" component={Special_Olympics} />
            <Route path="/partners/:partner_name" component={Partner_entry_wrapper} />
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    </Router>
)

ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(Body, document.getElementById('index'));
ReactDOM.render(<Footer />, document.getElementById('foot'));