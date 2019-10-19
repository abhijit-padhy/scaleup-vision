import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let users = window.sessionStorage.getItem('users')
      && JSON.parse(window.sessionStorage.getItem('users'));
      console.log('users', users);
      
    return (
      <div>
        User list
        {
          users instanceof Array && users.length > 0 ?
            <ListGroup flush>
              {
              users.map(user => (
                <ListGroupItem>{user.email}</ListGroupItem>
              ))
              }
            </ListGroup>
            : <div>No users found</div>
        }
      </div>
    );
  }
}

export default ListingPage;