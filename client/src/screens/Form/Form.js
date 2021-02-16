import React from 'react'

// Components
import Login from '../../components/Forms/Login'
import Register from '../../components/Forms/Register'
import Alert from '../../components/Alert/Alert'

// Styles
import styles from './Form.module.css'

// Api
import UserApi from '../../api/User'

export default class Form extends React.Component {

    state = {
        showRegister: false,
        showLogin: true,
        errorsFromServer: {},
        showAlert: false
    }

    onClick(button) {
        let { showLogin, showRegister } = this.state

        if (button.target.value === 'SignUp') {
            const previousButton = button.target.previousSibling
            previousButton.classList.remove(styles.active)
            button.target.classList.add(styles.active)

            showLogin = false
            showRegister = true

            this.setState({
                showLogin,
                showRegister
            })
        }

        if (button.target.value === 'SignIn') {
            const nextButton = button.target.nextSibling
            nextButton.classList.remove(styles.active)
            button.target.classList.add(styles.active)

            showLogin = true
            showRegister = false

            this.setState({
                showLogin,
                showRegister
            })
        }

    }

    onClickAlert() {
        let { showAlert } = this.state

        showAlert = false

        this.setState({
            showAlert
        })
    }

    async onSubmitLogin(e, args) {
        e.preventDefault()
        let { errorsFromServer, showAlert } = this.state
        const res = await new UserApi().SignIn(args)
        console.log(res)

        const { success, errors } = res.data
        if (!success) {
            errorsFromServer = errors
            showAlert = true
            this.setState({
                errorsFromServer,
                showAlert
            })
        } else {
            localStorage.setItem('token', res.data.token)
            e.target.reset()
            args = {}
            this.setState({
                args
            })
            this.props.isAuth()
            this.props.history.push('/dashboard')
        }

    }

    async onSubmitRegister(e, args) {
        e.preventDefault()
        let { errorsFromServer, showAlert } = this.state
        const res = await new UserApi().SignUp(args)

        const { success, errors } = res.data
        if (!success) {
            errorsFromServer = errors
            showAlert = true
            this.setState({
                errorsFromServer,
                showAlert
            })
        } else {
            e.target.reset()
            localStorage.setItem('token', res.data.token)
            args = {}
            this.setState({
                args
            })
            this.props.isAuth()
            this.props.history.push('/dashboard')
        }

    }

    render() {
        const { showLogin, showRegister, errorsFromServer, showAlert } = this.state
        const errorsLength = Object.keys(errorsFromServer).length !== 0
        return (
            <div className={styles.container}>
                {
                    errorsLength && showAlert ? <div className={styles.Alert}>
                        <Alert type="error" message={errorsFromServer.message} onClick={this.onClickAlert.bind(this)} />
                    </div> : <></>
                }
                <div className={styles.form_content}>
                    <div className={styles.links}>
                        <button
                            className={styles.active}
                            onClick={this.onClick.bind(this)}
                            value="SignIn"
                        >
                            Iniciar Sesion
                        </button>
                        <button
                            onClick={this.onClick.bind(this)}
                            value="SignUp"
                        >
                            Registrarse
                        </button>
                    </div>
                    <div className={styles.forms}>
                        {
                            showLogin ? <Login styles={styles} onSubmit={this.onSubmitLogin.bind(this)} {...this.props} /> :
                                showRegister ? <Register styles={styles} onSubmit={this.onSubmitRegister.bind(this)}  {...this.props} /> : <></>
                        }
                    </div>
                </div>
            </div>
        )
    }

}