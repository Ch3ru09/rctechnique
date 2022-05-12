import React from 'react'
import './lobby.css'

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
        <div className='title-container container'>
          <h1 className="company-title">RC Technique</h1>
        </div>
        <div className="container bg-primary-200">
          <div className="icon-box">
            <div className="img-box">
              <img 
              src={process.env.PUBLIC_URL + "img/smartphone.png"} 
              alt="phone"
              onClick={() => {this.handleImageClick("phones")}}
              tabIndex="0"
              style={{"--order": "1", "--times": "3"}} />
              {/* https://www.flaticon.com/free-icons/phone */}
            </div>
            <section className="text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores est id aspernatur voluptas iusto laudantium fuga architecto porro veritatis? Accusantium maxime qui rerum autem?</p>
            </section>
          </div>
          <div className="icon-box">
            <img
              src={process.env.PUBLIC_URL + "img/tablet.png"}
              alt="tablet"
              onClick={() => {this.handleImageClick("tablets")}}
              tabIndex="0"
              style={{"--order": "2", "--times": "3"}} /> 
              {/* https://www.flaticon.com/free-icons/tablet */}
          </div>
          <div className="icon-box">
            <img
              src={process.env.PUBLIC_URL + "img/laptop.png"}
              alt="laptop"
              onClick={() => {this.handleImageClick("laptops")}}
              tabIndex="0"
              style={{"--order": "3", "--times": "3"}} />
              {/* https://www.flaticon.com/free-icons/laptop */}
          </div>
        </div>
        <div className="container bg-dark-700">
          <div className="icon-box">
            <img
              src={process.env.PUBLIC_URL + "img/plant.png"}
              alt="plant"
              onClick={() => {this.handleImageClick("plants")}}
              tabIndex="0"
              style={{"--order": "1", "--times": "2"}} />
          </div>
          <div className="icon-box">
            <img
              src={process.env.PUBLIC_URL + "img/sticker.png"}
              alt="sticker"
              onClick={() => {this.handleImageClick("stickers")}}
              tabIndex="0"
              style={{"--order": "2", "--times": "2"}} />
          </div>
        </div>
      </>
      
    )
  }
}
