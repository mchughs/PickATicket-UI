import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Banner from './components/Banner/Banner'
import CalendarPicker from './components/CalendarPicker/CalendarPicker'
import Tables from './components/Tables/Tables'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Banner />
          <CalendarPicker />
          <Tables />
        </div>
      </Provider>
    );
  }
}

export default App;
