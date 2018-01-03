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
    this.validateFirstName = this.validateFirstName.bind(this)
    this.validateLastName = this.validateLastName.bind(this)
  }

  handleFirstNameChange(event) {
    this.setFormDetail('firstName', event.target.value)
  }

  handleLastNameChange(event) {
    this.setFormDetail('lastName', event.target.value)
  }

  setFormDetail(key, value) {
    let oldState = this.state.form
    let newState = Object.assign({}, oldState)
    newState[key] = value
    this.setState({
      form: newState
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.clearErrors()

    let errors = this.validateFirstName()
    errors = errors.concat(this.validateLastName())

    if(errors.length == 0) {
      const newGuests = this.state.guests.concat([{
        firstName: this.state.form.firstName,
        lastName: this.state.form.lastName
      }])
      this.setState({
        guests: newGuests,
        form: {
          firstName: '',
          lastName: ''
        }
      })
    }
    else {
      this.setState({
        errors: errors
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
      return ["First Name can't be blank"]
    }
    else {
      return []
    }
  }

  validateLastName(){
    if(this.state.form.lastName === '') {
      return ["Last Name can't be blank"]
    }
    else {
      return []
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
