import React, {Component} from 'react';
import Menu from './Menu';
import Cart from './Cart';

class Main extends Component{
    render(){
        return(
            <div class="container-fluid" >
                <div class="row" className="row justify-content-md-center">
                    <div class="col-md-6">
                        <Menu/>
                    </div>
                    <div class="col-md-6">
                        <Cart/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
