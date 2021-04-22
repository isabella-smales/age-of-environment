import { useState } from 'react'

const DropdownSelect = ({onSelectDropdown}) => {
    const [dropdownSelection, setDropdownSelection] = useState('-1')
    // onSelectDropdown({ dropdownSelection })
    const changeCategory = (newCategory) => {
        //e.preventDefault()
    
        // if (!searchQuery) {
        // alert('Please search something')
        // return
        // }
        
        console.log(newCategory)
        // setDropdownSelection(newCategory)
        console.log(dropdownSelection)
        onSelectDropdown( newCategory )
        
        // setDropdownSelection('-1')

        // THIS NOW WORKS BUT THE dropdownSelection IS ALWAYS 1 CHANGE BEHIND
        // FIRST IT MAKES A REQUEST TO category_id=-1, THEN TO WHICHEVER YOU CLICKED
        // THE PREVIOUS TIME
        // weird
    }
    
    return (
        <div>
            <select className="dropdownSelect" onChange={(e) => { setDropdownSelection(e.target.value); changeCategory(e.target.value); }} value={dropdownSelection}>
                <option value="-1">Select a category</option>
                <option value='1'>Groceries</option>
                <option value='2'>Toiletries</option>
                <option value='3'>Clothing</option>
                <option value='4'>Accessories</option>
                <option value='5'>Home Essentials</option>
                <option value='11'>Health</option>
                {/* {% for category in categories %}
                    <option value="{ {category.id} }">{{ category.name }}</option>
                {% endfor %} */}
            </select>
        </div>
    )
}

export default DropdownSelect
