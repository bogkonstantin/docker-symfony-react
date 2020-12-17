import React from "react";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";

export type Route = {
    path: string,
    exact?: boolean,
    component: React.FunctionComponent<any>,
    name: string,
}

const routes: Route[] = [
    {path: '/', exact: true, component: Dashboard, name: 'Dashboard'},
    {path: '/profile', component: Profile, name: 'Profile'},
];

export default routes;
