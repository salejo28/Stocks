import React, { Fragment } from 'react'


const List = ({ styles, data, onClick }) => {

    const list = data.map(stock => {
        return (
            <li className={styles.list_item} key={stock.id} value={stock.company} onClick={e => onClick(e, stock.company)}>
                <span>{stock.ticker}</span> - {stock.company}
            </li>
        )
    })

    return (
        <Fragment>
            <ul className={styles.list}>
                {list}
            </ul>
        </Fragment>
    )

}

export default List