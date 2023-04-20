<script>
	export let data;
	let movies = data.movies;
</script>

<main>
	<div class="cards">
		{#each movies as movie}
			<div class="card">
				<h2>{movie.title}</h2>
				<img class="poster" src={movie.posterURLs[780]} alt={movie.title} />
				<p><span>Description: </span>{movie.overview}</p>
				<p><span>Directors: </span>{movie.directors.join(', ')}</p>
			</div>
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
	.card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 1em;
		max-width: 30em;
		margin: 0 auto;
		border: 1px solid #ccc;
	}
	.poster {
		max-width: 100%;
		max-height: 100%;
	}
	span {
		font-weight: bold;
	}
</style>
