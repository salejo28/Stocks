import React, { Fragment } from 'react'

// Components
import Button from '../../components/Button/Button'

// Styles
import styles from './Home.module.css'

const Home = () => {

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>
                        Sigue y calcula tus inversiones
                    </h2>
                </div>
                <div className={styles.right}>
                    <Button
                        text="Iniciar Sesion"
                        type="Link"
                        to="/login"
                    />
                    <span>o</span>
                    <Button
                        text="Registrarse"
                        type="Link"
                        to="/register"
                    />
                </div>
            </div>
        </Fragment>
    )

}

export default Home