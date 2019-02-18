import React, {Component} from 'react';
import fecha from 'fecha';

class Message extends Component{
    render(){
        let {message} = this.props
        console.log(message.createdAt)
        // let createdAt = fecha.format(message.createdAt, 'DD-MM-YYYY HH:mm:ss')
        let createdAt = message.createdAt
        return (
            <li className='message'>
                <div className='author'>
                    <strong>{message.author}</strong>
                    <i className='timestamp'>{createdAt}</i>
                </div>
                <div className='body'>{message.body}</div>
            </li>
        )
    }
}

Message.PropTypes = {
    message: React.PropTypes.object.isRequired,
}

export default Message