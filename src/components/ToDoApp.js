import { Component } from 'react';
import './styles/todolist.css';
import pencil from './images/pencil.svg';

class ToDoApp extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div className='todo-wrapper'>
          <p className='p-todo'>List of tasks</p>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Write your task:
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              <img className='img-pencil' src={pencil} alt='pencil'/>
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(event) {
      this.setState({ text: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: new Date()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }

  class TodoList extends Component {
    handleClick = (event) => {
      event.target.style.color = event.target.style.color === 'grey' ? 'black' : 'grey';
    }
  
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li onClick={this.handleClick} key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  

export default ToDoApp;