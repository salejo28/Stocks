import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

const ButtonRedirect = ({ text, to }) => {

    return(
        <Link to={to} className={styles.linkBtn}>
            {text}
        </Link>
    )

}

const Button = ({ text, type, to }) => {

    if (type === "Link") {
        return(
            <ButtonRedirect text={text} to={to} />
        )
    }

    return <></>

}

export default Button