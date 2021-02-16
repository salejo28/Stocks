import axios from 'axios'
import cheerio from 'cheerio'


async function getDataScraping() {
    const AxiosInstance = axios.create()
    let data
    AxiosInstance.get('')
        .then(res => {
            const html = res.data
            const $ = cheerio.load(html)
        })
        .catch(console.error)
}