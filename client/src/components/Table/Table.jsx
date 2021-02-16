import React from 'react'

// Styles
import styles from './Table.module.css'

// Helpers
import { formatDate, formatPrice } from '../../utils/StocksUtils'

const Table = (props) => {

    const onClick = (e) => {
        const { id } = e.target.parentElement
        const stock = e.target.parentElement.childNodes[2].firstChild.data
        props.history.push(`/dashboard/stocks/${id}?stock=${stock}`)
    }

    return (
        <div className={styles.content_table}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            Ticker
                        </th>
                        <th>
                            Sector
                        </th>
                        <th>
                            Compañia
                        </th>
                        <th>
                            #Acciones
                        </th>
                        <th>
                            Fecha
                        </th>
                        <th>
                            Precio
                        </th>
                        <th>
                            Inv. Inicial
                        </th>
                        <th>
                            Precio Final
                        </th>
                        <th>
                            Inv. Actual
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(trade => {
                            return (
                                <tr key={trade.id} onClick={e => onClick(e)} id={trade.id}>
                                    <td>{trade.ticker}</td>
                                    <td>{trade.sector}</td>
                                    <td>{trade.company}</td>
                                    <td>{trade.quantity}</td>
                                    <td>{formatDate(trade.date_trade)}</td>
                                    <td>{formatPrice(trade.unit_price)}</td>
                                    <td>{formatPrice(trade.total)}</td>
                                    <td>{trade.Invfinal}</td>
                                    <td>{trade.Invactual}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Table