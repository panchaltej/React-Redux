import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';

class Welcome extends Component {

    static propTypes = {
        username:PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired
    };

    state = {
        firstname : '',
        lastname : '',
        emailid : '',
        password : ''
    };

    componentDidMount(){
        var requsername = this.props.username; 
        API.getUser({requsername})
        .then((obj) => {
            console.log(obj.user.firstname);
            this.setState({
                firstname : obj.user.firstname,
                lastname : obj.user.lastname,
                emailid : obj.user.emailid,
                password : obj.user.password
            });
        });
        document.title = `Welcome!!`;
    }

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <div className="alert alert-warning" role="alert">
                        {this.state.firstname}, welcome to my App..!!
                    </div>
                    <div>
                        <p><strong>EmailId: </strong>{this.state.emailid}</p>
                        <p><strong>Password: </strong>{this.state.password}</p>
                        <p><strong>First Name: </strong>{this.state.firstname}</p>
                        <p><strong>Last Name: </strong>{this.state.lastname}</p>
	                </div>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => this.props.handleLogout(this.state)}>
                        Logout
                    </button>
                </div>
            </div>
        )
    }
}

export default Welcome;
