import React from 'react';

class ToDoName extends React.Component {
    render() {
        return (
            <div className='card-title card-body'>
                <h5>{this.props.todoName}</h5>
            </div>
        )
    }
}

export default ToDoName;