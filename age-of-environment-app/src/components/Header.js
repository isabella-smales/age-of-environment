import { Link } from 'react-router-dom'
import Button from './Button'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { GiGreenhouse } from 'react-icons/gi'

const Header = ({ onDropdown, showDropdown }) => {
    return (
        <header className='header'>
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1 className='title'>Age of Environment</h1> 
            </Link>
            <div className='links'>
                <Link to='/' >
                    <Button text='Home' className='headerButtons' icon={<GiGreenhouse/>} />
                </Link>
                <Link to='/allproducts' >
                    <Button text='All Products' className='headerButtons'/>
                </Link>
                <Button text={ showDropdown ? 'Less' : 'More'} icon={ showDropdown ? <BiUpArrow/> : <BiDownArrow/> } onClick={onDropdown} className='headerButtons'/>
            </div>
        </header>
    )
}

export default Header
