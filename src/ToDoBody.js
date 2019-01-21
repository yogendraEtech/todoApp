import React from 'react';
import ToDoItems from './ToDoitems'

class ToDoBody extends React.Component{
    render(){
        return(
            <div>
                <ToDoItems items={this.props.todoList}/>
            </div>
        )
    }
}

export default  ToDoBody;