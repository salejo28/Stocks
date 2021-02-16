import React from 'react'
import { Link } from 'react-router-dom'

// Componets
import Button from '../Button/Button'
import DatePicker from 'react-datepicker'
import List from '../List/List'

// Helpers
import { onlyNumber, randomColor } from '../../utils/StocksUtils'

// styles
import 'react-datepicker/dist/react-datepicker.css'

// Api
import StockApi from '../../api/Stock'
import TradeApi from '../../api/Trade'

export default class StocksForm extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            data: {},
            showDatePicker: false,
            loading: true,
            selectedDate: '',
            pasted: false,
            showListSearch: null,
            stocks: null
        }

        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChange = this.onChange.bind(this)
        this.handlePaste = this.handlePaste.bind(this)
    }

    componentDidMount() {

        this.setState({
            loading: false
        })

    }

    onChangeDate(date) {

        let { selectedDate, data } = this.state
        selectedDate = date
        data['date_trade'] = date
        this.setState({
            selectedDate,
            data
        })

    }

    onChange(input) {
        let { data, pasted, showListSearch } = this.state
        const { name, value } = input.target

        if (name === "company") {
            this.search(value)
            if (value === "") {
                showListSearch = false
                this.setState({
                    showListSearch
                })
            }
        }

        if (!pasted) {
            data[name] = value

            this.setState({
                data
            })
        }
        this.setState({
            pasted: false
        })
    }

    async search(value) {
        let { showListSearch, stocks } = this.state
        const token = localStorage.getItem('token')
        const res = await new StockApi().Search(value, token)

        const { success } = res.data
        if (success) {
            stocks = res.data.stock
            showListSearch = true
            this.setState({
                showListSearch,
                stocks
            })
        }
    }

    onClickList(e, value) {
        let { data, showListSearch } = this.state
        data['company'] = value
        showListSearch = false
        this.setState({
            value,
            showListSearch
        })
    }

    handlePaste() {

        this.setState({
            pasted: true
        })

    }

    async onSubmit(e, args) {
        e.preventDefault()
        args['color'] = randomColor()
        console.log(args)
        const token = localStorage.getItem('token')
        const res = await new TradeApi().createTrade(args, token)
        const { success } = res.data
        if (success) {
            e.target.reset()
            this.props.history.push('/dashboard/stocks')
        }

    }

    render() {
        const styles = this.props.styles
        const { loading, selectedDate, data, stocks, showListSearch } = this.state
        const date = new Date()

        if (loading) {
            return <h3>Loading...</h3>
        }
        return (
            <div className={styles.content}>
                <form onSubmit={e => this.onSubmit(e, data)}>
                    <div className={styles.group}>
                        <label htmlFor="">Buscar por nombre o codigo</label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Ej: ARG o Grupo Argos"
                            autoComplete="off"
                            id="input_search"
                            onChange={this.onChange}
                            onPaste={this.handlePaste}
                            value={data.company ? data.company : ''}
                        />
                        {
                            showListSearch
                                ? (
                                    <div className={styles.content_list}>
                                        <List data={stocks} styles={styles} onClick={this.onClickList.bind(this)} />
                                    </div>
                                )
                                : <></>
                        }
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Fecha del Comercio</label>
                        <DatePicker
                            selected={selectedDate}
                            className={styles.input_datepicker}
                            autoComplete="off"
                            placeholderText={date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()}
                            name="date_trade"
                            dateFormat="MM/dd/yyyy"
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Cantidad</label>
                        <input
                            type="text"
                            name="quantity"
                            placeholder="Ej: 123"
                            onChange={this.onChange}
                            onKeyPress={e => onlyNumber(e)}
                            autoComplete="off"
                            onPaste={this.handlePaste}
                            value={data.quantity ? data.quantity : ''}
                        />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Precio Und.</label>
                        <input
                            type="text"
                            placeholder="Ej: 123"
                            autoComplete="off"
                            name="unit_price"
                            onChange={this.onChange}
                            onKeyPress={e => onlyNumber(e)}
                            onPaste={this.handlePaste}
                            value={data.unit_price ? data.unit_price : ''}
                        />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Comision</label>
                        <input
                            type="text"
                            name="brokerage"
                            placeholder="Ej: 123"
                            autoComplete="off"
                            onChange={this.onChange}
                            onKeyPress={e => onlyNumber(e)}
                            onPaste={this.handlePaste}
                            value={data.brokerage ? data.brokerage : ''}
                        />
                    </div>
                    <div className={styles.group_btns}>
                        <Link to="/dashboard" className={styles.btn_cancel}>
                            <i className="fas fa-ban"></i> Cancelar
                        </Link>
                        <Button
                            type="form"
                            styles={styles}
                            text="Crear"
                        />
                    </div>
                </form>
            </div>
        )
    }

}