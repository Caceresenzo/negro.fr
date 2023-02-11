<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';
	import banner from './banner.jpg';

	import { categories, references, getReferencesByCategory } from '$lib/api/references';
</script>

<Header words={['Bâtir laisse des traces !']} />
<Content>
	<img src={banner} alt="" />
	<ul class="list">
		<li>
			{#each categories as category}
				<h3 class="category">
					<div class="square" />
					{category}
				</h3>
				<ul class="sublist">
					{#each getReferencesByCategory(category) as reference}
						<li>
							<a class="reference" href={`/references/${reference.slug}/`}>
								{reference.name}
							</a>
						</li>
					{/each}
				</ul>
			{/each}
		</li>
	</ul>
	<div class="content">
		<div class="card">
			<slot />
		</div>
	</div>
</Content>

<style>
	.category {
		clear: none;
		margin: 15px 0 10px 0;
		font-weight: normal;
	}

	.square {
		background-color: #FF6600;
		margin-top: 9px;
		margin-right: 3px;
		width: 10px;
		height: 10px;
		float: left;
	}

	.list {
		list-style: none;
		float: left;
		overflow: hidden;
		width: 260px;
	}

	.sublist {
		list-style: square;
		margin-left: 1.3em;
	}

	.reference {
		text-decoration: none;
		color: #6f6f6f;
	}

	.reference:hover {
		text-decoration: underline;
	}

	.content {
		width: 670px;
		font-size: 14px;
		line-height: 24px;
		margin-right: 0px;
		float: left;
	}
	
	.card {
		overflow: auto;
		padding-left: 15px;
		padding-right: 15px;
		margin-top: 15px;
		box-shadow: rgb(204 204 204) 0px 0px 5px;
		border: 5px solid rgb(255, 255, 255);
		left: -5px;
		background: rgb(255, 255, 255);
	}
</style>
