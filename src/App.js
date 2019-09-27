import React from 'react'
import './App.css'
import CharacterList from './CharacterList'
import Search from './Search'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      loading: true,
      search: '',
      characters: [],
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
        throw new Error('Error fetching data from SWAPI')
      })
      .then(data => {
        this.setState({
          loading: false,
          search: '',
          characters: data.results,
        })
      })
      .catch(error => {
        this.setState({
          error,
        })
      })
  }

  handleSearch = e => {
    const searchTerm = e.currentTarget.value
    if (searchTerm !== '') {
      this.setState({
        loading: true,
        search: searchTerm,
      })
    }
  }
  handleSearchResults = () => {
    const search = this.state.search
    fetch(`https://swapi.co/api/people?search=${search}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          search: '',
          characters: data.results,
          loading: false,
        })
      })
  }
  render() {
    this.state.search !== '' && this.handleSearchResults()
    const loadApp = () => {
      return (
        <>
          {this.state.loading ? (
            <p>Loading data from a galaxy far, far away...</p>
          ) : (
            ''
          )}
          {!this.state.loading && this.state.characters.length > 0 && (
            <CharacterList characters={this.state.characters} />
          )}
          {this.state.characters.length === 0 && !this.state.loading && (
            <p>No results found in all the universe!</p>
          )}
        </>
      )
    }

    const renderError = () => <p className='error'>{this.state.error}</p>
    return (
      <div className="App">
        <h1>Star Wars Explorer</h1>
        <Search handleSearch={this.handleSearch} />
        {this.state.error.length === 0 ? loadApp() : renderError()}
      </div>
    )
  }
}

export default App
