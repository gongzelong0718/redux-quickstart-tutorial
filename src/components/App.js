import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
