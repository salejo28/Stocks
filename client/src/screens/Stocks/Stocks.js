import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Nav from '../../components/Nav/Nav'
import Table from '../../components/Table/Table'
import Button from '../../components/Button/Button'
import Loader from '../../components/Loader/Loader'

// Styles
import styles from './Stocks.module.css'

// Data Example
//import dataStock from '../../data/Stocks_1.json'

// Api
import TradeApi from '../../api/Trade'

export default class Stocks extends React.Component {

    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        //this.fillData()
        this.getTrades()
    }

    /* fillData() {
        let { data } = this.state
        const data_json = dataStock.Stocks
        for (let i in data_json) {
            data.push(data_json[i])
        }

        this.setState({
            data
        })
    } */

    async getTrades() {
        let { data, loading } = this.state
        const token = localStorage.getItem('token')
        const res = await new TradeApi().getTrades(token);
        console.log(res)

        data = res.data.trades
        loading = false
        this.setState({
            data,
            loading
        })
        
    }

    render() {
        const { data, loading } = this.state

        const emptyData = Object.keys(data).length === 0
        

        return (
            <div className={styles.container}>
                <div>
                    <Nav />
                </div>
                {   
                    loading ? 
                        <div className={styles.loading_content}>
                            <Loader /> 
                        </div> :
                    emptyData ? (
                        <div className={styles.content_btn}>
                            <Link to="/dashboard/stocks/new" className={styles.link}>
                                Crear Trade
                            </Link>
                        </div>
                    ) : (
                            <main>
                                <section className={styles.section_table}>
                                    <Table data={data} {...this.props} />
                                </section>
                                <Button type="new" styles={styles} to="/dashboard/stocks/new" />
                            </main>
                        )
                }
            </div>
        )
    }

}