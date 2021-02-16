import axios from 'axios'
import cheerio from 'cheerio'


export async function getValueToday() {
    const res = await axios.get('https://www.investing.com/stock-screener/?sp=country::122|sector::a|industry::a|equityType::a|exchange::55%3Ceq_market_cap;1')
    const $ = cheerio.load(res.data)
    const table = $('td')
    console.log(table.html())
}