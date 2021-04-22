import Button from './Button'
import {Link} from 'react-router-dom'

const Dropdown = ({ onClickSearchByCat }) => {
    return (
        <div>
            <Link to='/search_by_category'>
                <Button text='Search by Category' className="searchByCategoryBtn" onClick={onClickSearchByCat} />
            </Link>
        </div>
    )
}

export default Dropdown
