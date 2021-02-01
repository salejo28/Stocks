import React from 'react'

// Components
import Nav from '../../components/Nav/Nav'
import Table from '../../components/Table/Table'
import Button from '../../components/Button/Button'

// Styles
import styles from './Stocks.module.css'

// Data Example
import dataStock from '../../data/Stocks_1.json'

export default class Stocks extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.fillData()
    }

    fillData() {
        let { data } = this.state
        const data_json = dataStock.Stocks
        for(let i in data_json) {
            data.push(data_json[i])
        }

        this.setState({
            data
        })
    }

    render() {
        const { data } = this.state
        
        return(
            <div className={styles.container}>
                <div>
                    <Nav />
                </div>
                <main>
                    <section className={styles.section_table}>
                        <Table data={data} />
                    </section>
                    <Button type="new" styles={styles} to="/dashboard/stocks/new" />
                </main>
            </div>
        )
    }

}