import React, { Component } from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";
import ItemAddForm from "./components/itemAddForm";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink coffe"),
      this.createTodoItem("Make awesome APP"),
      this.createTodoItem("Have a lunch")
    ],
    term: "",
    filter: "" //active, all, done
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      id: this.maxId++,
      done: false
    };
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      console.log(oldItem);
      const newItem = {
        ...oldItem,
        important: !oldItem.important
      };
      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      console.log(oldItem);
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr
      };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  onSearchChange = term => {
    this.setState({
      term: term
    });
  };

  onFilterChange = filter => {
    this.setState({
      filter: filter
    });
  };

  render() {
    const { todoData, term, filter } = this.state;
    // const visibleItems = this.search(todoData, term);
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            num={1}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
