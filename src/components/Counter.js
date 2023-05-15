import { Component } from "react";

import './styles/counter.css'

import Img1 from './images/img1.svg';
import Img2 from './images/img2.svg';
import Img3 from './images/img3.svg';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        { id: 1, img: Img1, description:'Chocolate cake', count: 0 },
        { id: 2, img: Img2, description:'English breakfast', count: 0 },
        { id: 3, img: Img3, description:'Fried french toast', count: 0 },
      ],
    };
    this.biggestCount = this.biggestCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }
  
  biggestCount() {
    const maxCount = Math.max(...this.state.dishes.map(dish => dish.count));
    const dishWithMaxCount = this.state.dishes.find(dish => dish.count === maxCount);
    if (dishWithMaxCount) {
      alert(`Your breakfast for this morning: ${dishWithMaxCount.description}`);
    }
  }

  incrementCount(id) {
    const updatedDishes = this.state.dishes.map((dish) => {
      if (dish.id === id) {
        return { ...dish, count: dish.count + 1 };
      }
      return dish;
    });

    this.setState({ dishes: updatedDishes });
  }

  render() {
    return (
      <div className="counter">
        <h1>What would you like for breakfast?</h1>
        <div className="count-wrapper">
        {this.state.dishes.map((item) => (
          <div className="counter-item" key={item.id}>
            <p onClick={() => this.incrementCount(item.id)} className="counter-img">
              <img src={item.img} alt={`Smile ${item.id}`} />
            </p>
            <span onClick={() => this.incrementCount(item.id)} className="counter-count">{item.count}</span>
            <p className="counter-description">{item.description}</p>
          </div>
        ))}
        </div>
        <button onClick={this.biggestCount} className="counter-button">Show results</button>
      </div>
    );
  }
}

export default Counter;
