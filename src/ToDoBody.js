import React from 'react';
import ToDoItems from './ToDoitems';
import ToDoForm from './ToDoForm';

class ToDoBody extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ToDoItems items={this.props.todoList} checkClick={(event) => this.props.checkClick(event)} />
                <ToDoForm items={this.props.todoList} handleClick={(data) => this.props.handleClick(data)} />
            </div>
        )
        
    }
}

export default ToDoBody;