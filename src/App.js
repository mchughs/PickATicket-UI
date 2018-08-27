import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import store from './store';

import Banner from './components/Banner/Banner'
import CalendarPicker from './components/CalendarPicker/CalendarPicker'
import Tables from './components/Tables/Tables'

class App extends Component {
  constructor() {
    super();
    this.state = {
      queryDate: moment().format("YYYY-MM-DD"),
      showDate: moment().format("YYYY-MM-DD"),
      inventory: [],
    }
    this.setShowDate = this.setShowDate.bind(this);
    this.setQueryDate = this.setQueryDate.bind(this);
  }

  componentDidMount() {
    axios.get(`https://pick-a-ticket.herokuapp.com/inventory?queryDate=${this.state.queryDate}&showDate=${this.state.showDate}`)
      .then(res => {
        const inventory = res.data.inventory;
        this.setState({ inventory });
      })
  }

  componentDidUpdate() {
    axios.get(`https://pick-a-ticket.herokuapp.com/inventory?queryDate=${this.state.queryDate}&showDate=${this.state.showDate}`)
      .then(res => {
        const inventory = res.data.inventory;
        this.setState({ inventory });
      })
  }

  setShowDate(date) {
    const showDate = date.format("YYYY-MM-DD");
    this.setState({ showDate });
  }

  setQueryDate(date) {
    const queryDate = date.format("YYYY-MM-DD");
    this.setState({ queryDate });
  }

  render() {
    return (
      <Provider store={store}>
        <div style={{width:'100%'}}>
          <Banner todayDate={this.state.queryDate}/>
          <CalendarPicker
            showDate={moment(this.state.showDate)}
            setShowDate={this.setShowDate}
            queryDate={moment(this.state.queryDate)}
            setQueryDate={this.setQueryDate}/>
          <Tables inventory={this.state.inventory}/>
        </div>
      </Provider>
    );
  }
}

export default App;
