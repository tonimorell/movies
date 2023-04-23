<script>
	import MovieCard from '../../components/MovieCard.svelte';

	export let data;
	let movies = data.movies;
</script>

<main>
	<div class="cards">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</main>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 1em;
		padding: 1em;
	}
</style>
