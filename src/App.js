import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/Quote";
import Quotes from "./components/Quotes";
import Lamp from "./components/Lamp"

class App extends Component {

    state = {
     working: true
    };

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  render() {
    const spin = this.state.working ? "App-logo" : "spin";
    const onOff = this.state.working ? "Off : Hmmm des Donuts" : "On : Oh Pinaise !";
    const homer = this.state.working ? "https://img.maximummedia.ie/joe_co_uk/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lY291ay5tYXhpbXVtbWVkaWEuaWUuczMuYW1hem9uYXdzLmNvbVxcXC93cC1jb250ZW50XFxcL3VwbG9hZHNcXFwvMjAxOFxcXC8wOFxcXC8xNzE2NTAyMFxcXC82OTYtaG9tZXItd2ViLmpwZ1wiLFwid2lkdGhcIjo3NjcsXCJoZWlnaHRcIjo0MzEsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5qb2UuY28udWtcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9qb2Vjb3VrXFxcL25vLWltYWdlLnBuZz92PTIyXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjJkNGQ4ZGYzMmE4M2JlZTg0OTc1OTI0ZWJkODAyYjc0N2E0NDdhM2MifQ==/696-homer-web.jpg" : "https://static1.purebreak.com/articles/0/83/57/0/@/377590-la-liste-des-metiers-insolites-d-homer-620x0-1.jpg";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={spin} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button className="btnHomer" onClick={this.handleClick}>{onOff}</button>
        <br />
        <img src={homer} className="homerWork" alt="logo" />
        <Lamp />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Quotes />
      </div>
    );
  }
}
export default App;
