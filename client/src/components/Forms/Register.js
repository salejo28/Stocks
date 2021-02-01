import React from 'react'

import Button from '../Button/Button'

export default class Register extends React.Component {

    render() {
        const styles = this.props.styles
        return (
            <div>
                <form>
                    <h3>Registrarse</h3>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-signature"></i>
                        <input
                            type="text"
                            placeholder="Nombre Completo"
                            name="fullname"
                            required
                        />
                    </fieldset>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            placeholder="Nombre de Usuario"
                            name="username"
                            required
                        />
                    </fieldset>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            placeholder="Correo"
                            name="email"
                            required
                        />                        
                    </fieldset>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-key"></i>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            required
                        />                        
                    </fieldset>
                    <fieldset className={styles.field_group}>
                        <i className="fas fa-key"></i>
                        <input
                            type="password"
                            placeholder="Confirmar Contraseña"
                            name="confirmPassword"
                            required
                        />                        
                    </fieldset>

                    <Button
                        text="Registrarse"
                        disabled={true}
                        styles={styles}
                        type="form"
                    />
                </form>
            </div>
        )
    }

}