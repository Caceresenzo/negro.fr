<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';

	import reference from '$lib/assets/reference.jpg';
	import thumbEntrepriseGeneraleBatiment from '$lib/assets/thumb-entreprise-generale-batiment.jpg';
	import thumbMenuiseries from '$lib/assets/thumb-menuiseries.jpg';
	import thumbUniteProductionMenuiseries from '$lib/assets/thumb-unite-production-menuiseries.jpg';

	let documents = [
		{
			name: 'Documentation Entreprise Générale en Bâtiment',
			image: thumbEntrepriseGeneraleBatiment,
			url: 'https://web.archive.org/web/20210920134955/http://www.negro.fr/wp-content/uploads/BatimentNegro.pdf'
		},
		{
			name: "Documentation sur l'unité de production Menuiseries",
			image: thumbMenuiseries,
			url: 'https://web.archive.org/web/20210920134955/http://www.negro.fr/wp-content/uploads/NegroMenuiserie.pdf'
		},
		{
			name: 'Documentation Menuiseries extérieures',
			image: thumbUniteProductionMenuiseries,
			url: 'https://web.archive.org/web/20210920134955/http://www.negro.fr/wp-content/uploads/MenuiserieNegro.pdf'
		}
	];
</script>

<svelte:head>
	<title>Documentations commerciales</title>
</svelte:head>

<Header words={['Nous découvrir ...']} />
<Content>
	<img src={reference} alt="" />
	<table>
		<tbody>
			{#each documents as document}
				<tr>
					<td class="thumbnail">
						<img src={document.image} alt={document.name} width="56" height="80" />
					</td>
					<td class="link">
						<a href={document.url} target="_blank" rel="noreferrer">
							{document.name}
						</a>
						(PDF)
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</Content>

<style>
	.thumbnail {
		width: 80px;
	}

	.thumbnail > img {
		width: 56px;
		height: 80px;
	}

	.link {
		vertical-align: middle;
	}
</style>
