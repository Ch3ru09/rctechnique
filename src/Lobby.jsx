import React, { useEffect, useState } from 'react'
import './lobby.css'

export default class Lobby extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  handleImageClick(page) {
    this.props.changePage(page);
  }

  handleMouseEnter(id, rowIndex) {
    // get boxes
    const boxes = document.querySelectorAll(`#${rowIndex} .item-box:not(#${id})`)
    Array.from(boxes).forEach(b => {
      b.classList.remove('grow')
      b.classList.add('shrink')
    })
    const box = document.querySelector(`#${id}`)
    box.classList.remove('shrink')
    box.classList.add('grow')
  }

  handleMouseLeave(id, rowIndex) {
    // get boxes
    // const box = document.querySelector(`#${id}`)
    // box.classList.remove('grow')
    const boxes = document.querySelectorAll(`#${rowIndex} .item-box`)
    Array.from(boxes).forEach(b => {
      b.classList.remove('shrink')
      b.classList.remove('grow')
      
    })
  }

  render() {
    return (
      <>
        <div className='title-container'>
          <h1 className="company-title">RC Technique</h1>
        </div>
        <Containers 
          handleImageClick={this.handleImageClick.bind(this)}
          handleMouseEnter={this.handleMouseEnter.bind(this)}
          handleMouseLeave={this.handleMouseLeave.bind(this)}
          colors={this.props.colors} />
      </>
      
    )
  }
}

function Containers(props) {
  const rows = [
    ["phone", "tablet", "laptop"],
    ["plant", "sticker"]
  ];

  // this.handleFocus = function() {
  //   console.log('test')
  // }

  // this.useEffect()

  return (
    rows.map((row, index) => {
      return (
        <div className={`container bg-${props.colors[index]}`} >
          <div className="cont" id={`row-${index}`} key={index}>
            {row.map((name, i, arr) => {
              return (
                <div
                  key={name}
                  id={`${name}`}
                  className={`item-box`}
                  tabIndex="0"
                  style={{"--order": `${i+1}`, "--times": `${arr.length}`}}
                  onMouseEnter={() => props.handleMouseEnter(`${name}`, `row-${index}`)}
                  onMouseLeave={() => props.handleMouseLeave(`${name}`, `row-${index}`)}
                  onFocus={() => {}} >
                  <div className="img-box">
                    <img
                      src={process.env.PUBLIC_URL + `img/${name}.png`}
                      alt={`${name}`}
                      onClick={() => {props.handleImageClick(`${name}`)}}/>
                  </div>
                  <section className="text">
                    <h2>{name}</h2>
                    {/* TODO: put info here */}
                  </section>
                </div>
              )
            })}
          </div>
        </div>
      )
      
    })
  )
}