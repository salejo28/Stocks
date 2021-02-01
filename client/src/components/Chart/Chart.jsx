import React from 'react'
import { Line } from 'react-chartjs-2'

const ChartLine = ({ data }) => {

    return <Line
        width={100}
        height={100}
        data={data}
        options={{ maintainAspectRatio: false }}
    />

}

const Chart = ({ type, data }) => {

    if (type === 'Line') {
        return <ChartLine data={data} />
    }

    <></>

}

export default Chart