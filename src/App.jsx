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
      page: 1,
      colors: [
        "primary-200",
        "dark-700",
      ],
    }
    this.pages = {
      phone: <Phones />,
      tablet: <Tablets />,
      laptop: <Laptops />,
      plant: <Plants />,
      sticker: <Stickers />,
      lobby: <Lobby changePage={this.changePage.bind(this)} colors={this.state.colors} />
    }
  }

  componentDidMount() {
    this.setState({page: this.pages.lobby})
  }

  changePage(page) {
    switch (page) {
      case "phone":
        this.setState({page: this.pages.phones});
        break
      case "tablet":
        this.setState({page: this.pages.tablets});
        break
      case "laptop":
        this.setState({page: this.pages.laptop});
        break
      case "plant":
        this.setState({page: this.pages.plant});
        break
      case "sticker":
        this.setState({page: this.pages.sticker});
        break
      default:
        this.setState({page: this.pages.lobby});
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
            onClick={() => {this.changePage()}}
            />
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
