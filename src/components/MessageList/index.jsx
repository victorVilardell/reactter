import React from 'react'
import Message from '../Message'

export default class MessageList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger;
        return(
            <div>
                {this.props.messages.map(msg => {
                    return(
                            <Message
                                text= {msg.text}
                                picture: {msg.picture}
                                displayName: {msg.displayName}
                                username: {msg.displayName}
                                date: {msg.date}
                            />
                        )
                })}
            </div>
        )
    }

}