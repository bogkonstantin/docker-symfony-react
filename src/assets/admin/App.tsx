import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import GlobalStore from "./state/GlobalStore";
import Loading from "./components/Loading";
import {Route, Switch} from "react-router";
import Page404 from "./views/Page404";
import Page500 from "./views/Page500";
import DefaultLayout from "./layout/DefaultLayout";

export default function App(): JSX.Element {
    return (
        <Router basename="/admin">
            <GlobalStore>
                <React.Suspense fallback={Loading}>
                    <Switch>
                        <Route exact path="/404" render={props => <Page404 {...props}/>}/>
                        <Route exact path="/500" render={props => <Page500 {...props}/>}/>
                        <Route path="/" render={props => <DefaultLayout {...props}/>}/>
                    </Switch>
                </React.Suspense>
            </GlobalStore>
        </Router>
    );
}

