import React from 'react'
import styles from './message.css'

export default class Message extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.root}>
                <div className={styles.userPicture}>
                    <figure>
                        <img className={styles.avatar} src={this.props.picture} />
                    </figure>
                    <span className={styles.displayName}>{this.props.displayName}</span>
                    <span className={styles.username}>{this.props.}</span>
                </div>
            </div>
        )
    }

}