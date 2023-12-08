import React from 'react'
import './styles.css'

function Button({ text, onClick, darkMode }) {
    return (
        <button className={`button ${darkMode ? "light-button" : "dark-button"}`} onClick={onClick}>{text}</button>
    )
}

export default Button