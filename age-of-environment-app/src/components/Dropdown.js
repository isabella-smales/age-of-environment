import Button from './Button'
import {Link} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const Dropdown = ({ onClickSearchByCat, onClickSearch }) => {
    return (
        <SlideDown>
        <div className='moreTabsDropdown'>
            <Link to='/search'>
                <Button text='Search by Product' className='searchProductBtn' icon = {<BsSearch />} onClick = {onClickSearch} />
            </Link>
            <Link to='/search_by_category'>
                <Button text='Search by Category' className="searchByCategoryBtn" icon = {<BsSearch />} onClick={onClickSearchByCat} />
            </Link>
        </div>
        </SlideDown>
    )
}

export default Dropdown
