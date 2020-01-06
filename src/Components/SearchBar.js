import React, {useState} from 'react';

function SearchBar({search}) {
    return (
        <input type="text" name="search" placeholder="SEARCH" value={search}/>
    )
}

export default SearchBar