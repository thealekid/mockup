import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
    render (){
        return(
            <div className="search-bar">
            <FontAwesomeIcon className="font" icon={faSearch}/>
            <input
              placeholder={"Search..."}
            />
        
        </div>
        )
    }
}

export default SearchBar;