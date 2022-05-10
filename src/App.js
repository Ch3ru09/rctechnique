import React from "react"
import Lobby from "./Lobby.js"
import Phones from "./Phones.js"
import Tablets from "./Tablets.js"
import "./app.css"

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      page: <Lobby changePage={this.changePage.bind(this)} />
    }
  }

  changePage(page) {
    switch (page) {
      case "phones":
        this.setState({page: <Phones />})
        break
      case "tablets":
        this.setState({page: <Tablets />})
        break
      default:
        break
    }
  }

  render () {
    return (
      <>
        <header>
          RC Technique
        </header>
        <main>
          {this.state.page}
        </main>
        <footer>
          
        </footer>
      </>
    )
  }
}
