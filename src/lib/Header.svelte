<script lang="ts">
	import logo from '$lib/assets/logo.png';

	export let words: Array<string> = [];
</script>

<header>
	<div class="title">
		<span>
			<a
				href="/"
				title="NEGRO SA – Entreprise Générale en Bâtiment – Ravalement – Menuiseries Extérieurs"
				rel="home"
			>
				<img src={logo} alt="logo" />
			</a>
		</span>
	</div>
	<div class="description">
		{#each words as word, index}
			<div class="word">
                <span class="first">{word[0]}</span>{word.substring(1)}
            </div>
            {#if index != words.length - 1}
                <div class="square" />
            {/if}
		{/each}
	</div>
</header>

<style>
	header {
		margin: 0 auto;
		width: 940px;
	}

	.title {
		float: right;
		font-size: 30px;
		line-height: 36px;
		margin: 35px 27px 30px 0;
	}

	.description {
		clear: left;
		float: left;
		margin: 35px 0 0 0;
		width: 220px;
		font-size: 36px;
		color: #6f6f6f;
		font-family: arial, verdana, helvetica;
		font-weight: bold;
		width: 700px;
	}

	.word {
		height: 50px;
		float: left;
		display: block;
		margin-right: 10px;
	}

	.word > .first {
		font-size: 52px;
		color: #a58608;
		font-weight: bold;
	}

	.square {
		width: 10px;
		height: 10px;
		background-color: #ff6600;
		float: left;
		margin-top: 38px;
        margin-right: 10px;
	}
</style>
