<script lang="ts">
	import Header from '$lib/Header.svelte';
	import TwoColumnContent from '$lib/TwoColumnContent.svelte';

	import banner from './banner.jpg';
</script>

<svelte:head>
	<title>Fabrication de menuiseries extérieures, fenêtre, volet, porte, pvc, bois, aluminium, acier</title>
</svelte:head>

<Header words={['Isolation', 'Sécurité', 'Clareté']} />
<TwoColumnContent title="Menuiseries extérieures" {banner}>
	<div slot="left">
		<p>
			Nous vous proposons une offre complète en Menuiseries Aluminium, PVC, Bois et Acier en
			adéquation avec chacun de vos projets et garantie par :
		</p>
		<p>
			- les qualifications Qualibat (3542 : fabrication et pose de menuiseries extérieures
			en PVC, technicité confirmée, 3522 : fabrication et pose de menuiseries extérieures
			Aluminium, technicité confirmée) avec mention Haute Performance Energétique.
		</p>
		<p>
			- Une unité de production de menuiseries de 5700 m2 basé à Neuvy-sur-Barangeon (18)
			titulaire du marquage CE.
		</p>
	</div>
	<div slot="right">
		<p>
			- Un bureau d'étude capable de concevoir les ouvrages les plus complexes (Mur rideau,
			verrière, façade respirante) et ainsi d'apporter la meilleure réponse aux contraintes
			liées à la nouvelle règlementation thermique.
		</p>
		<p>
			- Un service travaux et des équipes de pose qualifiées vous offrant de solides
			références auprès de Maitres d'ouvrage tels que :<br />
			les ministères de l'économie et des finances, de l'agriculture, de l'éducation nationale,
			de la justice, la Poste, l'Institut français du pétrole, les Syndicats de copropriété,
			etc.
		</p>
	</div>
</TwoColumnContent>
