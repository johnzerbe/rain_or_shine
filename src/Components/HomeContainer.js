import React, {useState} from 'react';
import SearchBar from './SearchBar';

function HomeContainer() {

    const [search, setSearch] = useState("Hey Hey");

    return (
        <div>
            <h1>Rain or Shine</h1>
            <SearchBar search={search}/>
        </div>
    )
}

export default HomeContainer