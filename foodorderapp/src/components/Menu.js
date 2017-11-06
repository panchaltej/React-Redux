import React,{Component} from 'react';
import MenuItem from './MenuItem';

class Menu extends Component{
    render(){
        return(
            <div className="container-fluid">
                    <div className="panel panel-heading">
                        <h3 className="text-center">Menu</h3>
                    </div>
                
                    <div className="card col-md-12">
                        <div className="card-body">
                            {
                                <MenuItem/>
                            }
                        </div>
                    </div>
            </div> 
        );
    }
}

export default Menu;