import React from 'react'

import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import classes from './Table.css'

const Table = (props) => {
  return (
    <div>
      <text>myGenre</text>
      <table>
        <TableHeader />
        {/*For each show in the genre*/}
        <TableRow />
        <TableRow />
        <TableRow />       
      </table>
    </div>
  )
}

export default Table
