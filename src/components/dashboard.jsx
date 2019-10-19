import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let count = window.sessionStorage.getItem('users')
      && JSON.parse(window.sessionStorage.getItem('users')).length;
    return ( 
      <div>
        Dashboard
        {
          count &&
          <div>Resistred users: {count}</div>
        }
      </div>
     );
  }
}
 
export default Dashboard;