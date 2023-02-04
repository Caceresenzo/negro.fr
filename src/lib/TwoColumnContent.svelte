<script lang="ts">
	import Content from '$lib/Content.svelte';

	export let title: string = '';
	export let banner: string | undefined = undefined;
</script>

<Content>
	{#if banner}
		<img src={banner} alt="" />
	{/if}
	<div class="title">
		<h1 class="word">
			<span class="first">{title[0]}</span>{title.substring(1)}
		</h1>
		<div class="square-left-parent">
			<div class="square-left" />
		</div>
		<p class="big-letter">
			<span>{title[0]}</span>
		</p>
	</div>
	<table>
		<tbody>
			<tr>
				<td width="50%">
					<div class="square-right" />
					<slot name="left" />
				</td>
				<td width="50%" class="right">
					<slot name="right" />
				</td>
			</tr>
		</tbody>
	</table>
</Content>

<style>
	.title {
		float: left;
		display: block;
		width: 250px;
		margin-top: 15px;
	}

	.word {
		font-size: 18px;
		margin: 0;
		position: absolute;
		z-index: 4;
	}

	.word > .first {
		font-size: 26px;
		color: #a58608;
		font-weight: bold;
	}

	.square-left-parent {
		border-bottom: 1px solid #a58608;
		float: right;
		height: 23px;
		width: 100%;
	}

	.big-letter {
		margin: 35px 0 0 45px;
		width: 100px;
	}

	.big-letter > span {
		animation: fade 3s linear infinite;
		font-size: 150px;
		color: rgb(201, 182, 106);
		font-weight: bold;
		font-family: 'Jacques Francois', serif;
	}

	@keyframes fade {
		50% {
			opacity: 0;
		}
	}

	table {
		margin-top: 28px;
	}

	.square-left {
		width: 10px;
		height: 10px;
		background-color: #ff6600;
		float: right;
		margin-top: 13px;
	}

	.square-right {
		width: 10px;
		height: 10px;
		background-color: #ff6600;
		float: right;
		margin-top: -6px;
		margin-right: -15px;
	}

	.right {
		border-left: 1px solid #a58608;
		padding: 5px 13px 5px 10px;
	}
</style>
