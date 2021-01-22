import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './screens/Home/Home'

export default class App extends React.Component {

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }

}