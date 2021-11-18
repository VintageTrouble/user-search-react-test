import '../../styles/header.css'

import {SearchBar, Logo} from '../index'

function Header({data}) {
    return (
        <div className="header">
            <Logo />
            <div className="search">
                <SearchBar 
                    data={data}
                    placeholder="Search user..." />
            </div>
        </div>
    )
}

export default Header;