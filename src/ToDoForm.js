import React from 'react';
import ToDoName from './ToDoName';
import ToDoBody from './ToDoBody';
import './ToDoForm.scss'

class ToDoForm extends React.Component {false
    constructor() {
        super();
        this.state = {
            todoName: 'Morning Activities',
            todoList: [
                { id: 0, name: 'Early awakening', checked: true },
                { id: 1, name: 'Exercise', checked: false },
                { id: 2, name: 'Heavy Breakfast', checked: true }
            ]
        }
    }

    render() {
        return (
            <div className='card container todoForm'>
                <h3 className='card-header'>Todo App</h3>
                <ToDoName todoName={this.state.todoName}/>
                <ToDoBody todoList={this.state.todoList}/>
            </div>

        )
    }
}

export default ToDoForm;