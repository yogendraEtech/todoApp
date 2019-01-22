import React from 'react';
import './ToDoForm.scss';
import classnames from 'classnames';

class ToDoForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            item: {}
        }
       this.i=4;
    }
   
  
      
    myElement = (event) => {

        this.setState({
            item: { id: this.i++, name: this.ref.current.value, checked: false }
        });
        event.preventDefault();
    }
    render() {
        console.log(this.state.item)
        return (
            <div className='form card-footer'>
                <form  onSubmit={(e)=>this.props.handleClick(this.state.item)}>
                    <h5>ToDo</h5>
                    <input  className='input-box' type="text" placeholder="Your Todo" ref={this.ref}  />
                    <input className=' btn btn-lgsubmit-btn' type="submit" onMouseDown={this.myElement} />
                </form>
            </div>
        )
    }
}

export default ToDoForm;