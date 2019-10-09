<script>
	let name = 'world';
	let title = '';
	let items = [];
	let renderingTime  = 0;
	let memory = 0;

	setInterval(() => {
		memory = window.performance.memory.usedJSHeapSize
	}, 0.5)

	function handleChange() {
		const a = []
		for(let i=0; i<40000; i++) {
			a.push(title)
		}
		items = a
	}
</script>
<style>
.App {
  text-align: center;
}
.App-header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
input {
  font-size: 2rem;
}
.memory {
	padding-top: 1rem;
  color: chocolate;
  font-size: 2rem;
}
</style>

<div class="App-header">
	<h1>Svelte</h1>
	<input type="text" bind:value={title} on:change={handleChange}/>
	<div>{title}</div>
	<div class="memory">Memory Usage: {Math.round(memory/1000000)}MB</div>
	<ul style="display:none;">
		{#each items as item}
			<li>{item}</li>
		{/each}
	<!-- <ul style={{display:"none"}}> -->
	<!-- {this.state.items.map((item, k) =>
		<li key={k}>
		{item}
		</li>
	)} -->
	</ul>
</div>