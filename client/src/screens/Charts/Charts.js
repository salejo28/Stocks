import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Nav from '../../components/Nav/Nav'
import Loader from '../../components/Loader/Loader'

// Styles
import styles from './Charts.module.css'

export default class Charts extends React.Component {

    state = {
        data: {},
        loading: true
    }

    componentDidMount() {
        let { loading } = this.state

        setTimeout(() => {
            loading = false
            this.setState({
                loading
            })
        }, 1000)
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
                        ) : <></>
                }
            </div>
        )
    }

}