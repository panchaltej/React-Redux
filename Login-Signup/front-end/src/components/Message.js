import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    {this.props.message && ( //Just a change here
                        <div className="alert alert-warning" role="alert">
                            <p>Email-Id already registered!   
                                <a href="login">Login</a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Message;