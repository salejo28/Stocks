import React from 'react'

// Components
import Nav from '../../components/Nav/Nav'
import Chart from '../../components/Chart/Chart'

// Styles
import styles from './Dashboard.module.css'

// data
import stocks from '../../data/Stocks.json'

const data_json = stocks.Stocks

let data = {}

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
}



export default class Dashboard extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <div>
                    <Nav />
                </div>
                <main>
                    <section className={styles.chart}>
                        <Chart
                            type="Line"
                            data={data}
                        />
                    </section>
                    <section className={styles.info}>
                        <article className={styles.info_1}></article>
                        <article className={styles.info_2}></article>
                    </section>
                </main>
            </div>
        )
    }

}