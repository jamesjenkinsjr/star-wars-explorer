import React from 'react'
import './App.css'
import ResultsList from './ResultsList'
import Search from './Search'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      loading: true,
      search: '',
      filter: 'people',
      data: [],
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
          data: data.results,
        })
      })
      .catch(error => {
        this.setState({
          error: error.message,
        })
      })
  }

  debounce = (func, time) => {
    console.log('debouncer matters?')
    let timer
    return (...args) => {
      const next = () => func(...args)
      console.log(next)
      if (timer) {
        clearTimeout(timer)
        console.log('debouncer cleared?')
      }
      timer = setTimeout(next, time > 0 ? time : 1000)
      console.log(timer)
    }
  }

  handleSearch = (e, value) => {
    const search = value
    console.log(e)
    this.setState({
      loading: true,
      search: search,
    })
  }

  handleFilter = e => {
    const filter = e.currentTarget.value
    this.setState({
      loading: true,
      filter,
    })
  }

  handleSearchResults = () => {
    const search = this.state.search
    const filter = this.state.filter
    const URL = !search
      ? `https://swapi.co/api/${filter}`
      : `https://swapi.co/api/${filter}/?search=${search}`
    fetch(URL)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
        throw new Error('Error fetching data from SWAPI')
      })
      .then(data => {
        this.setState({
          data: data.results,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({
          error: error.message,
        })
      })
  }

  componentDidUpdate() {
    this.state.loading && this.handleSearchResults()
  }

  render() {
    const loadApp = () => {
      return (
        <>
          {this.state.loading ? (
            <p>Loading data from a galaxy far, far away...</p>
          ) : (
            ''
          )}
          {!this.state.loading && this.state.data.length > 0 && (
            <ResultsList data={this.state.data} />
          )}
          {this.state.data.length === 0 && !this.state.loading && (
            <p>No results found in all the universe!</p>
          )}
        </>
      )
    }

    const renderError = () => <p className="error">{this.state.error}</p>
    return (
      <div className="App">
        <h1>Star Wars Explorer</h1>
        <Search
          handleSearch={this.debounce((e) => this.handleSearch(e), 5000)}
          handleFilter={this.handleFilter}
        />
        {this.state.error.length === 0 ? loadApp() : renderError()}
      </div>
    )
  }
}

export default App
