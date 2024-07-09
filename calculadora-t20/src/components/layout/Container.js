import React from 'react'
import PropTypes from 'prop-types'

import styles from './Container.module.css'

function Container (props) {
    return  <div className={`${styles.container} ${styles[props.customClass]}`} >{props.children}</div>
}

Container.propType = {
    customClass: PropTypes.oneOf([
        ['start', 'column','min-height' ]
    ])
}

Container.defaultProps = {
    customClass : 'min-height'
}

export default Container

