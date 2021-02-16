import React from 'react'

// Components
import FormStocks from '../../components/Forms/Stocks'

// Styles
import styles from './Stocks.module.css'

const newStock = (props) => {

    return(
        <div className={styles.content_form}>
            <FormStocks styles={styles} {...props} />
        </div>
    )

}

export default newStock