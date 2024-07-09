import React from 'react'
import PropTypes from 'prop-types'
import styles from './SubmitButton.module.css'

function SubmitButton ({text}) {
    return (
        <div>
            <button className={styles.mybutton}>{text}</button>
        </div>
    )
}

SubmitButton.propTypes = {
    text : PropTypes.string.isRequired
}

export default SubmitButton