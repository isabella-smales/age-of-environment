import PropTypes from 'prop-types'

const Button = ({ text, onClick, icon }) => {
    return (
        <button className='btn' onClick={onClick} >
            {text} &nbsp;
            {icon}
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
