import React from 'react'

import styles from './Loader.module.css'

export default function Loader() {
    return(
        <div className={styles.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}