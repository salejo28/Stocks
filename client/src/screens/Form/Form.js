import React from 'react'

import Login from '../../components/Forms/Login'
import Register from '../../components/Forms/Register'

import styles from './Form.module.css'

export default class Form extends React.Component {

    state = {
        showRegister: false,
        showLogin: true
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

    render() {
        const { showLogin, showRegister } = this.state
        return (
            <div className={styles.container}>
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
                            showLogin ? <Login styles={styles} /> :
                                showRegister ? <Register styles={styles} /> : <></>
                        }
                    </div>
                </div>
            </div>
        )
    }

}