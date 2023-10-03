import { Component } from 'react';
import './styles.css';

export class Button extends Component {
    render() {
        const { text, onClick, disabled } = this.props;
        return (
            <button className='btn-posts' onClick={onClick} disabled={disabled}>{text}</button>
        )
    }
}