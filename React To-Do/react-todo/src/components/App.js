import React, { Component } from 'react';
import './../App.css';

class App extends Component {
    
    state = {
        todo:["Learn react", "Create app"],
        done:["Learn Javascript"]
    }

    updateList(type, item){
        
        var index;
        if (index != -1){
            if(type === "todo"){
                index = this.state.todo.indexOf(item);
                this.state.todo.splice(index, 1);
                this.state.done.push(item);
            }
            else if(type === "done"){
                index = this.state.done.indexOf(item);
                this.state.done.splice(index, 1);
                this.state.todo.push(item);
            }
            
            this.setState(
                this.state = {
                    todo: this.state.todo,
                    done: this.state.done
                }
            )
        }
    }

    createList(type){
        var arr = [];
        (type === "todo") ? arr = this.state.todo : arr = this.state.done;
        return arr.map((item)=>{
            return(
                <li>
                    <p onClick = {()=>this.updateList(type, item)}>{item}</p>
                </li>
            );
        });
    }

    render() {
        return (
        <div>
            <h3>To Do:</h3>
            <div id="divToDo">
                <ul>
                    {this.createList("todo")}
                </ul>
            </div>
            <br/>
            <h3>Done:</h3>
            <div id="divDone">
                <ul>
                    {this.createList("done")}
                </ul>
            </div>
        </div>
        );
    }
}

export default App;
