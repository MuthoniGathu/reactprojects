import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    // bind the handleChange event
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  render() {
    // break down the todosData array into individual tasks and pass them down as props in the todoItem component
    const todoComponent = this.state.todos.map(task => (
      <TodoItem task={task} key={task.id} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoComponent}</div>;
  }
}

export default App;
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: "",
//             gender: "",
//             destination: "",
//             isVegan: false,
//             isKusher: false,
//             isLactoseFree: false

//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ?
//         this.setState({
//                 [name]: checked
//          }) :
//         this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         return (
//             <main>
//                 <form>
//                     <input
//                         name="firstName"
//                         value={this.state.firstName}
//                         onChange={this.handleChange}
//                         placeholder="First Name"
//                     />
//                     <br />

//                     <input
//                         name="lastName"
//                         value={this.state.lastName}
//                         onChange={this.handleChange}
//                         placeholder="Last Name"
//                     />
//                     <br />

//                     <input
//                         name="age"
//                         value={this.state.age}
//                         onChange={this.handleChange}
//                         placeholder="Age"
//                     />
//                     <br />

//                     <label>
//                     <input
//                     type="radio"
//                     name="gender"
//                     value="male"
//                     checked={this.state.gender === "male"}
//                     onChange={this.handleChange}
//                     />Male
//                     </label>
//                     <br/>
//                     <label>
//                     <input
//                     type="radio"
//                     name="gender"
//                     value="female"
//                     checked={this.state.gender === "female"}
//                     onChange={this.handleChange}
//                     />Female
//                     </label>
//                     <br />

//                     <br />
//                     <select
//                     value={this.state.destination}
//                     name ="destination"
//                     onChange={this.handleChange}>
//                     <option value="kenya">Kenya</option>
//                     <option value="tanzania">Tanzania</option>
//                     <option value="uganda">Uganda</option>
//                     <option value="somalia">Somalia</option>
//                     </select>
//                     {/* Create check boxes for dietary restrictions here */}
//                     <br />
//                     <label>
//                     <input
//                     type="checkbox"
//                     name="isVegan"
//                     onChange={this.handleChange}
//                     checked={this.state.isVegan}
//                     />Vegan?
//                     </label>
//                     <br />
//                      <label>
//                     <input
//                     type="checkbox"
//                     name="isKusher"
//                     onChange={this.handleChange}
//                     checked={this.state.isKusher}
//                     />Kosher?
//                     </label>
//                     <br />
//                      <label>
//                     <input
//                     type="checkbox"
//                     name="isLactoseFree"
//                     onChange={this.handleChange}
//                     checked={this.state.isLactoseFree}
//                     />Lactose Free?
//                     </label>
//                     <br/>
//                     <button>Submit</button>
//                 </form>
//                 <hr />
//                 <h2>Entered information:</h2>
//                 <p>Your name: {this.state.firstName} {this.state.lastName}</p>
//                 <p>Your age: {this.state.age}</p>
//                 <p>Your gender: {this.state.gender}</p>
//                 <p>Your destination: {this.state.destination}</p>
//                 <p>
//                     Your dietary restrictions:
//                     {/* Dietary restrictions here, comma separated */}
//                 </p>
//             </main>
//         )
//     }
// }
