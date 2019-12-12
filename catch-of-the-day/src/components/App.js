import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1.copy current state (only element needed)
    const fishes = { ...this.state.fishes };
    // 2. update state copy
    fishes[`fish${Date.now()}`] = fish;
    // 3. update state properly
    this.setState({ fishes: fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}

export default App;
