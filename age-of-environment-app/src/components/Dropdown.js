import Button from './Button'
import {Link} from 'react-router-dom'

const Dropdown = () => {
    return (
        <div>
            <Link to='/new_product'>
                <Button text='Add New Product' className="newProductButton"/>
            </Link>
        </div>
    )
}

export default Dropdown
