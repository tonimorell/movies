<script>
	export let movie;
</script>

<div class="card">
	<h2>{movie.title}</h2>
	<img class="poster" src={movie.posterURLs[780]} alt={movie.title} />
	<div class="description">
		<span>Description: </span>
		<p>{movie.overview}</p>
	</div>
	<div>
		<span>Directors: </span>
		<p>{movie.directors.join(', ')}</p>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 1em;
		max-width: 30em;
		max-height: 50em;
		margin: 0 auto;
		border: 1px solid #ccc;
		border-radius: 4px;
		background-color: #fefefe;
	}
	.poster {
		max-width: 100%;
		max-height: 100%;
	}
	.description {
		margin-bottom: 1rem;
		width: 100%;
		height: 150px;
		overflow: hidden;
	}
	.description p {
		height: 120px;
		text-overflow: ellipsis;
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
