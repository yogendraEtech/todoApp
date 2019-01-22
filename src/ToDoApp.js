import React from 'react';
import ToDoName from './ToDoName';
import ToDoBody from './ToDoBody';
import './ToDoApp.scss'

class ToDoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: 'Morning Activities',
            todoList: [
                { id: 0, name: 'Early awakening', checked: true },
                { id: 1, name: 'Exercise', checked: false },
                { id: 2, name: 'Heavy Breakfast', checked: true }
            ],
            data:''
        }

    }
    handleClick(e, data) {
        e.preventDefault();
        this.setState({
            todoList: [...this.state.todoList,data]
        })
     
    }

    render() {
        return (
            <div className='card container todoApp'>
                <h3 className='card-header'>Todo App</h3>
                <ToDoName todoName={this.state.todoName} /> 
                <ToDoBody todoList={this.state.todoList} handleClick={(e,data) => this.handleClick(e,data)} />
            </div>

        )
    }
}

export default ToDoApp;