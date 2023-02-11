<script lang="ts">
	import { getFeatured } from '$lib/api/references';

	$: references = getFeatured();
</script>

<h2 class="title">Nos derniers ouvrages</h2>

{#each references as reference}
	<div class="featured">
		<a href={`/references/${reference.slug}/`}>
			<div class="name">
				<div class="background" />
				<strong>{reference.shortName || reference.name}</strong>
			</div>
			<img src={reference.images[0].thumbnail} alt="" />
		</a>
	</div>
{/each}

<style>
	.title {
		color: #6f6f6f;
		font-family: arial, verdana, helvetica;
		font-weight: bold;
		font-size: 24px;
		border-bottom: solid 2px #a58608;
	}

	.featured {
		height: 225px;
		width: 293px;
		float: left;
		margin: 10px;
	}

	.featured .name {
		position: absolute;
		margin-top: 175px;
		z-index: 10;
		padding: 5px 5px 5px 12px;
		color: rgb(255, 255, 255);
	}

	.featured .background {
		position: absolute;
		background: rgb(165, 134, 8);
		padding: 5px;
		color: rgb(255, 255, 255);
		font-weight: bold;
		z-index: -1;
		inset: 0px;
		opacity: 0.55;
	}

	.featured img {
		max-height: 225px;
		max-width: 300px;
		margin: auto;
		display: block;
	}

	.featured strong {
		color: rgb(255, 255, 255);
	}
</style>
