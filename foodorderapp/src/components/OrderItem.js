import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RemoveItem} from '../actions/index';


class OrderItem extends Component{

    createItemsList(){
        return this.props.items.map((orderitem) => {
            if(orderitem.ordered == "true"){
                return(
                    <li key={orderitem.id}>
                        <div className="row">
                            <div className="card-body col-md-5">
                                -{orderitem.item}
                            </div>
                            <div className="card-body col-md-3">
                                Total : ${orderitem.totalcost}
                            </div>
                            <div className="card-body col-md-2">
                                Qty : {orderitem.Qty}
                            </div>
                            <div className="card-body col-md-2">
                                <button onClick={() => this.props.RemoveItem(orderitem)} class="btn-group btn-danger">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </li>
                    
                );
            }
        });
    }

    calculateTotal(){
        var total = 0;
        this.props.items.map((menuitem) => {
            
                total += menuitem.cost*(menuitem.Qty)
            
        });
        return total;
    }

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <div role="alert">
                        <ul class="list-unstyled">
                            {this.createItemsList()}
                        </ul> 
                        <hr/>
                        <h4>Total bill is : {this.calculateTotal()}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({RemoveItem: RemoveItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);