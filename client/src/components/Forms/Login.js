import React from 'react'

// Components
import Button from '../Button/Button'

// Helpers
import { validateEmail } from '../../utils/Validate'

export default class Login extends React.Component {

    state = {
        errors: {},
        args: {},
        errorsFromServer: {},
        pasted: false
    }

    onChange(input) {
        let { args, pasted } = this.state
        const { name, value } = input.target

        if (name === 'email') {
            if (value === '') {
                const error = {
                    success: false,
                    message: 'Complete Este Campo',
                    path: ['email']
                }
                this.handleError(error)
            } else {
                const valid = validateEmail(value)
                if (!valid) {
                    const error = {
                        success: false,
                        message: 'Email Invalido',
                        path: ['email']
                    }
                    this.handleError(error)
                } else {
                    const error = {}
                    this.handleError(error)
                }
            }
        }

        if (!pasted) {
            args[name] = value

            this.setState({
                args                
            })
        }

        pasted = false 

        this.setState({
            pasted
        })
    }

    handleError(error) {
        let { errors, disabledButton } = this.state
        errors = error
        disabledButton = true
        this.setState({
            errors,
            disabledButton
        })
    }

    handlePasted() {
        let { pasted } = this.state

        pasted = true

        this.setState({
            pasted
        })
    }

    /* async onSubmit(e, args) {
        e.preventDefault()
        e.target.reset()


        args = {}
        this.setState({
            args
        })
        this.props.history.push('/dashboard')
    } */

    render() {
        const styles = this.props.styles
        const { args, errors } = this.state

        const emptyError = Object.keys(errors).length === 0
        const emptyargs = Object.keys(args).length === 0

        return (
            <form onSubmit={e => this.props.onSubmit(e, args)}>
                <h3>Inicio de Sesion</h3>
                <fieldset className={[styles.field_group]}>
                    <i className="fas fa-envelope"></i>
                    <input
                        type="email"
                        placeholder="Correo"
                        name="email"
                        onChange={this.onChange.bind(this)}
                        onPaste={this.handlePasted.bind(this)}
                        value={args.email ? args.email : ''}
                        required
                    />
                </fieldset>
                <fieldset className={`${styles.field_group}`}>
                    <i className="fas fa-user"></i>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        onChange={this.onChange.bind(this)}
                        onPaste={this.handlePasted.bind(this)}
                        value={args.password ? args.password : ''}
                        required
                    />
                </fieldset>

                {
                    !emptyError || emptyargs ?
                        <Button
                            text="Ingresar"
                            disabled={true}
                            styles={styles}
                            type="form"
                        /> :
                        <Button
                            text="Ingresar"
                            disabled={false}
                            styles={styles}
                            type="form"
                        />
                }
            </form>
        )
    }

}