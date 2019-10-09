import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      items: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let title = e.target.value
    let items = []
    for(let i=0; i<10000; i++) {
      items.push(title)
    }
    this.setState({
      title,
      items,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React</h1>
          <input type="text" value={this.state.title} onChange={this.handleChange}/>
          <div>{this.state.title}</div>
          <ul style={{display:"none"}}>
          {/* <ul> */}
            {this.state.items.map((item, k) =>
              <li key={k}>
                {item}
              </li>
            )}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
