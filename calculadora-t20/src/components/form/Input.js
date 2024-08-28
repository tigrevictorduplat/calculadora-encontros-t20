import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css'

function Input({type, title, name, placeholder, handleOnChange, value}) {
    return (
        <div className={styles.masterform}>
            <label htmlFor={name}>{title}: </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />  
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    name : PropTypes.string.isRequired, 
    placeholder: PropTypes.string, 
    handleOnChange: PropTypes.func, 
    value: PropTypes.string
}

Input.defaultProps = {
    handleOnChange: undefined, 
    value: ''
}


export default Input