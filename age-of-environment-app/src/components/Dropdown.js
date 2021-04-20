import Button from './Button'
import {Link} from 'react-router-dom'

const Dropdown = () => {
    return (
        <div>
            <Link to='/new_product'>
                <Button text='Add New Product'/>
            </Link>
        </div>
    )
}

export default Dropdown
