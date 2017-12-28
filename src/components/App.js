import React, { Component } from 'react';

import QuoteDisplay from './QuoteDisplay'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteText: null,
      quoteAuthor: null
    }
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this)
  }

  handleNewQuoteClick(event) {
    event.preventDefault()
    this.fetchNewRandomQuote()
  }
  
  fetchNewRandomQuote(){
    fetch('/random_quote').then((resp) => {
      if(resp.ok){
        return resp.json()
      }
      else {
        throw('Something went wrong')
      }
    }).then((json) => {
      this.setState({
        quoteText: json.quoteText,
        quoteAuthor: json.quoteAuthor
      })
    })
  }

  componentDidMount(){
    this.fetchNewRandomQuote()
  }

  render() {
    return (
      <div>
        <QuoteDisplay quoteAuthor={this.state.quoteAuthor} quoteText={this.state.quoteText} />
        <div className="row">
          <div className="column large-6 large-offset-3">
            <button onClick={this.handleNewQuoteClick} className="btn">Moar Inspiration Please!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
