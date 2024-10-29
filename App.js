import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todos list</h1>
      < div className="todo-wrapper">
      <div className="todo-input">
        <div className="todo-input-item">
          <label>Title</label>
          <input type="text" placeholder="what is the task"></input>
        </div>
        <div className="todo-input-item">
          <label>Description</label>
          <input type="text" placeholder="what is the description"></input>
        </div>
        <div className="todo-input-item">
          <button type="button" className="primarybtn">Add</button>
          
        </div>
      </div>
      <div className="btnarea">
        <button>Todo</button>
        <button>Completed</button>
      </div>
      < div class="todo-list">
      <div className="todo-list-item">
        <h3>Task 1</h3>
        <p>Description</p>
        </div></div>
    </div>
    </div>
  );
}

export default App;
