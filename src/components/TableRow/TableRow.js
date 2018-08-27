import React, {Component} from 'react'

import Button from '../Button/Button'
import classes from './TableRow.css'

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountPurchased: 0
    }
    this.addTicket = this.addTicket.bind(this)
    this.removeTicket = this.removeTicket.bind(this)
  }

  addTicket() {
    this.setState((prevState) => {
      return { amountPurchased : prevState.amountPurchased + 1 };
    });
  }

  removeTicket() {
    this.setState((prevState) => {
      return { amountPurchased : prevState.amountPurchased - 1 };
    });
  }

  render() {
    const addIsDisabled = (this.props.ticketsAvailable - this.state.amountPurchased === 0) ?
      'pure-button-disabled' : ''
    const removeIsDisabled = (this.state.amountPurchased === 0) ?
      'pure-button-disabled' : ''

    return (
      <tbody>
        <tr>
          <th>{this.props.title}</th>
          <th>{this.props.ticketsLeft- this.state.amountPurchased}</th>
          <th>{this.props.ticketsAvailable - this.state.amountPurchased}</th>
          <th>{this.props.status}</th>
          <th>{this.state.amountPurchased}</th>
          <th>
            <Button isDisabled={addIsDisabled}
              text={'+'}
              style={{backgroundColor:'rgb(28, 184, 65)'}}
              onClick={this.addTicket}/>
            <Button isDisabled={removeIsDisabled}
              text={'−'}
              style={{backgroundColor:'rgb(202, 60, 60)'}}
              onClick={this.removeTicket}/>
          </th>
        </tr>
      </tbody>
    )
  }
}

export default TableRow
