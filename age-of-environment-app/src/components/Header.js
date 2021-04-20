import {Link} from 'react-router-dom'
import Button from './Button'
import { BsSearch } from 'react-icons/bs'

const Header = ({ onDropdown, showDropdown }) => {
    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='title'>Age of Environment</h1> 
            </Link>
            <Link to='/login' >
                <Button text='Login' className='headerButtons'/>
            </Link>
            <Link to='/allproducts' >
                <Button text='All Products' className='headerButtons'/>
            </Link>
            <Button text={ showDropdown ? 'Less' : 'More'} onClick={onDropdown} className='headerButtons'/>
            <Link to='/search'>
                <Button text='Search' className='headerButtons' icon = {<BsSearch />} />
            </Link>
        </header>
    )
}

export default Header
