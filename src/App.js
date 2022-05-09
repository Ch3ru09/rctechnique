import React from "react"
import Lobby from "./Lobby.js"
import "./app.css"

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      page: "Lobby"
    }
  }

  componentDidMount() {
    Lobby.log("e")
  }

  render () {
    return (
      <>
        <header>
          RC Technique
        </header>
        <body>
          <Lobby page={this.state.page} />
        </body>
        <footer>
          
        </footer>
      </>
    )
  }
}
