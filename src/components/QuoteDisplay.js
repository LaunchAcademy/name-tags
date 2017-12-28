import React, { Component } from 'react'

const QuoteDisplay = (props) => {
  const quoteAuthor = props.quoteAuthor
  const quoteText = props.quoteText

  return (
    <div className="row">
      <div className="columns large-6 large-offset-3">
        <h1>Random Quote</h1>
        <div className="panel">
          <cite>
            &quot; { quoteText } &quot;
          </cite>
          <p><em>- {quoteAuthor}</em></p>
        </div>
      </div>
    </div>
  )
}
export default QuoteDisplay
