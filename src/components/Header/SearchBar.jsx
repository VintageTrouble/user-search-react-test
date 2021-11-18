import React from 'react'

import {UserCard} from '../index'

import '../../styles/Components/search.css'

function SearchBar({data, placeholder}) {
    const searchRef = React.useRef();
    const [filteredData, setData] = React.useState([]);
    const [isOpened, setIsOpened] = React.useState(false);

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(searchRef.current)) {
            setIsOpened(false);
        } else {
            setIsOpened(true);
        }
    };

    const onFilterChanged = (e) => {
        setData(
            data.filter(
                item => item.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );

        if(e.target.value.length !== 0){
            setIsOpened(true);
        } else {
            setIsOpened(false);
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        
      }, []);

    return (
        <div className="search-bar" ref={searchRef}>
            <form>
            <input 
                className="input"
                type="text"
                placeholder={placeholder}
                onChange={(e) => onFilterChanged(e)} />
            </form>
            {isOpened === true && (
                <div className="data-result">
                    {filteredData 
                        ? 
                        filteredData.map((value) => {
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
