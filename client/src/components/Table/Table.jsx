import React from 'react'
import { Redirect } from 'react-router-dom'

// Styles
import styles from './Table.module.css'

const Table = ({ data }) => {


    const onClick = (e) => {
        console.log(e.target.parentElement)
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
                        data.map(stock => {
                            return (
                                <tr key={stock.ticker} onClick={e => onClick(e)}>
                                    <td>{stock.ticker}</td>
                                    <td>{stock.sector}</td>
                                    <td>{stock.compañia}</td>
                                    <td>{stock.nacciones}</td>
                                    <td>{stock.fecha}</td>
                                    <td>{stock.precio}</td>
                                    <td>{stock.Invinivial}</td>
                                    <td>{stock.Invfinal}</td>
                                    <td>{stock.Invactual}</td>
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