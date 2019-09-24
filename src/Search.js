import React from 'react';

export default function Search(props) {
  return(
    <label htmlFor="search">
      Enter a character name: 
      <input type="text" id="search" name="search" onChange={(e) => props.handleSearch(e.currentTarget.value)} />
    </label>
  )
}