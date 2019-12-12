import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EditIssue from "./issues-tracker/EditIssue"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IssueProvider from './issues-tracker/IssueProvider';

const routing = (
    <IssueProvider>
        <Router>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/edit/:id" component={EditIssue} />
        </Router>
    </IssueProvider>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
