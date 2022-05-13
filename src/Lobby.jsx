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

  handleMouseOver(e) {
    console.log('>>', e)
  }

  render() {
    return (
      <>
        <div className='title-container'>
          <h1 className="company-title">RC Technique</h1>
        </div>
        <Containers 
          hendleImageClick={this.handleImageClick.bind(this)}
          handleMouseOver={this.handleMouseOver.bind(this)} />
      </>
      
    )
  }
}

function Containers(props) {
  const rows = [
    ["phone", "tablet", "laptop"],
    ["plant", "sticker"]
  ];
  const colors= [
    "primary-200",
    "dark-700"
  ];

  return (
    rows.map((row, index) => {
      return (
        <div className={"container bg-" + colors[index]} key={index}>
          {row.map((name, i, arr) => {
            return (
              <div
                key={name}
                className="icon-box"
                tabIndex="0"
                onMouseOver={(e) => {this.props.handleMouseOver(e)}}>
                <div className="img-box">
                  <img
                  src={process.env.PUBLIC_URL + `img/${name}.png`}
                  alt={`${name}`}
                  onClick={() => {this.props.handleImageClick(`${name}`)}}
          
                  style={{"--order": `${i+1}`, "--times": `${arr.length}`}} />
                </div>
                <section className="text">
                  <h2>{name}</h2>
                  {/* TODO: put info here */}
                </section>
              </div>
            )
          })}
        </div>
      )
      
    })
  )
}