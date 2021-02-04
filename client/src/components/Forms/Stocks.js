import React from 'react'
import { Link } from 'react-router-dom'

// Componets
import Button from '../Button/Button'
import DatePicker from 'react-datepicker'

// Helpers
import { onlyNumber } from '../../utils/OnlyNumber'
import { randomColor } from '../../utils/Color'

// styles
import 'react-datepicker/dist/react-datepicker.css'

export default class StocksForm extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            data: {},
            showDatePicker: false,
            loading: true,
            selectedDate: '',
            pasted: false
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
        let { data, pasted } = this.state
        const { name, value } = input.target

        if (name === "company") {

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

    handlePaste() {

        this.setState({
            pasted: true
        })

    }

    onSubmit(e, args) {
        e.preventDefault()
        args['color'] = randomColor()
        console.log(args)

        e.target.reset()
    }

    render() {
        const styles = this.props.styles
        const { loading, selectedDate, data } = this.state
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
                            id="input_search"
                            onChange={this.onChange}
                            onPaste={this.handlePaste}
                            value={data.company ? data.company : ''}
                        />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Fecha del Comercio</label>
                        <DatePicker
                            selected={selectedDate}
                            className={styles.input_datepicker}
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
                            onPaste={this.handlePaste}
                            value={data.quantity ? data.quantity : ''}
                        />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Precio Und.</label>
                        <input
                            type="text"
                            placeholder="Ej: 123"
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