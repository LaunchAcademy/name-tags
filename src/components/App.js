import React, { Component } from 'react';

import QuoteDisplay from './QuoteDisplay'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const quoteAuthor = "Abraham Lincoln"
    const quoteText = "A house divided against itself cannot stand."

    return (
      <div>
        <QuoteDisplay quoteAuthor={quoteAuthor} quoteText={quoteText} />
      </div>
    )
  }
}

export default App;
