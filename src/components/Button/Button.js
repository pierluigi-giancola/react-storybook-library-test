import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import classNames from 'classnames'

/** Documentation of Simple Button */
function Button(props) {
    const btnClass = classNames('blink-button', props.variant)
    return <button {...props} className={btnClass} />
}

Button.propTypes = {
    /**
     * Disables the Button, preventing mouse events
     */
    disabled: PropTypes.bool,
    /** Theme to apply on the button. */
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'error']),
}

Button.defaultProps = {
    disabled: false,
    variant: 'primary',
}

export default Button
