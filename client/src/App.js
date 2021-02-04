import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// Screens
import Form from './screens/Form/Form'
import Dashboard from './screens/Dashboard/Dashboard'
import Charts from './screens/Charts/Charts'
import Stocks from './screens/Stocks/Stocks'
import Profile from './screens/Profile/Profile'
import NewStock from './screens/Stocks/newStock'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/auth" />
                        </Route>
                        <Route exact path="/auth" component={Form} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/dashboard/stocks" component={Stocks} />
                        <Route exact path="/dashboard/stocks/new" component={NewStock} />
                        <Route exact path="/dashboard/charts" component={Charts} />
                        <Route exact path="/dashboard/profile" component={Profile} />
                    </Switch>
                </Router>
            </div>
        )
    }

}