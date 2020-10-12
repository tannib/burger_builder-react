import React, {Component} from 'react'
import './Modal.css'
import Backdrop from './Backdrop'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentDidUpdate () {
        console.log('[Modal.js] didUpdate');
    }

    render() {

        return (
            <div>
            <Backdrop show={this.props.show} clicked={this.props.clicked}/>
            <div 
            style={
                {opacity : this.props.show ? '1' : '0'},
                {transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)'}
            }
            className='Modal'>
                {this.props.children}
            </div>
        </div>
        )
    }
}

export default Modal
