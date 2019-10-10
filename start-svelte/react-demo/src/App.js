import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      title: "",
      items: [],
      memory: 0,
      maximum: 0,
    }
    this.colorClasses = ['dot primary', 'dot secondary', 'dot tertiary', 'dot quaternary']
    this.handleChange = this.handleChange.bind(this)
    setInterval(() => {
      const memory = Math.round(window.performance.memory.usedJSHeapSize/1000000)
      const state = {
        memory,
      }
      if (this.state.maximum < memory) {
        state.maximum = memory
      }
      this.setState(state)
    }, 100)
  }

  handleChange = (e) => {
    const container = this.container.current
    let title = e.target.value
    const length = title ? title.length : 0
    let items = []
    const colorClasses = this.colorClasses

		const n = Math.min(Math.pow(length, 2), 100)
		const height = container.clientHeight / n
    const width = container.clientWidth / n
		const counts = n * n

		for (let i = 0; i < counts; i++) {
			const className = this.colorClasses[Math.floor(Math.random() * colorClasses.length)]
			items.push({height, width, className})
		}
    this.setState({
      title,
      items,
    })
  }

  render() {
    return (
      <div className="container" ref={this.container}>
        <div className="progress"></div>
        <div className="my-input">
          <input type="text" value={this.state.title} onChange={this.handleChange}/>
          <div className="memory">Memory Usage: {this.state.memory}MB</div>
          <div className="memory">Maximum Usage: {this.state.maximum}MB</div>
        </div>
        {
          this.state.items.map((item, i) => {
            return <div
              key={i}
              style={{height: `${item.height}px`, width: `${item.width}px`}}
              className={item.className}>

            </div>
          })
        }
      </div>
    );
  }
}

export default App;
