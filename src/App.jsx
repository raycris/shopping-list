import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>Items to buy</h2>
        <form onSubmit={undefined}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Item({ item, onRemoveItem }) {
  return <li></li>;
}

export default App;
