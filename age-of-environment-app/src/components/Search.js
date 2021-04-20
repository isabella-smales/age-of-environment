import { useState } from 'react'

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!searchQuery) {
          alert('Please search something')
          return
        }
        onSearch({ searchQuery })
        setSearchQuery('')
    }

    return (
    
        <form className='search-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <button type="submit" value='Search Products'>Submit</button>
        </form> 
    )
}

export default Search
