import React from 'react'

export default function Search(props) {
  return (
    <>
    <label htmlFor="search">
      Enter text to begin searching:
      <input
        type="text"
        id="search"
        name="search"
        onChange={e => props.handleSearch(e)}
      />
    </label>
    <label htmlFor="type">Filter By:
      <select name="type" id="type" onChange={e => props.handleFilter(e)}>
        <option value="people" defaultChecked>Characters</option>
        <option value="planets">Planets</option>
        <option value="species">Species</option>
        <option value="starships">Ships</option>
        <option value="vehicles">Vehicles</option>
        <option value="films">Movies</option>
      </select>
    </label>
    </>
  )
}
