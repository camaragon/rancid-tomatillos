import React from 'react';
import '../scss/Form.scss';

const Form = () => {
    return (
        <form className='querying-form'>
            <label>Search</label>
            <input type='text' placeholder='Search'></input>
            <div className='filter-sort'>
                <p>Filter</p>
                <p>Sort</p>
            </div>
        </form>
    )
}

export default Form;