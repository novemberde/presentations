import './style';
import { createRef, Component } from 'preact';

class App extends Component {
  constructor(props) {
    super(props);
    this.container = createRef();
    this.state = {
      title: "",
      items: [],
      memory: 0,
      maximum: 0,
    }
    this.colorClasses = ['dot primary', 'dot secondary', 'dot tertiary', 'dot quaternary']
    this.handleChange = this.handleChange.bind(this)
    setInterval(() => {
      if (typeof window === 'undefined') {
        return
      }

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
    this.setState({
      title: e.target.value,
    })

    const container = this.container.current
    let title = e.target.value
    const length = title ? title.length : 0
    let items = []
    const colorClasses = this.colorClasses

		const n = Math.min(Math.pow(length, 2), 125)
		const height = container.clientHeight / n
    const width = container.clientWidth / n
		const counts = n * n

		for (let i = 0; i < counts; i++) {
			const className = this.colorClasses[Math.floor(Math.random() * colorClasses.length)]
			items.push({height, width, className})
    }

    this.setState({
      items,
    })
  }

  render() {
    return (
      <div className="container" ref={this.container}>
        <h1>PREACT</h1>
        <div className="progress" />
        <div className="my-input">
          <input type="text" value={this.state.title} onInput={this.handleChange}/>
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
