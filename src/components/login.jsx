import React, { Component } from 'react';
import { Form, FormGroup, Input, FormFeedback, Button, ListGroup, ListGroupItem } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      password: "",
      userName: "",
      error: {
        isEmail: false,
        isPassword: false,
        isUserName: false
      },
      isNext: false
     }
  }

  login = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password || !this.state.userName) {
      let error = {...this.state.error};
      if (!this.state.email) {
        error.isEmail = true;
      }
      if (!this.state.password) {
        error.isPassword = true;
      }
      if (!this.state.userName) {
        error.isUserName = true;
      }
      this.setState({
        error
      });
    } else {
      this.setState({isNext: true});
    }
  }
  
  submit = () => {
    let payload = {
      email: this.state.email,
      password: this.state.password,
      userName: this.state.userName
    };
    let registerUsers = window.sessionStorage.getItem('users')
      ? JSON.parse(window.sessionStorage.getItem('users')) : [];
    registerUsers.push(payload);
    window.sessionStorage.setItem('users', JSON.stringify(registerUsers));
    this.props.history.push('/dashboard');
  }

  render() { 
    return ( 
      <React.Fragment>
        <div className="signup">
          {
            !this.state.isNext ? 
            <>
              <Form  onSubmit={this.login}>
                <h1 className="py-4">
                  <span>Interested in Scaleup Vision</span>
                </h1>
                <h2 className="py-4">
                  <span>Registration Form</span>
                </h2>
                <FormGroup>  
                  <Input type="text" name="userName" id="userName" placeholder="User Name"
                    value={this.state.userName}
                    onChange={e => this.setState({userName: e.target.value})}
                    invalid={this.state.error.isUserName}
                  />
                  <FormFeedback>Incorrect Email</FormFeedback>
                </FormGroup>
                <FormGroup>  
                  <Input type="email" name="email" id="userEmail" placeholder="Email Id"
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                    invalid={this.state.error.isEmail}
                  />
                  <FormFeedback>Incorrect Email</FormFeedback>
                </FormGroup>
                <FormGroup>  
                  <Input type="password" name="password" id="userPassword" placeholder="Password"
                    onChange={e => this.setState({password: e.target.value}) }
                    value={this.state.password}
                    invalid={this.state.error.isPassword}
                  />
                  <FormFeedback>Incorrect Password</FormFeedback>
                </FormGroup>
                <Button>Next</Button>
              </Form>
            </>
            : <>
              <Form  onSubmit={this.submit}>
                <h1 className="py-4">
                  <span>Welcome to Back</span>
                </h1>
                <FormGroup>
                  <ListGroup>
                    <ListGroupItem>Name: {this.state.userName}</ListGroupItem>
                    <ListGroupItem>Email: {this.state.email}</ListGroupItem>
                  </ListGroup>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </>
          }
        </div>
        <style jsx>{`
          .signup {
            max-width: 700px;
            margin: 0 auto;
            padding: 1rem;
          }
        `}</style>
      </React.Fragment>
     );
  }
}
 
export default Login;
