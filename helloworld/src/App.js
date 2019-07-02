import React, { Component } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Product from "./components/Product";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      data: {
        title: "LY LY SHOP",
        menu: ["Áo Quần", "Giày Dép", "Phụ Kiện", "Đồ Bơi"]
      }
    };  
  }


  componentDidMount() {
    fetch("http://5d19c3a8b3b6a100148d22b1.mockapi.io/startWithReact")
      .then(res=>res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cards: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleReceive = data => {
    //Get parameter from children component
    console.log(data);
  };

  render() {
    const {cards, data} = this.state;

    return (
      <>
        <Header data={data} />
        <Slider />
        <div className="container">
          <div className="row">
            {cards.map(card => {
              return <Product key={card.id} card={card} onReceiveData={this.handleReceive} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
