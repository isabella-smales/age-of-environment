import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

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
        <SlideDown>
        <form className='search-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input className='search-bar' type="text" placeholder='Search for a product...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <button className='searchButton' type="submit" value='Search Products'>Search {<BsSearch/>}</button>
        </form>
        </SlideDown>
    )
}

export default Search
