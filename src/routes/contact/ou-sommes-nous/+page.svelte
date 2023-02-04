<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';
</script>

<Header words={["Nous trouver, c'est facile !"]} />
<Content>
	<iframe
		title="Map"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.558722730276!2d2.4455395006091694!3d48.89101292090415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d2648cea8b7%3A0xb17fa32caca1f677!2sNEGRO%20S.A.!5e0!3m2!1sen!2sie!4v1675544194686!5m2!1sen!2sie"
		width="690"
		height="350"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
	<div class="left">
		<div class="head">Coordonnées</div>
		<div>
			<span class="negro">NEGRO</span> SA
		</div>
		<div>
			47, rue Vaillant Couturier<br />
			BP 68<br />
			93130 NOISY-LE-SEC
		</div>
		<div>
			<span class="key">Tél. :</span>
			01 48 43 37 64
		</div>
		<div>
			<span class="key">Fax. :</span>
			01 48 44 91 63
		</div>
		<div>
			<span class="key">Email. :</span>
			courrier[at]negro.fr
		</div>
		<div>
			Coordonnées GPS : <br />
			Latitude : 48° 53' 28.99 N <br />
			Longitude : 2° 26' 49.24" W
		</div>
	</div>
</Content>

<style>
	iframe {
		border: 0;
		float: left;
		margin-top: 20px;
	}

	.left {
		float: left;
		width: 225px;
		margin-left: 25px;
		margin-top: 31px;
	}

	.head {
		width: 225px;
		background-color: #ff6600;
		color: #ffffff;
		font-size: 16px;
		margin-bottom: 15px;
		padding: 5px;
	}

	.negro {
		font-size: 21px;
		color: #666666;
		font-weight: bold;
	}

	.key {
		color: #ff6600;
		font-weight: bold;
	}
</style>
