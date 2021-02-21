import React from 'react'

// Components
import Nav from '../../components/Nav/Nav'
import Chart from '../../components/Chart/Chart'
import Button from '../../components/Button/Button'

// Api
import TradeApi from '../../api/Trade'

// Helpers
import { formatPrice, formatDate } from '../../utils/StocksUtils'

// Styles
import styles from './Stocks.module.css'

export default class Stock extends React.Component {

    state = {
        stock: {},
        id: null,
        data: {}
    }

    componentDidMount() {
        let { id } = this.state

        id = this.props.match.params.stockId
        this.setState({
            id
        })

        setTimeout(() => {
            this.getStock()
        }, 200)
    }

    async getStock() {
        const { id } = this.state
        let { stock } = this.state
        const token = localStorage.getItem('token')
        const res = await new TradeApi().getTrade(id, token)
        const { success } = res.data
        if (success) {
            stock = res.data.trade
            this.setState({
                stock
            })
        }
    }

    async getLastValue() {
        const token = localStorage.getItem('token')
        await new TradeApi().getLastValue(token)
        this.getStock()
    }

    sellStocks() {
        console.log('Sold')
    }

    render() {
        const { data, stock } = this.state
        console.log(stock)
        return (
            <div>
                <div>
                    <Nav />
                </div>
                <main>
                    <section className={styles.chart}>
                        <Chart
                            type="Line"
                            data={data}
                            option={false}
                        />
                    </section>
                    <section className={styles.info_content}>
                        <div>
                            <div className={styles.info_stock}>
                                <h2>Numero de acciones:</h2>
                                <h4>{stock.quantity}</h4>
                            </div>
                            <div className={styles.info_stock}>
                                <h2>Precio de compra por accion:</h2>
                                <h4>{formatPrice(stock.unit_price)}</h4>
                            </div>
                            <div className={styles.info_stock}>
                                <h2>Nombre de la compañia:</h2>
                                <h4>{stock.company}</h4>
                            </div>
                            <div className={styles.info_stock}>
                                <h2>Sector:</h2> 
                                <h4>{stock.sector}</h4>
                            </div>
                            <div className={styles.info_stock}>
                                <h2>Fecha de la compra:</h2> 
                                <h4>{formatDate(stock.date_trade)}</h4>
                            </div>
                        </div>
                        <div>
                            <div className={styles.info_stock}>
                                <h2>Total invertido:</h2>
                                <h4>{formatPrice(stock.total)}</h4>
                            </div>
                            <div className={styles.info_stock}>
                                <h2>Valor actual:</h2>
                                <h4>{formatPrice(stock.actual_value)}</h4>
                            </div>
                            <div className={styles.info_stock}>
                                <Button 
                                    text="Actualizar datos"
                                    styles={styles}
                                    disabled={false}
                                    onClick={this.getLastValue.bind(this)}
                                />
                            </div>
                            <div className={styles.info_stock}>
                                <Button 
                                    text="Vender"
                                    styles={styles}
                                    disabled={false}
                                    onClick={this.sellStocks.bind(this)}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }

}