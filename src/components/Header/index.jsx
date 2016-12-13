import React from 'react'
import styles from './header.css'

export default class Header extends React.Component {
    render () {
        return (
            <header className={styles.root}>
                <h1 className={styles.logo}>Reacttr</h1>
            </header>
        )
    }
}