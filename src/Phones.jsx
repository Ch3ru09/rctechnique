import React from 'react'

export default class Phones extends React.Component {
  render() {
    return (
      <>
        <OrbitSystem colors={this.props.colors} />
      </>
    )
  }
}

function OrbitSystem(props) {
  
  return (
    <>
      <div className="orbit-system"></div>
      <div className="prices">
        <h2>Price approximation</h2>
        <div className="prices-container">
          <div className="ios"></div>
          <div className="android"></div>
          <div className="others"></div>
        </div>
      </div>
    </>
  )
}