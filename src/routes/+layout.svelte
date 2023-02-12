<script>
	import { dev } from '$app/environment';
	import Link from './Link.svelte';

	import downloadIcon from '$lib/assets/download-icon.png';
	import footerLine from '$lib/assets/footer-line.png';
	import federationFrancaiseBatiment from '$lib/assets/federation-francaise-batiment.png';
	import qualibat from '$lib/assets/qualibat.gif';

	let links = [
		{ href: '/qui-sommes-nous', text: 'Qui sommes-nous ?' },
		{
			href: '/poles-de-competences',
			text: '3 pôles de compétences',
			children: [
				{
					href: '/poles-de-competences/entreprise-generale-en-batiment',
					text: 'Entreprise générale en bâtiment'
				},
				{ href: '/poles-de-competences/ravalement', text: 'Ravalement' },
				{ href: '/poles-de-competences/menuiseries-exterieures', text: 'Menuiseries extérieures' }
			]
		},
		{ href: '/references', text: 'Références' },
		// { href: '/recrutement', text: 'Recrutement' },
		{ href: '/qualifications', text: 'Qualifications' },
		{
			href: '/contact',
			text: 'Contact',
			children: [
				{ href: '/contact/ou-sommes-nous', text: 'Où sommes-nous ?' },
				{ href: '/contact/mentions-legales', text: 'Mentions légales' }
			]
		},
		{ href: '/telechargements', icon: downloadIcon }
	];

	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<nav>
	<ul>
		{#each links as link}
			<Link {...link} />
		{/each}
	</ul>
</nav>
<slot />
<footer>
	<div class="colophon">
		<img
			id="federationFrancaiseBatiment"
			src={federationFrancaiseBatiment}
			alt="Federation Francaise Batiment"
		/>
		<div class="contact">
			<a href="/contact" style="text-align: right">Contact</a>
			|
			<a href="/contact/mentions-legales" style="text-align: left">Mentions légales</a>
		</div>
		<img id="qualibat" src={qualibat} alt="qualibat" />
	</div>
</footer>

<style>
	:global(body) {
		font-family: Verdana, Geneva, sans-serif;
	}

	nav {
		background-color: #a58608;
		display: block;
		float: left;
		margin: 0 auto;
		width: 100%;
	}

	nav > ul {
		font-size: 13px;
		margin: 0px auto;
		width: 940px;
		height: fit-content;
		list-style: none;
		list-style-image: initial;
	}

	footer {
		width: 100%;
		background: url(/src/lib/assets/footer-line.png) repeat-x;
		float: left;
		height: 106px;
		margin-bottom: 20px;
		clear: both;
	}

	.colophon {
		overflow: hidden;
		height: 106px;
		width: 940px;
		color: #ffffff;
		vertical-align: middle;
		margin: 0 auto;
	}

	.colophon > #federationFrancaiseBatiment {
		float: left;
		margin-left: 40px;
	}
	.colophon > #qualibat {
		float: right;
		margin-right: 50px;
	}

	.colophon > .contact {
		width: 570px;
		margin-top: 40px;
		text-align: center;
		padding: 0 10px;
		float: left;
		font-size: 12px;
		font-weight: bold;
		letter-spacing: 1px;
	}

	.contact > a {
		padding: 4px 20px;
		height: 18px;
		display: inline-block;
		color: #fff;
		text-decoration: none;
	}

	.contact > a:hover {
		background: #ff6600;
	}
</style>
