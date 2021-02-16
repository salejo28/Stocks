import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import jwt_Decode from 'jwt-decode'

// Screens
import Form from './screens/Form/Form'
import Dashboard from './screens/Dashboard/Dashboard'
import Charts from './screens/Charts/Charts'
import Stocks from './screens/Stocks/Stocks'
import Profile from './screens/Profile/Profile'
import NewStock from './screens/Stocks/newStock'
import Stock from './screens/Stocks/Stock'

// AuthGuard
import GuardRoute from './utils/AuthGuard'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: null
        }


        this.isAuth = this.isAuth.bind(this)
    }

    componentDidMount() {
        this.checkAuth()
    }

    checkAuth() {
        let { isAuthenticated } = this.state
        const token = localStorage.getItem('token')
        if (!token) {
            isAuthenticated = false
            this.setState({
                isAuthenticated
            })
        } else {

            const valid = jwt_Decode(token)
            if (valid) {
                isAuthenticated = true
                this.setState({
                    isAuthenticated
                })
            }

        }
    }

    isAuth() {
        this.setState({
            isAuthenticated: true
        })
    }

    render() {
        const { isAuthenticated } = this.state
        
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/auth" />
                        </Route>
                        <Route auth={isAuthenticated} exact path="/auth" render={(props) => <Form isAuth={this.isAuth} {...props} />} />
                        <GuardRoute auth={isAuthenticated} exact path="/dashboard" component={Dashboard} />
                        <GuardRoute auth={isAuthenticated} exact path="/dashboard/stocks" component={Stocks} />
                        <GuardRoute auth={isAuthenticated} exact path="/dashboard/stocks/new" component={NewStock} />
                        <GuardRoute auth={isAuthenticated} exact path="/dashboard/charts" component={Charts} />
                        <GuardRoute auth={isAuthenticated} exact path="/dashboard/profile" component={Profile} />
                        <GuardRoute auth={isAuthenticated} exact path="/dashboard/stocks/:stockId" component={Stock} />
                    </Switch>
                </Router>
            </div>
        )
    }

}