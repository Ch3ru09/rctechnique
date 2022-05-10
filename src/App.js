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
        this.setState({page: <Lobby changePage={this.changePage.bind(this)} />})
        break
    }
  }

  render () {
    return (
      <>
        <header>
          <img 
            src={process.env.PUBLIC_URL + "260795084017212.png"} 
            alt="logo" 
            onClick={() => {this.changePage()}} />
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
