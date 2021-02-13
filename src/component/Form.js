import React, { useState } from 'react';
import '../scss/Form.scss';

const Form = ({searchMovieTitle}) => {
    const [userInput, setUserInput] = useState('');

    const handleSearch = (event) => {
        setUserInput(event.target.value)
    }

    const filterSearchInput = (event, userInput) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchMovieTitle(userInput)
        }
        // clearInput();
        // filter if it includes whatever the current userInput is at 
    }
    console.log(userInput)

    return (
        <form className='querying-form'>
            <label>Search</label>
            <input type='text' placeholder='Search' value={userInput} onChange={handleSearch} onKeyPress={(event) => filterSearchInput(event, userInput)}></input>
            <div className='filter-sort'>
                <label>Sort</label>
                <input></input>
            </div>
        </form>
    )
}

export default Form;