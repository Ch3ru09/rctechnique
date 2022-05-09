import React from "react"

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <>
        <header>
          RC Technique
        </header>
        <body>
          <div className="container">
            <img src="smartphone.png" alt="phone" /> {/* https://www.flaticon.com/free-icons/phone */}
            <img src="tablet.png" alt="tablet" /> {/* https://www.flaticon.com/free-icons/tablet */}
            <img src="laptop.png" alt="laptop" /> {/* https://www.flaticon.com/free-icons/laptop */}
          </div>
        </body>
      </>
    )
  }
}
