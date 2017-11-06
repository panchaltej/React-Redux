import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {AddItem} from '../actions/index';


class MenuItem extends Component{

    createItemsList(){
        return this.props.items.map((menuitem) => {
            return(
                <li key={menuitem.id} >
                    <div className="row">
                        <div className="card-body col-md-5">
                            - {menuitem.item}
                        </div>
                        <div className="card-body col-md-4">
                            Price : ${menuitem.cost}
                        </div>
                        <div className="card-body col-md-3">
                            <button onClick={() => this.props.AddItem(menuitem)} class="btn-group btn-primary">
                                Add >
                            </button>
                        </div>
                    </div>
                </li>
            );
        });
    }

    

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <div role="alert">
                        <ul class="list-unstyled">
                            {this.createItemsList()}
                        </ul>
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
    return bindActionCreators({AddItem : AddItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);