import React, {Component} from 'react';

import PropTypes from 'prop-types';

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        loginmessage:PropTypes.string.isRequired
    };

    state = {
        username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
            
                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Login</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Submit
                            </button>
                        </div>
                    </form>
                    <p>Don't have an account yet? 
	                	        <a href="signup">Sign Up</a>
                    </p>
                    <div>
                    {this.props.loginmessage && ( //Just a change here
                        <div className="alert alert-warning" role="alert">
                            <p>
                            {this.props.loginmessage}
                            </p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;