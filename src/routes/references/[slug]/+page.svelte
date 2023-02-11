<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { references } from '$lib/api/references';

	$: reference = references.find(({ slug }) => slug === $page.params.slug);

	onMount(() => {
		console.log({ reference });
		if (!reference) {
			goto('/references');
		}
	});
</script>

<div class="card">
	<div class="head">
		<h3>{reference?.name}</h3>
		{#if reference?.address}
			<p>
				<span class="key">Adresse : </span>
				{reference?.address}
			</p>
		{/if}
		{#if reference?.client}
			<p>
				<span class="key">Client : </span>
				{reference?.client}
			</p>
		{/if}
		{#if reference?.description}
			<p>
				<span class="key">Description : </span>
				{reference?.description}
			</p>
		{/if}
		{#if reference?.cost}
			<p>
				<span class="key">Montant du marché : </span>
				{reference?.cost}
			</p>
		{/if}
	</div>
	<div class="images">
		{#each reference?.images || [] as image}
			<img src={image.source} alt="" />
		{/each}
	</div>
</div>

<style>
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

	.head {
		float: left;
		width: 100%;
	}

	.head > h3 {
		color: #6f6f6f;
		font-family: arial, verdana, helvetica;
		font-weight: bold;
		font-size: 24px;
		border-bottom: solid 2px #a58608;
	}

	.key {
		color: #ff6600;
		font-weight: bold;
	}

	img {
		margin: 4px;
	}
</style>
