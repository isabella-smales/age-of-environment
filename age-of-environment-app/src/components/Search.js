import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

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
                <input className='search-bar' type="text" placeholder='Search for a product...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <button className='searchButton' type="submit" value='Search Products'>Submit {<BsSearch/>}</button>
        </form>
    )
}

export default Search
