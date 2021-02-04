import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

//import styles from './Button.module.css'

const ButtonForm = ({ text, disabled, styles }) => {

    if (disabled) {
        return (
            <button className={`${styles.btn_form} ${styles.btn_disabled}`} disabled={disabled}>
                {text}
            </button>
        )
    }

    return (
        <button className={styles.btn_form}>
            {text}
        </button>
    )

}

const ButtonNew = ({ to, styles }) => {

    const [redirect, setRedirect] = useState(false)


    const onClick = () => {
        setRedirect(true)
    }

    const goToPage = () => {
        if (redirect) {
            return <Redirect to={to} />
        }
    }

    return (
        <button onClick={onClick} className={styles.btn_new}>
            {goToPage()}
            <i className="fas fa-plus"></i>
        </button>
    )

}

const Button = ({ text, disabled, type, styles, to }) => {

    if (type === "form") {
        return <ButtonForm text={text} disabled={disabled} styles={styles} />
    }

    if (type === 'new') {
        return <ButtonNew to={to} styles={styles} />
    }

    <></>

}

export default Button