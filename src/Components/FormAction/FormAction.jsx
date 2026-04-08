import React, { Component } from 'react'

export class FormAction extends Component {
  render() {
    return (
      <div>
            <form action="">
                <input type="text" name="name" placeholder='enter name' id="" />
                <br />
                <input type="email" name="email" placeholder='enter your email' id="" />
                <br />
                <input type="submit" value="submit" />

            </form>
      </div>
    )
  }
}

export default FormAction
