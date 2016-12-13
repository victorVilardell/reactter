import React from 'react'
import MessageList from '../MessageList'

export default class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            messages: [
                {
                    text: 'Test test test vamos a ver',
                    picture: 'http://a0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg',
                    displayName: 'Victor Vilardell',
                    username: 'vvilard',
                    date: Date.now()
                },
                {}
            ]
        }
    }

    render() {
        return (
            <MessageList messages={this.state.messages} />
        )
    }
}
