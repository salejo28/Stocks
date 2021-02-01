import React from 'react'

import styles from './Alert.module.css'

const AlertError = ({ message }) => {

    return(
        <div className={styles.alert}>
            
        </div>
    )

}

const Alert = ({ message, type }) => {

    if (type === 'error') {
        return <AlertError message={message} />
    }

    <></>

}

export default Alert