import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, icon }) => {
    return (
        <button className='btn' onClick={onClick} style={{ backgroundColor: color }} >
            {icon}
            {text}
        </button>
    )
}

Button.defaultProps = {
    //color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button
