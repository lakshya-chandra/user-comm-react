import React from "react";
import "./App.css";
import Form from "./form.js";
import Table from "./table.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    const data = JSON.parse(localStorage.getItem("member"));
    this.setState({
      data: data
    });
  }
  render() {
    return (
      <div className="App">
        <Form />
        <Table data={this.state.data} />
      </div>
    );
  }
}
export default App;
