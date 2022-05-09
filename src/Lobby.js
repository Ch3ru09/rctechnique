import React from 'react'

export default class Lobby extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  log(msg) {
    console.log(msg)
  }

  render() {
    return (
      <>
        <div className="container">
          <img src="smartphone.png" alt="phone" /> {/* https://www.flaticon.com/free-icons/phone */}
          <img src="tablet.png" alt="tablet" /> {/* https://www.flaticon.com/free-icons/tablet */}
          <img src="laptop.png" alt="laptop" /> {/* https://www.flaticon.com/free-icons/laptop */}
        </div>
        <div className="container">
          <img src="plant.png" alt="plant" />
          <img src="sticker.png" alt="sticker" />
        </div>
      </>
      
    )
  }
}
