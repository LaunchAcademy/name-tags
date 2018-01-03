import React, { Component } from 'react'

class GuestList extends Component {
  render(){
    let guestListItems = this.props.guests.map((guest) => {
      return (<li>{guest.firstName} {guest.lastName}</li>)
    })

    return (
      <ul>
        { guestListItems }
      </ul>
    )
  }
}

export default GuestList