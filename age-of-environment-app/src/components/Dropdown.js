import Button from './Button'
import {Link} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Dropdown = ({ onClickSearchByCat, onClickSearch }) => {
    return (
        <div className='moreTabsDropdown'>
            <Link to='/search'>
                <Button text='Search by Product' className='searchProductBtn' icon = {<BsSearch />} onClick = {onClickSearch} />
            </Link>
            <Link to='/search_by_category'>
                <Button text='Search by Category' className="searchByCategoryBtn" icon = {<BsSearch />} onClick={onClickSearchByCat} />
            </Link>
        </div>
    )
}

export default Dropdown
