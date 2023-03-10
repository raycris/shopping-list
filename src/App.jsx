import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>Items to buy</h2>
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="item"
              placeholder="Add a new item"
              required
            />
            <button className="cta">
              <span>Add me</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item key={item + index} onRemoveItem={onRemoveItem} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Item({ item, onRemoveItem }) {
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.detail === 1) {
      setClick(!click);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`bucket ${click ? "bucket-list_2" : "bucket-list"}`}
    >
      - {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
}

export default App;
