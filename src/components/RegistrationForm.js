import React, {Component} from 'react'
class RegistrationForm extends Component {
  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={this.props.firstName} onChange={this.props.handleFirstNameChange }/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={this.props.lastName} onChange={this.props.handleLastNameChange} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default RegistrationForm