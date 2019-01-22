import React from 'react';
import ToDoItems from './ToDoitems';
import ToDoForm from './ToDoForm';

class ToDoBody extends React.Component {

    constructor(props) {
        super(props)
        // this.state = {
        //     itemss: this.props.todoList
        // }
    }
  
 
    render() {
       
        //  console.log(this.props.handleClick());
        return (
            <div>
                <ToDoItems items={this.props.todoList} />
                <ToDoForm items={this.props.todoList} handleClick={(data) => this.props.handleClick(data)} />
            </div>
        )
        
    }
}

export default ToDoBody;