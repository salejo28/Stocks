import axios from 'axios'

class Stock {

    URI = process.env.REACT_APP_URI

    async Search(value, token) {
        return await axios.post(this.URI + '/stocks/search', { "value": value }, { headers: { "x-token": token } })
    }

}

export default Stock