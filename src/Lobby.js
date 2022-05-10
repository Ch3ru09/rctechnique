import React from 'react'

export default class Lobby extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  handleImageClick(page) {
    this.props.changePage(page);
  }

  render() {
    return (
      <>
        <div className="container bg-primary-200">
          <img src="smartphone.png" alt="phone" onClick={() => {this.handleImageClick("phones")}} /> {/* https://www.flaticon.com/free-icons/phone */}
          <img src="tablet.png" alt="tablet" onClick={() => {this.handleImageClick("tablets")}} /> {/* https://www.flaticon.com/free-icons/tablet */}
          <img src="laptop.png" alt="laptop" onClick={() => {this.handleImageClick("laptops")}} /> {/* https://www.flaticon.com/free-icons/laptop */}
        </div>
        <div className="container bg-dark-700">
          <img src="plant.png" alt="plant" onClick={() => {this.handleImageClick("plantPots")}} />
          <img src="sticker.png" alt="sticker" onClick={() => {this.handleImageClick("stickers")}} />
        </div>
      </>
      
    )
  }
}
