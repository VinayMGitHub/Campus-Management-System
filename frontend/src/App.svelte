<script>
	// export let name;
	import "carbon-components-svelte/css/all.css";
	let theme = "g90"; // "white" | "g10" | "g80" | "g90" | "g100"
	$: document.documentElement.setAttribute("theme", theme);


	import Router from "svelte-spa-router"
	import NavBar from "./routes/NavBar.svelte"
	// import Student from './routes/student.svelte';
	import Teacher from './routes/Teacher.svelte';
	import Student from './routes/Student.svelte';

	let routes = {
		// "/hom" : Home
		"/teacher" : Teacher,
		"/student" : Student
	};
</script>

<main>
	<br>
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<NavBar/>
	<Router {routes}/>
		
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>