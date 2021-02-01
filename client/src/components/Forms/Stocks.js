import React from 'react'
import { Link } from 'react-router-dom'

// Componets
import Button from '../Button/Button'
import DatePicker from 'react-datepicker'

// styles
import 'react-datepicker/dist/react-datepicker.css'

export default class StocksForm extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            data: {},
            showDatePicker: false,
            loading: true,
            selectedDate: ''
        }

        this.onChangeDate = this.onChangeDate.bind(this)
    }

    componentDidMount() {

        this.setState({
            loading: false
        })

    }

    onChangeDate(date) {

        let { selectedDate } = this.state
        selectedDate = date

        this.setState({
            selectedDate
        })

    }

    render() {
        const styles = this.props.styles
        const { loading, selectedDate } = this.state
        const date = new Date()

        if (loading) {
            return <h3>Loading...</h3>
        }
        return (
            <div className={styles.content}>
                <form>
                    <div className={styles.group}>
                        <label htmlFor="">Buscar por nombre o codigo</label>
                        <input type="text" placeholder="Ej: ARG o Grupo Argos" id="input_search" />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Fecha del Comercio</label>
                        <DatePicker
                            id="date_picker"
                            selected={selectedDate}
                            className={styles.input_datepicker}
                            placeholderText={date.getMonth() + 1 + "/"+ date.getDate() + "/" + date.getFullYear()}
                            name="date_trade"
                            dateFormat="MM/dd/yyyy"
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Cantidad</label>
                        <input type="text" placeholder="Ej: 123" id="input_number" />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Precio Und.</label>
                        <input type="text" placeholder="Ej: 123" id="input_number" />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="">Comision</label>
                        <input type="text" placeholder="Ej: 123" id="input_number" />
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