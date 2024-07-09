import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.css'

function Select({title, name, options, handleOnChange, value}) {
    return (
        <div className={styles.masterform}>
            <label htmlFor={name}>{title}: </label>
            <select name={name} id={name} onChange={handleOnChange} 
            value={value || ''}>
                <option selected disabled> Selecione uma Categoria para o seu Encontro </option>
                {options.map( (option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>   
                )
                )}

            </select>
        </div>
    )
}

Select.propTypes = {
    title: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    options: PropTypes.arrayOf(
        PropTypes.shape({
          id:   PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired
    })
    ), 
    handleOnChange: PropTypes.func, 
    value : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])
}

Select.defaultProps = {
    handleOnChange: undefined,  
    value: '',                 
  };


export default Select