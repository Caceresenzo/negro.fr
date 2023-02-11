<script lang="ts">
	import Header from '$lib/Header.svelte';
	import TwoColumnContent from '$lib/TwoColumnContent.svelte';

	import banner from './banner.jpg';
</script>

<svelte:head>
	<title>Ravalement - Traitement de façade - rénovation de façade</title>
</svelte:head>

<Header words={['Une façade à votre image.']} />
<TwoColumnContent title="Ravalement" {banner}>
	<div slot="left">
		<p>
			Entreprise de peinture dans les années 1950 et 1960, l'Entreprise NEGRO a orienté son activité
			vers le ravalement à partir des années 1970, et plus particulièrement vers le ravalement des
			immeubles parisiens de type Haussmannien, avec façade sur rue en pierre de taille, en pierre
			et brique, ainsi que la réfection des façades sur cour en plâtre peint.
		</p>
		<p>
			Le savoir-faire de nos compagnons et la maîtrise des différentes techniques de ravalement,
			nous permet d'effectuer les reprises de pierres abîmées par le temps et la pollution.
		</p>
	</div>
	<div slot="right">
		Ces compétences techniques nous permettent d'assurer la rénovation des façades parfois imposées
		par les activités du XXIème siècle.
		<p />
		<p>
			Aujourd'hui, en raison de ses nombreuses compétenses, l'entreprise NEGRO est considérée comme
			l'un des premiers acteurs du secteur.
		</p>
	</div>
</TwoColumnContent>
