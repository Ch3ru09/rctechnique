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
          <div className="icon-box split">
            <div>
              <img 
              src={process.env.PUBLIC_URL + "img/smartphone.png"} 
              alt="phone"
              onClick={() => {this.handleImageClick("phones")}}
              tabIndex="0"
              style={{"--order": "1", "--times": "3"}} />
              {/* https://www.flaticon.com/free-icons/phone */}
            </div>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ab veniam. Voluptate blanditiis perferendis ex molestiae corporis illo maxime provident laudantium, aliquid dolor, assumenda tempora omnis cupiditate temporibus dignissimos magni sunt aliquam esse itaque, id consequuntur veritatis possimus labore! Sed natus recusandae laboriosam incidunt excepturi vel consequatur tenetur, quaerat magnam aliquid facilis sint corrupti assumenda iusto deserunt, soluta atque! Esse dolor, eligendi odio excepturi architecto, cupiditate aliquam ratione accusamus asperiores harum, laudantium culpa a nihil temporibus ab dolorem omnis est. Impedit iste hic itaque enim excepturi id nesciunt, unde dolores commodi sapiente cupiditate quasi consequatur eius atque expedita deleniti quod?</p>
            </div>
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
