import React from 'react';
import ToDoName from './ToDoName';
import ToDoBody from './ToDoBody';
import './ToDoApp.scss'

class ToDoApp extends React.Component {
    constructor() {
        super();
        this.arr = [];
        this.state = {
            todoName: 'Morning Activities',
            todoList: [
                { id: 0, name: 'Early awakening', checked: true },
                { id: 1, name: 'Exercise', checked: false },
                { id: 2, name: 'Heavy Breakfast', checked: true }
            ],
        }
    }
    handleClick(data) {
        this.setState({
            todoList: [...this.state.todoList, data]
        })
    }
    checkClick(id) {
        this.setState(prevState => ({
            todoList: prevState.todoList.map(

                c => c.id === id ? Object.assign(c, { checked: !c.checked }) : c)
        }));
        // this.setState({
        //     todoList: [...this.state.todoList.slice(0, index), { ...this.state.todoList[index], checked: !this.state.todoList[index].checked }, ...this.state.todoList.slice(index + 1)]
        // })

    }


    render() {
        return (
            <div className='card container todoApp'>
                <h3 className='card-header'>Todo App</h3>
                <ToDoName todoName={this.state.todoName} />
                <ToDoBody todoList={this.state.todoList} checkClick={(id) => this.checkClick(id)} handleClick={(data) => this.handleClick(data)} />
            </div>

        )
    }
}

export default ToDoApp;