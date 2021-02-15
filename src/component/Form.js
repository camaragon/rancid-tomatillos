import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../scss/Form.scss';

const Form = ({searchMovieTitle, sortMovies, handleClick}) => {
    const [userInput, setUserInput] = useState('');

    const handleSearch = (event) => {
        setUserInput(event.target.value)
    }

    const filterSearchInput = (event, userInput) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchMovieTitle(userInput)
        }
    }

    return (
        <form className='querying-form'>
            <div className='search-wrapper'>
                <label>Search ☞ </label>
                <input type='text' placeholder='Search Movies' value={userInput} onChange={handleSearch} onKeyPress={(event) => filterSearchInput(event, userInput)}></input>
            </div>
            <DropdownButton className='dropdown' onSelect={sortMovies} id="dropdown-basic-button" title="Sort by ↓" drop="right">
                {/* <Dropdown.Item >Savory (7 - 10)</Dropdown.Item>
                <Dropdown.Item href="/action-2">Perishable (4 - 6)</Dropdown.Item>
                <Dropdown.Item href="/action-3">Rancid (0 - 3)</Dropdown.Item> */}
                <Dropdown.Item eventKey='1'>Highest - Lowest</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Lowest - Highest</Dropdown.Item>
                <Dropdown.Item eventKey='3'>A - Z (Title)</Dropdown.Item>
                <Dropdown.Item eventKey='4'>Z - A (Title)</Dropdown.Item>
            </DropdownButton>
            <button onClick={handleClick} className='button-lobby' >Show All Movies</button>
        </form>
    )
}

export default Form;