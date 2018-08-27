import React from 'react'
import _ from 'lodash'

import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import classes from './Table.css'

const Table = (props) => {
  const rows = _.orderBy(props.shows, ['tickets_left'], ['desc'])
    .map((show, i) => {
      return (
        <TableRow key={i}
          title={show.title}
          ticketsLeft={show.tickets_left}
          ticketsAvailable={show.tickets_available}
          status={show.status}/>
      )
    });

  return (
    <div className={classes.Table}>
      <text>{props.genre}</text>
      <table>
        <TableHeader />
        {rows}
      </table>
    </div>
  )
}

export default Table
