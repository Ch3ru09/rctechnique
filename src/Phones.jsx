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
    <div className="orbit-system"></div>
  )
}