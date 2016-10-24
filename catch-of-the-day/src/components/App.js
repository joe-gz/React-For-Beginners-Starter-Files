import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFish from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes}
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    this.setState({fishes: fishes})
  }

  loadSamples = () => {
    this.setState({
      fishes: SampleFish
    })
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order: order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood"/>
          <ul>
            {
              Object.keys(this.state.fishes)
                    .map(key => <Fish key={key} identifier={key} addToOrder={this.addToOrder} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory loadSamples={this.loadSamples} addFish={this.addFish}/>
      </div>
    )
  }
}

export default App;
