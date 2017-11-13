import React, {Component} from 'react';
import * as API from '../api/API';

class Main extends Component{
    state = {
        inputdata: {
            num1: '',
            num2: '',
            operator: ''
        },
        result: ''
    }

    calculate = () => {API.doCalculation(this.state.inputdata)
        .then((data) => {if(data.message != null)
            this.setState({
            result: data.message.toString()
        })
    }        
    )}

    setOperator = (clickedButton) => {
        this.setState({
            inputdata:{
            ...this.state.inputdata,
            operator: clickedButton
            }
        },this.calculate)
        console.log(this.state.inputdata)
    }
    
    render(){
        return(
            <div className="container-fluid mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="number"
                                    label="number1"
                                    placeholder="Number 1"
                                    value={this.state.inputdata.num1}
                                    onChange={(event) => 
                                        this.setState({
                                            inputdata:{
                                                ...this.state.inputdata,
                                                num1: event.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="row justify-content-md-center">
                                <p class="text-primary h-100 font-weight-bold">
                                    {this.state.inputdata.operator}   
                                </p>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="number"
                                    label="number2"
                                    placeholder="Number 2"
                                    value={this.state.inputdata.num2}
                                    onChange={(event) => 
                                        this.setState({
                                            inputdata:{
                                                ...this.state.inputdata,
                                                num2: event.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary ml-2"
                                    type="button"
                                    onClick={() =>
                                        this.setOperator('+')
                                    }>
                                    +
                                </button>
                                <button
                                    className="btn btn-primary ml-2"
                                    type="button"
                                    onClick={() =>
                                        this.setOperator('-')
                                    }>
                                    -
                                </button>
                                <button
                                    className="btn btn-primary ml-2"
                                    type="button"
                                    onClick={() =>
                                        this.setOperator('*')
                                    }>
                                    X
                                </button>
                                <button
                                    className="btn btn-primary ml-2"
                                    type="button"
                                    onClick={() =>
                                        this.setOperator('/')
                                    }>
                                    /
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                    {this.state.result && (
                        <div className="alert alert-warning" role="alert">
                             Answer : {this.state.result}   
                        </div>
                    )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
