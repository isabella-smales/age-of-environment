import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button className='btn' onClick={onClick} style={{ backgroundColor: color }} >
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
