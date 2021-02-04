import React from 'react'

// Components
import Button from '../Button/Button'

// Helpers
import { matchPasswords, validateEmail, validRegister } from '../../utils/Validate'

export default class Register extends React.Component {

    state = {
        args: {},
        errorsFromServer: {},
        errors: {},
        pasted: false
    }

    onChange(input) {

        let { args, pasted } = this.state
        const { name, value } = input.target

        if (name === 'email') {
            const valid = validateEmail(value)
            if (!valid) {
                const error = {
                    success: false,
                    message: 'Email Invalido',
                    path: ['email']
                }

                this.handleError(error)
            }
        }

        if (name === 'password' || name === 'confirmPassword') {
            if (!matchPasswords(args)) {
                const error = {
                    success: false,
                    message: 'Las contraseñas no coinciden',
                    path: ['password', 'confirmPassword']
                }

                this.handleError(error)
            }
        }

        if (!pasted) {
            args[name] = value

            const error = {}
            this.handleError(error)

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

        let { errors } = this.state

        errors = error

        this.setState({
            errors
        })

    }

    handlePaste() {
        let { pasted } = this.state
        pasted = true

        this.setState({
            pasted
        })
    }


    /* async onSubmit(e, args) {
        e.preventDefault()
        e.target.reset()
        console.log(args)
    } */

    render() {
        const styles = this.props.styles
        const { args, errors } = this.state

        const emptyErrors = Object.keys(errors).length === 0
        const emptyData = Object.keys(args).length === 0
        const valid = validRegister(args)
        return (
            <div>
                <form onSubmit={e => this.onSubmit(e, args)}>
                    <h3>Registrarse</h3>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-signature"></i>
                        <input
                            type="text"
                            placeholder="Nombre Completo"
                            name="fullname"
                            onChange={this.onChange.bind(this)}
                            onPaste={this.handlePaste.bind(this)}
                            value={args.fullname ? args.fullname : ''}
                            required
                        />
                    </fieldset>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            placeholder="Nombre de Usuario"
                            name="username"
                            onChange={this.onChange.bind(this)}
                            onPaste={this.handlePaste.bind(this)}
                            value={args.username ? args.username : ''}
                            required
                        />
                    </fieldset>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            placeholder="Correo"
                            name="email"
                            onChange={this.onChange.bind(this)}
                            onPaste={this.handlePaste.bind(this)}
                            value={args.email ? args.email : ''}
                            required
                        />
                    </fieldset>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-key"></i>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            onChange={this.onChange.bind(this)}
                            onPaste={this.handlePaste.bind(this)}
                            value={args.password ? args.password : ''}
                            required
                        />
                    </fieldset>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-key"></i>
                        <input
                            type="password"
                            placeholder="Confirmar Contraseña"
                            name="confirmPassword"
                            onChange={this.onChange.bind(this)}
                            onPaste={this.handlePaste.bind(this)}
                            value={args.confirmPassword ? args.confirmPassword : ''}
                            required
                        />
                    </fieldset>

                    {
                        !emptyErrors || emptyData || !valid ?
                            <Button
                                text="Registrarse"
                                disabled={true}
                                styles={styles}
                                type="form"
                            /> :
                            <Button
                                text="Registrarse"
                                disabled={false}
                                styles={styles}
                                type="form"
                            />
                    }
                </form>
            </div>
        )
    }

}