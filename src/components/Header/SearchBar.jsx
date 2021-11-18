import React from 'react'

import {UserCard} from '../index'

import '../../styles/Components/search.css'

function SearchBar({data, placeholder}) {
    const [filter, setFilter] = React.useState('');

    return (
        <div className="search-bar">
            <form>
            <input 
                className="input"
                type="text"
                placeholder={placeholder}
                onChange={(e) => setFilter(e.target.value)} />
            </form>
            {filter.length !== 0 && (
                <div className="data-result">
                    {data 
                        ? data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
                            .map((value) => {
                                return(
                                    <UserCard 
                                        key={value.id} 
                                        className="search-item" 
                                        user={value}/>
                                )
                        })
                        : "No results..."
                    }
                </div>
            )}
        </div>
    )
}

export default SearchBar
