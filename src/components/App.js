import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm'
import GuestList from './GuestList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        firstName: '',
        lastName: ''
      },
      guests: [],
      errors: []
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearErrors = this.clearErrors.bind(this)
  }

  handleFirstNameChange(event) {
    this.setFormDetail('firstName', event.target.value)
  }

  handleLastNameChange(event) {
    this.setFormDetail('lastName', event.target.value)
  }

  setFormDetail(key, value) {
    let oldState = this.state.form
    oldState[key] = value
    this.setState({
      form: oldState
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.clearErrors()
    this.validateFirstName()
    this.validateLastName()

    const newGuests = this.state.guests.concat([{
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName
    }])

    if(this.state.errors.length === 0) {
      this.setState({
        guests: newGuests,
        form: {
          firstName: '',
          lastName: ''
        }
      })
    }
  }

  clearErrors() {
    this.setState({
      errors: []
    })
  }

  validateFirstName(){
    if(this.state.form.firstName === '') {
      this.setState({
        errors: this.state.errors.concat(["First Name can't be blank"])
      })
    }
  }

  validateLastName(){
    if(this.state.form.lastName === '') {
      this.setState({
        errors: this.state.errors.concat(["Last Name can't be blank"])
      })
    }
  }

  render(){
    let errorList
    if(this.state.errors.length > 0) {
      let errorListItems = this.state.errors.map((error) => {
        return <li>{error}</li>
      })
      errorList = (
        <ul className="errors">
          { errorListItems }
        </ul>
      )
    }
    return (
      <div>
        { errorList }
        <RegistrationForm
          handleSubmit={this.handleSubmit}
          firstName={this.state.form.firstName} handleFirstNameChange={this.handleFirstNameChange}
          lastName={this.state.form.lastName }
          handleLastNameChange={this.handleLastNameChange} />
        <GuestList guests={this.state.guests} />
      </div>
    )
  }
}

export default App;
