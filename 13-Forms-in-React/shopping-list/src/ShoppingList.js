import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuidv4 } from "uuid";
// import { v4 as uuidv4 } from "uuid"; to pozwala nam na dodawanie unikalnego id do elementow,
// najpierw trzeba w folderze z projektem zainstalowac to: npm install uuid, potem
// najlepiej znalezc to w folderze i poczytac readme.
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons", id: uuidv4() },
        { name: "Bread", qty: "2 loaves", id: uuidv4() },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
  //   kod ponizej mowi: wez nowe dane i wstaw je do items powyzej
  addItem(item) {
    let newItem = { ...item, id: uuidv4() };
    this.setState((state) => ({
      items: [...state.items, newItem],
    }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
