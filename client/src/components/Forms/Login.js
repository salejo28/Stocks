import React from 'react'

// Components
import Button from '../Button/Button'

export default class Login extends React.Component {

    state = {
        errors: {},
        data: {}
    }

    onChange(input) {
        let { data } = this.state
        const { name, value } = input.target

        data[name] = value
        this.setState({
            data
        })
    }

    onSubmit(e, data) {
        e.preventDefault()
        console.log(data)
    }

    render() {
        const styles = this.props.styles
        const { data } = this.state
        return (
            <form onSubmit={e => this.onSubmit(e, data)}>
                <h3>Inicio de Sesion</h3>
                <fieldset className={[styles.field_group]}>
                    <i className="fas fa-envelope"></i>
                    <input
                        type="email"
                        placeholder="Correo"
                        name="email"
                        onChange={this.onChange.bind(this)}
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
                        required
                    />
                </fieldset>

                <Button
                    text="Ingresar"
                    disabled={true}
                    styles={styles}
                    type="form"
                />
            </form>
        )
    }

}