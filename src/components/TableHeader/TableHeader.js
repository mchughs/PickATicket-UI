import React from 'react'

import classes from './TableHeader.css'

const TableHeader = (props) => {
  return (
    <tr>
      <th>Title</th>
      <th>Tickets Left</th>
      <th>Tickets Available</th>
      <th>Status</th>
      <th>Purchase Amount</th>
      <th>{/*Place holder for button*/}</th>
    </tr>
  )
}

export default TableHeader
