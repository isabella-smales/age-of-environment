import { Link } from 'react-router-dom'
import Button from './Button'
import { BsSearch } from 'react-icons/bs'

const Header = ({ onDropdown, showDropdown, onClickSearch }) => {
    return (
        <header className='header'>
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1 className='title'>Age of Environment</h1> 
            </Link>
            <div className="links">
                <Link to='/login' >
                    <Button text='Login' className='headerButtons'/>
                </Link>
                <Link to='/allproducts' >
                    <Button text='All Products' className='headerButtons'/>
                </Link>
                <Button text={ showDropdown ? 'Less' : 'More'} onClick={onDropdown} className='headerButtons'/>
                <Link to='/search'>
                    <Button text='Search' className='headerButtons' icon = {<BsSearch />} onClick = {onClickSearch} />
                </Link>
            </div>
        </header>
    )
}

export default Header
