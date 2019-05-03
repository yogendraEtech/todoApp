import React from 'react';
import './ToDoForm.scss';
import classNames from 'classnames';

class ToDoForm extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            item: {},
            empty: null
        }
        this.i = 3;
    }
    myElement = () => {

        this.setState({
            item: { id: this.i++, name: this.ref.current.value, checked: false }
        });
    }
    onchangefun = () => {
        if (this.ref.current.value == '') {
            this.setState({
                empty: null
            })
        }
        else {
            this.setState({
                empty: 'input inserted'
            })
        }
    }
    render() {
        let inputClass = classNames({
            redBorder: true,
        })
        return (
            <div className='form card-footer'>
                <form onSubmit={(e) => { e.preventDefault(); this.props.handleClick(this.state.item) }}>
                    <h5>ToDo</h5>
                    <input onChange={this.onchangefun} ref={this.ref} className={!(this.state.empty) ? inputClass + ' input-box' : 'input-box'} type="text" placeholder="Your Todo" />
                    <input className=' btn btn-lg submit-btn' type="submit" onMouseDown={this.myElement} />
                </form>
            </div>
        )
    }
}

export default ToDoForm;