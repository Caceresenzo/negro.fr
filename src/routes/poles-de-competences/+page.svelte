<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';

	import left from './left.jpg';
</script>

<svelte:head>
	<title>3 pôle de compétences BTP</title>
</svelte:head>

<Header />
<Content>
	<div style="float:left">
		<img src={left} alt="" width="425" height="266" />
	</div>
	<div class="parent">
		<a
			title="Entreprise générale en bâtiment"
			href="/poles-de-competences/entreprise-generale-en-batiment/"
		>
			Entreprise générale du bâtiment
		</a>
		<br />
		<a title="Ravalement" href="/poles-de-competences/ravalement/"> Ravalement </a>
		<br />
		<a title="Menuiseries exterieures" href="/poles-de-competences/menuiseries-exterieures/">
			Menuiseries extérieures
		</a>
	</div>
</Content>

<style>
	.parent > a {
		width: 450px;
		float: left;
		font-size: 18px;
		color: #6f6f6f;
	}

	.parent > a:nth-child(1) {
		margin-top: 48px;
	}

	.parent > a:nth-child(3) {
		margin-top: 30px;
	}

	.parent > a:nth-child(5) {
		margin-top: 30px;
	}
</style>
