import React, {useState} from 'react';
import SearchBar from './SearchBar';

function HomeContainer() {

    const [search, setSearch] = useState("");

    const getWeather = () => {
        fetch('http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22')
        .then(response => response.json())
        .then(response => {
            setSearch(response.data.name)
        })

    }

    return (
        <div>
            <h1>Rain or Shine</h1>
            <SearchBar search={search}/>
        </div>
    )
}

export default HomeContainer