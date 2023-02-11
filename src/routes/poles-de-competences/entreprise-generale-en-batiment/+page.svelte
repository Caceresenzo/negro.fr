<script lang="ts">
	import Header from '$lib/Header.svelte';
	import TwoColumnContent from '$lib/TwoColumnContent.svelte';

	import banner from './banner.jpg';
</script>

<svelte:head>
	<title>Entreprise Générale en bâtiment - Rénovation</title>
</svelte:head>

<Header words={["Bâtir, une raison d'être !"]} />
<TwoColumnContent title="Entreprise en bâtiment" {banner}>
	<div slot="left">
		<p>
			L'entreprise générale du bâtiment est l'un des trois pôles principaux de l'entreprise NEGRO.
		</p>
		<p>
			Nos compétences techniques, notre maîtrise des métiers de maçonnerie et du béton armé, nous
			permettent de proposer à nos clients une réponse globale à leurs demandes.
		</p>
		<p>
			Aujourd'hui, la qualité et l'implication au quotidien des compagnons et collaborateurs de
			l'entreprise sont les garants du respect de nos engagements et d'une véritable source de
			dynamisme.
		</p>
	</div>
	<div slot="right">
		<p>
			Fort d'une expérience acquise depuis de nombreuses années, NEGRO met en adéquation les besoins
			de ses clients :
		</p>
		<p>
			- Administrations publiques,<br />
			- Collectivités,<br />
			- Entreprises.
		</p>
		<p>par une solution «&nbsp;Clef en main&nbsp;» pour leurs travaux d'aménagements de locaux</p>
	</div>
</TwoColumnContent>
