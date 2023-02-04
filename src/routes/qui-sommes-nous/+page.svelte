<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';

	import quiSommeNous from '$lib/assets/qui-somme-nous.jpg';
</script>

<Header words={["Bâtir ne s'improvise pas !"]} />
<Content>
	<img src={quiSommeNous} alt="" />
	<h1>Qui sommes-nous ?</h1>
	<table>
		<tbody>
			<tr>
				<td width="50%">
					<p>
						Créée en 1949 par Jean Negro, l'entreprise NEGRO était une entreprise de peinture. Elle
						se développe à partir des années 1970 dans le secteur du ravalement parisien
						traditionnel - façade plâtre et pierre de taille - sa diversification a suivi la logique
						de la maçonnerie de façade, puis le béton armé, avant de développer son secteur
						entreprise générale spécialisée dans l'aménagement de bâtiments.<br />
						L'activité Menuiserie est crée en 1981 à Gennevilliers (92) au travers de notre filiale Menui-Plast
						et débute par la fabrication de Menuiseries en PVC.<br />
						Absorbée en 1995, Menui-Plast devient le département menuiseries extérieures de l'entreprise
						NEGRO.<br />
						La création de l'activité Menuiserie Aluminium en 2005 et le développement de notre activité
						au niveau national nous ont conduit à relocaliser notre unité de production sur un site de
						5700 mètres carrés situé à Neuvy sur Barangeon dans le Cher (18).<br />
						Notre offre client a été complétée en 2011 par la création d'ateliers de fabrication de Menuiseries
						Bois et Acier.
					</p>
					<p>Chiffre d'affaires ? Entre 15 et 20 millions d'euros</p>
				</td>
				<td width="50%" class="border-left">
					Aujourd'hui, l'entreprise NEGRO se développe autour de 3 pôles de compétences :<br />
					- l'entreprise générale de bâtiment<br />
					- le ravalement<br />
					- les menuiseries extérieures.
					<p />
					<p>
						Ces 3 pôles, associés au savoir-faire et à la connaissance des métiers de la
						construction, sont un atout pour vos futurs chantiers.
					</p>
				</td>
			</tr>
		</tbody>
	</table>
</Content>

<style>
	td {
		padding: 0 8px;
	}

	.border-left {
		border-left: 1px solid #a58608;
	}
</style>
