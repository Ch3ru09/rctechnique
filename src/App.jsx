import React from "react"
import Lobby from "./Lobby.jsx"
import Phones from "./Phones.jsx"
import Tablets from "./Tablets.jsx"
import Laptops from "./Laptops.jsx"
import Plants from "./Plants.jsx"
import Stickers from "./Stickers.jsx"
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
      case "phone":
        this.setState({page: <Phones />})
        break
      case "tablet":
        this.setState({page: <Tablets />})
        break
      case "laptop":
        this.setState({page: <Laptops />})
        break
      case "plant":
        this.setState({page: <Plants />})
        break
      case "sticker":
        this.setState({page: <Stickers />})
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
            className="logo-img"
            onClick={() => {this.changePage()}} />
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
