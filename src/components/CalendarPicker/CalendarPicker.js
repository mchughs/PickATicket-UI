import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import classes from './CalendarPicker.css'

class CalendarPicker extends Component {
  render(props) {
    return (
      <div className={classes.CalendarPicker}>
        <div className={classes.CalendarPicker}>
          <text>Select your desired show date:</text>
          <DatePicker
            selected={this.props.showDate}
            onChange={(date) => this.props.setShowDate(date)}
            dateFormat="YYYY-MM-DD" />
        </div>
        <div className={classes.CalendarPicker}>
          <text>Time Machine:</text>
          <DatePicker
            selected={this.props.queryDate}
            onChange={(date) => this.props.setQueryDate(date)}
            dateFormat="YYYY-MM-DD" />
        </div>
      </div>
    )
  }
}

export default CalendarPicker
