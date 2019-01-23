import React from 'react';

class ToDoItems extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const item = this.props.items;
        const rows = item.map((m) => {
            return (
                <div className='card-body item' key={m.id}>
                    <input className='checkbox' type='checkbox' id={m.id} checked={m.checked} onChange={()=>this.props.checkClick(m.id)} />
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
