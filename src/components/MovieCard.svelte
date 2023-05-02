<script>
	export let movie;
</script>

<div class="card">
	<h2>{movie.title}</h2>
	<img class="poster" src={movie.posterURLs[780]} alt={movie.title} />
	<div class="w-full overflow-hidden">
		<span>Description: </span>
		<p class="h-24 ml-2 overflow-auto">{movie.overview}</p>
	</div>
	<div class="w-full flex justify-start">
		<span>Year: </span>
		<p class="ml-2">{movie.year}</p>
	</div>
	<div class="w-full flex justify-start">
		<span>Directors: </span>
		<p class="ml-2">{movie.directors.join(', ')}</p>
	</div>
	<div class="w-full flex justify-start">
		<span>Runtime: </span>
		<p class="ml-2">{movie.runtime}</p>
	</div>
	<div class="w-full flex justify-start">
		<span>IMDB: </span>
		<p class="ml-2">{movie.imdbRating}</p>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 1em;
		max-width: 300px;
		max-height: 800px;
		margin: 0 auto;
		border: 1px solid #ccc;
		border-radius: 4px;
		background-color: #fefefe;
	}
	.poster {
		max-height: 400px;
	}
	span {
		font-weight: bold;
	}
	h2 {
		margin-bottom: 2rem;
		font-weight: bold;
		font-size: 1.5rem;
	}
	img {
		margin-bottom: 1rem;
	}
</style>
