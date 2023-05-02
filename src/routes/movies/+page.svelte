<script>
	import { goto } from '$app/navigation';

	import MovieCard from '../../components/MovieCard.svelte';

	export let data;
	$: movies = data.movies;

	let keyword = 'zombie';
	function searchMovies() {
		if (keyword) {
			goto('?' + `keyword=${keyword}`);
		}
	}
</script>

<main>
	<section class="w-full h-40 flex justify-center items-center">
		<div class="w-96 flex flex-col items-center">
			<h2 class="mb-2 text-3xl">Search movies by keyword</h2>
			<form method="GET">
				<label for="keyword">
					<input
						class="keyword w-60 h-10 border rounded-full px-5"
						name="keyword"
						type="text"
						bind:value={keyword}
					/>
				</label>
				<button on:click={searchMovies} class="w-32 h-10 rounded-full">Find</button>
			</form>
		</div>
	</section>
	<section class="cards">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</section>
</main>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 1em;
		padding: 1em;
	}
	button {
		color: white;
		background-color: #993559;
	}
</style>
