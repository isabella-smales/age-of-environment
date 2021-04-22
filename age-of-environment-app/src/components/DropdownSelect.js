import { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const DropdownSelect = ({ onSelectDropdown }) => {
    const [dropdownSelection, setDropdownSelection] = useState('-1')
    
    const changeCategory = (newCategory) => {        
        onSelectDropdown(newCategory)
    }
    
    return (
        <div>
            <SlideDown>
                <select className="dropdownSelect" onChange={(e) => { setDropdownSelection(e.target.value); changeCategory(e.target.value); }} value={dropdownSelection}>
                        <option value="-1">Select a Category</option>
                        <option value='1'>Groceries</option>
                        <option value='2'>Toiletries</option>
                        <option value='3'>Clothing</option>
                        <option value='4'>Accessories</option>
                        <option value='5'>Home Essentials</option>
                        <option value='11'>Health</option>
                </select>
            </SlideDown>
        </div>
    )
}

export default DropdownSelect
