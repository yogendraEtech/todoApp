import React from 'react';

class ToDoItems extends React.Component {
    render() {
        const item = this.props.items;

        const rows = item.map((m) => {
            return (
                <div className='card-body item' key={m.id}>
                    <input className='checkbox' type='checkbox' readOnly checked={m.checked} />
                    {m.name}
                    {m.checked && <span className="badge badge-secondary">complete</span>}
                </div>
            )
        })
        return (<div>
            {rows}
        </div>
        )
    }
}
export default ToDoItems;
