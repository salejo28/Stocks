import axios from 'axios'

class Trade {

    URI = process.env.REACT_APP_URI

    async createTrade(data, token) {
        return await axios.post(this.URI + '/trade/create', data, { headers: { 'x-token': token } })
    }

    async getTrade(id, token) {
        return await axios.get(this.URI + `/trade/getstock/${id}`, { headers: { 'x-token': token } })
    }

    async getTrades(token) {
        return await axios.get(this.URI + '/trade/getstocks', { headers: { 'x-token': token } })
    }

}

export default Trade