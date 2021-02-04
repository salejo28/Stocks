import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Nav from '../../components/Nav/Nav'
import Chart from '../../components/Chart/Chart'
import Button from '../../components/Button/Button'

// Styles
import styles from './Dashboard.module.css'

// data
//import stocks from '../../data/Stocks.json'

/* const data_json = stocks.Stocks */

/* let data = {}

let toChart = []

const color = ['red', 'blue', 'green', 'yellow', "grey"]

for (var i in data_json) {
    toChart.push(data_json[i])

}

var data_ = toChart.map((stock, i) => {
    return {
        label: stock.symbol,
        data: stock.percent,
        fill: false,
        borderColor: color[i]
    }
})

data = {
    labels: ['10s', '20s', '30s', '40s', '50s'],
    datasets: data_
} */



export default class Dashboard extends React.Component {

    state = {
        data: {}
    }

    render() {

        const { data } = this.state

        const emptyData = Object.keys(data).length === 0

        return (
            <div className={styles.container}>
                <div>
                    <Nav />
                </div>
                {
                    emptyData ? (
                    <div className={styles.content_btn}>
                        <Link to="/dashboard/stocks/new" className={styles.link}>
                            Crear Trade
                        </Link>
                    </div>) : (
                            <main>
                                <section className={styles.chart}>
                                    <Chart
                                        type="Line"
                                        data={data}
                                    />
                                </section>
                                <section className={styles.info}>
                                    <article className={styles.info_1}>
                                        <Link to="/dashboard/stocks">
                                            <img src="https://cdn.pixabay.com/photo/2018/01/12/16/16/growth-3078543_960_720.png" alt="Stocks" />
                                            <h3>Tus Acciones</h3>
                                        </Link>
                                    </article>
                                    <article className={styles.info_2}>
                                        <Link to="/dashboard/stocks/new">
                                            <img src="https://cdn.pixabay.com/photo/2016/10/10/22/38/business-1730089_960_720.jpg" alt="New Trade" />
                                            <h3>Crea Un Nuevo Trade</h3>
                                        </Link>
                                    </article>
                                </section>
                            </main>
                        )
                }
            </div>
        )
    }

}