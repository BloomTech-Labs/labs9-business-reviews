import React, { Component } from 'react'

export default class EditReview extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    console.log(id)
  }
  render() {
    return (
      <div className="edit-container">
        <form>
          <input></input>
        </form>
      </div>
    )
  }
}
