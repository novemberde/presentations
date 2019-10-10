<script>
	let name = 'world';
	let title = '';
	let items = [];
	let renderingTime  = 0;
  let memory = 0;
  let maximum = 0;
	let containerEl;
	const colorClasses = ['primary', 'secondary', 'tertiary', 'quaternary'];

	setInterval(() => {
    
    memory = Math.round(window.performance.memory.usedJSHeapSize/1000000)
    if ( maximum < memory ) {
      maximum = memory
    }
	}, 100)

	function handleChange(e) {
		const length = title ? title.length : 0
		let array = []

		const n = Math.min(Math.pow(length, 2), 125)
		const height = containerEl.clientHeight / n
		const width = containerEl.clientWidth / n
		const counts = n * n

		for (let i = 0; i < counts; i++) {
			const color = colorClasses[Math.floor(Math.random() * colorClasses.length)]
			array.push({height, width, color})
		}
		items = array;
	}
</script>
<style>
.container {
  position: fixed;
  overflow: hidden;
  float: left;
  height: 150%;
  width: 150%;
  margin: 0;
  padding: 0;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: gray;
  float: left;
}

.dot.primary {
  background-color: #ff7c61;
}

.dot.secondary {
  background-color: #1affb0;
}

.dot.tertiary {
  background-color: #ffd336;
}

.dot.quaternary {
  background-color: #ffffff;
}
h1 {
  position: fixed;
  top: calc(50% - 100px);
  left: calc(50% - 50px);
}
.my-input {
	position: fixed;
	height: 40px;
	width: 300px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.my-input input {
  font-size: 30px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.memory {
  font-size: 30px;
  padding-top:20px;
  font-weight: bold;
}

.progress {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(var(--progress-outer-height));
  width: calc(var(--progress-outer-width));
  background: linear-gradient(to right, #2196f3 99.99%, transparent),
    linear-gradient(to bottom, #2196f3 99.99%, transparent),
    linear-gradient(to right, #2196f3 99.99%, transparent),
    linear-gradient(to bottom, #2196f3 99.99%, transparent);
  background-size: 100% var(--progress-border-size),
    var(--progress-border-size) 100%, 100% var(--progress-border-size),
    var(--progress-border-size) 100%;
  background-repeat: no-repeat;
  animation: progress 3s linear infinite;
  background-position: calc(0px - var(--progress-outer-width)) 0px,
    calc(var(--progress-outer-width) - var(--progress-border-size))
    calc(0px - var(--progress-outer-height)),
    var(--progress-outer-width)
    calc(var(--progress-outer-height) - var(--progress-border-size)),
    0px var(--progress-outer-height);
}

@keyframes progress {
  0% {
    background-position: calc(0px - var(--progress-outer-width)) 0px,
    calc(var(--progress-outer-width) - var(--progress-border-size))
      calc(0px - var(--progress-outer-height)),
    var(--progress-outer-width)
      calc(var(--progress-outer-height) - var(--progress-border-size)),
    0px var(--progress-outer-height);
  }
  38% {
    background-position: 0px 0px,
    calc(var(--progress-outer-width) - var(--progress-border-size))
      calc(0px - var(--progress-outer-height)),
    var(--progress-outer-width)
      calc(var(--progress-outer-height) - var(--progress-border-size)),
    0px var(--progress-outer-height);
  }
  50% {
    background-position: 0px 0px,
    calc(var(--progress-outer-width) - var(--progress-border-size)) 0px,
    var(--progress-outer-width)
      calc(var(--progress-outer-height) - var(--progress-border-size)),
    0px var(--progress-outer-height);
  }
  88% {
    background-position: 0px 0px,
    calc(var(--progress-outer-width) - var(--progress-border-size)) 0px,
    0px calc(var(--progress-outer-height) - var(--progress-border-size)),
    0px var(--progress-outer-height);
  }
  100% {
    background-position: 0px 0px,
    calc(var(--progress-outer-width) - var(--progress-border-size)) 0px,
    0px calc(var(--progress-outer-height) - var(--progress-border-size)),
    0px 0px;
  }
}

</style>
<div class="container" bind:this={containerEl}></div>
<div class="progress"></div>
<h1>SVELTE</h1>
<div class="my-input">
	<input type="text" bind:value={title} on:keyup={handleChange}/>
  <div class="memory">Memory Usage: {memory}MB</div>
  <div class="memory">Maximum Usage: {maximum}MB</div>
  
</div>
{#each items as item}
	<div style="height: {item.height}px; width: {item.width}px;" class="dot {item.color}"></div>
{/each}