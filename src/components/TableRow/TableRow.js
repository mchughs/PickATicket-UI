import React from 'react'

import Button from '../Button/Button'
import classes from './TableRow.css'

const TableRow = (props) => {
  return (
    <tr>
      <th>MyTitle</th>
      <th>MyTickets Left</th>
      <th>MyTickets Available</th>
      <th>MyStatus</th>
      <th>MyPurchase Amount</th>
      <th><Button /> <Button /></th>
    </tr>
  )
}

export default TableRow
