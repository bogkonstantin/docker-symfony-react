import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/coreui.scss";
import { icons } from './assets/icons';

// @ts-ignore
React.icons = icons;

ReactDOM.render(<App/>, document.getElementById('app'));

export {};
