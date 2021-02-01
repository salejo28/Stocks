import React from 'react'

// Components
import FormStocks from '../../components/Forms/Stocks'

// Styles
import styles from './Stocks.module.css'

const newStock = () => {

    return(
        <div className={styles.content_form}>
            <FormStocks styles={styles} />
        </div>
    )

}

export default newStock