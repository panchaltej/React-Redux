import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Signup from "./Signup";
import Message from "./Message";
import Welcome from "./Welcome";

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: '',
        loginmessage: ''
        
    };

    handleSignup = (userdata) => {
        API.doSignup(userdata)
        .then((status) => {
            if (status === 201) {
                this.setState({
                    isSignedUp: true,
                });
                this.props.history.push("/login");
            } else if (status === 401) {
                this.setState({
                    message: 'Already Signed Up!',
                });
                this.props.history.push("/signedup");
            }
        });
    }

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        username: userdata.username
                        
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        loginmessage: "Wrong username or password. Try again..!!"
                    });
                    this.props.history.push("/login");
                }
            });
    };

    handleLogout = () => {
        console.log('logout called');
        API.logout()
            .then((status) => {
                if(status === 200){
                    this.setState({
                        isLoggedIn: false
                    });
                    this.props.history.push("/");
                }
            });
    };


    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>
                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit} loginmessage={this.state.loginmessage}/>
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome handleLogout={this.handleLogout} username={this.state.username}/>
                )}/>
                <Route exact path="/signup" render={() => (
                    <Signup handleSignup={this.handleSignup}/>
                )}/>
                <Route exact path="/signedup" render={() => (
                    <div>
                        <Signup handleSignup={this.handleSignup}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);