import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../scss/Form.scss';

const Form = ({searchMovieTitle, sortMovies, handleClick, isSorted, didSearch}) => {
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
                <input 
                    type='text' 
                    placeholder='Search Movies <press Enter>' 
                    value={userInput} 
                    aria-label='Movie Search by Title'
                    aria-required='true'
                    onChange={handleSearch} 
                    onKeyPress={(event) => filterSearchInput(event, userInput)}
                    style={{display: isSorted ? 'none' : 'block'}}
                    >
                </input>
            <DropdownButton 
                className='dropdown' 
                onSelect={sortMovies} 
                id='dropdown-basic-button' 
                title='Sort by ↓' 
                drop='right'
                style={{display: didSearch ? 'none' : 'block'}}
            >
                <Dropdown.Item className='dropdown-option' eventKey='1'>Highest - Lowest</Dropdown.Item>
                <Dropdown.Item className='dropdown-option' eventKey='2'>Lowest - Highest</Dropdown.Item>
                <Dropdown.Item className='dropdown-option' eventKey='3'>A - Z (Title)</Dropdown.Item>
                <Dropdown.Item className='dropdown-option' eventKey='4'>Z - A (Title)</Dropdown.Item>
            </DropdownButton>
            <button onClick={handleClick} className='button-lobby' >Show All Movies</button>
        </form>
    )
}

export default Form;