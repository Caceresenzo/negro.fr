<script lang="ts">
	import Header from '$lib/Header.svelte';
	import TwoColumnContent from '$lib/TwoColumnContent.svelte';

	import banner from './banner.jpg';
	import qualibat2 from '$lib/assets/qualibat2.gif';
</script>

<svelte:head>
	<title>Qualifications et Certification QUALIBAT et NF</title>
</svelte:head>

<Header words={['Respectons les règles !']} />
<TwoColumnContent title="Qualifications" {banner}>
	<div slot="left">
		<p>
			QUALIBAT est un organisme professionnel de qualification et de certification du bâtiment, qui
			assure, sous le contrôle des pouvoirs publics, les missions de qualifier, classifier et
			certifier les entreprises du bâtiment.
		</p>
		<p>L'Entreprise NEGRO est titulaire des qualifications&nbsp;:</p>
		<p>
			<strong>2112</strong> Maçonnerie technicité confirmée et béton armé technicité courante <br />
			<strong>3413</strong> Calfeutrement de joints de construction technicité supérieure <br />
			<strong>3423</strong> Imperméabilisation des façades classe I1, I2et I3 technicité supérieure
			<br />
			<strong>3433</strong> Etanchéité des façades - classe I4 technicité supérieur <br />
			<strong>3522</strong> &nbsp;Fabrication et pose de menuiseries extérieures en aluminium (Technicité
			confirmée)
		</p>
	</div>
	<div slot="right">
		<strong>3623</strong> Fabrication et pose de menuiseries PVC technicité supérieure <br />
		<strong>6112</strong> Peinture et ravalement technicité confirmée <br />
		<strong>6212</strong> Revêtements textiles collés <br />
		<strong>6213</strong> Revêtements textiles tendus <br />
		<strong>6223</strong> Revêtements plastiques, lés ou dalles, collés ou tendus <br />
		<strong>6233</strong> Linoléum <br />
		<strong>8621</strong>&nbsp; «&nbsp;<strong>Les pros de la performance énergétique</strong
		>®&nbsp;»
		<p />
		<p>
			<img title="Qualibat" src={qualibat2} alt="" width="123" height="130" />
		</p>
	</div>
</TwoColumnContent>
