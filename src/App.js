import React from 'react'
import './App.css'
import CharacterList from './CharacterList'
import Search from './Search'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      search: '',
      characters: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          search: '',
          characters: data.results,
        })
      })
  }
  render() {
    let handleSearch = (search) => {
      this.setState({
        loading: true,
        search
      })
      fetch(`https://swapi.co/api/people?search=${search}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          search: '',
          characters: data.results,
        })
      })
    }
    return (
      <div className="App">
        <h1>Star Wars Explorer</h1>
        <Search handleSearch={handleSearch}/>
        {this.state.loading ? (
          <p>Loading data from a galaxy far, far away...</p>
        ) : (
          ''
        )}
        {!this.state.loading && (
            <CharacterList characters={this.state.characters} />
        )}
      </div>
    )
  }
}

export default App
