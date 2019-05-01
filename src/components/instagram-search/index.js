import React from 'react';

import { SearchContainer, SearchForm } from './searchStyles.js';

const InstagramSearch = ({ handleSubmit, handleChange, searchQuery }) => {
  return (
    <SearchContainer>
        <h1>Looking for an account?</h1>
        <h2>type in an Instagram username and click search to see a detailed report</h2>
        <SearchForm onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="searchQuery"
                placeholder="Search..." 
                value={searchQuery}
                onChange={handleChange}
                required
            />
            <button type="submit">Start Tracking</button>
        </SearchForm>
    </SearchContainer>
  )
}

export default InstagramSearch;