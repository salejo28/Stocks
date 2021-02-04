import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Nav from '../../components/Nav/Nav'

// Styles
import styles from './Charts.module.css'

export default class Charts extends React.Component {

    state = {
        data: {}
    }

    render() {
        const { data } = this.state

        const emptyData = Object.keys(data).length === 0

        return(
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
                        </div>
                    ) : <></>
                }
            </div>
        )
    }

}