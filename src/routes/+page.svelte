<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';
	import readMoreButton from '$lib/assets/read-more-button.png';
	import imageShadow from '$lib/assets/image-shadow.png';

	import { getPortfolio } from '$lib/api/references';

	$: references = getPortfolio();
</script>

<svelte:head>
	<title>Entreprise Générale en Bâtiment - Ravalement - Menuiseries Extérieurs - NEGRO SA</title>
</svelte:head>

<Header words={['Construire', 'Rénover', 'Aménager']} />
<Content>
	<div class="portfolio">
		{#each references as reference}
			<div>
				<a href={`/references/${reference.slug}`}>
					<img
						width="920"
						height="390"
						src={`/images/references/${reference.slug}/portfolio.jpg`}
						class="attachment-post-thumbnail wp-post-image"
						alt={reference.name}
						title={reference.name}
					/>
				</a>
			</div>
		{/each}
	</div>
	<div>
		<div class="vertical-line" style="margin-left:0px">
			<div class="square" />
		</div>
		<div class="section">
			<h2>Entreprise générale en bâtiment</h2>
			<p>
				Nos compétences techniques et notre maîtrise des métiers de <strong>maçonnerie</strong>, du
				<strong>béton armé</strong> et <strong>rénovation de bâtiments</strong> issue d'une expérience
				acquise de longue date permettent d'offrir une réponse globale à nos clients en proposant des
				solutions « clef en main ».
			</p>
		</div>
		<div class="vertical-line" style="height:303px">
			<div class="square" />
		</div>
		<div class="section">
			<h2>Ravalement</h2>
			<p>
				Entreprise de peinture dans les années 1950 et 1960, Ancré dans le secteur du ravalement et
				de la peinture depuis les années 1950, l'entreprise NEGRO propose des prestations de
				<strong>ravalement</strong> et de <strong>rénovation énergétique</strong> adaptées à la demande
				moderne, notamment pour les façades Haussmanniennes.
			</p>
		</div>
		<div class="vertical-line" style="height:235px">
			<div class="square" />
		</div>
		<div class="section">
			<h2>Menuiseries extérieures</h2>
			<p>
				L'entreprise NEGRO dispose de son propre pôle de production industrielle de menuiseries
				Aluminium, PVC, Bois et Acier. Nous intervenons sur les chantiers de
				<strong>rénovation énergétique</strong> au niveau national.
			</p>
		</div>
		<div class="more">
			<div class="read-more">
				<a href="/poles-de-competences/entreprise-generale-en-batiment/">
					<img src={readMoreButton} alt="Lire la suite" />
				</a>
			</div>
			<div class="read-more">
				<a href="/poles-de-competences/ravalement/">
					<img src={readMoreButton} alt="Lire la suite" />
				</a>
			</div>
			<div class="read-more">
				<a href="/poles-de-competences/menuiseries-exterieures/">
					<img src={readMoreButton} alt="Lire la suite" />
				</a>
			</div>
		</div>
	</div>
</Content>

<style>
	.portfolio {
		width: 100%;
		height: 440px;
		overflow-y: overlay;
		margin-bottom: 16px;
	}

	.portfolio > div {
		width: 920px;
		height: 440px;
		margin: 0px auto;
		background: url(/src/lib/assets/image-shadow.png) 0px 100% / 100% no-repeat;
	}

	.vertical-line {
		border-right: 1px solid #a58608;
		float: left;
		margin-top: 16px;
		height: 260px;
		margin-right: 5px;
		margin-left: 14px;
	}

	.square {
		width: 10px;
		height: 10px;
		background-color: #ff6600;
		float: left;
		margin-top: 0px;
	}

	.section {
		float: left;
		width: 282px;
	}

	.section > h2 {
		height: 72px;
		margin-bottom: 10px;
	}

	.section > p {
		margin: 5px 0;
		font-size: 14px;
		text-align: justify;
	}

	.more {
		clear: left;
	}

	.read-more {
		width: 118px;
		margin: 15px 97px;
		float: left;
	}
</style>
