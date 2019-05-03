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
                <ToDoItems items={this.props.todoList} checkClick={(id) => this.props.checkClick(id)} />
                <ToDoForm items={this.props.todoList} handleClick={(data) => this.props.handleClick(data)} />
            </div>
        )
        
    }
}

export default ToDoBody;