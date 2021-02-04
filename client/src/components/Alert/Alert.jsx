import React from 'react'

import styles from './Alert.module.css'

const AlertError = ({ message, onClick }) => {

    return(
        <div className={styles.alert}>
            <i className={`fas fa-exclamation-circle ${styles.icon_exclamation}`}></i>
            <h3>{message}</h3>
            <i className={`fas fa-times ${styles.icon_times}`} onClick={onClick}></i>
        </div>
    )

}

const Alert = ({ message, type, onClick }) => {

    if (type === 'error') {
        return <AlertError message={message} onClick={onClick} />
    }

    <></>

}

export default Alert