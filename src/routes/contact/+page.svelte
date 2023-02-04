<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';
	import bannerNegro from '$lib/assets/banner-negro.jpg';

	let contacts = [
		{
			job: 'Direction commerciale',
			name: 'M. Patrick CAVANNA',
			email: 'pcavanna[at]negro.fr',
			phone: '01 48 43 37 64',
			fax: '01 48 44 91 63'
		},
		{
			job: 'Direction des ressources humaines',
			name: 'Mme Catherine CAVANNA',
			email: 'ccavanna[at]negro.fr',
			phone: '01 48 43 37 64',
			fax: '01 48 44 91 63'
		}
	];
</script>

<Header words={["Nous contacter, c'est facile !"]} />
<Content>
	<img src={bannerNegro} alt="" />

	{#each contacts as contact}
		<div class="contact">
			<div class="square-parent">
				<div class="square" />
			</div>
			<h2 class="job">
				<span class="first">{contact.job[0]}</span>{contact.job.substring(1)}
			</h2>
			<div class="info">
				<p class="name">{contact.name}</p>
				<table>
					<tbody>
						<tr>
							<td class="email key">Email</td>
							<td>{contact.email}</td>
						</tr>
						<tr>
							<td class="key">Tél.</td>
							<td>{contact.phone}</td>
						</tr>
						<tr>
							<td class="key">Fax</td>
							<td>{contact.fax}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	{/each}
</Content>

<style>
	.contact {
		float: left;
		width: 50%;
	}

	.job {
		display: inline-block;
		margin-bottom: 20px;
	}

	.first {
		color: #a58608;
		font-weight: 600;
		font-size: 32px;
	}

	.square-parent {
		border-bottom: 1px solid #a58608;
		float: left;
		height: 27px;
		width: 60px;
	}

	.square {
		width: 10px;
		height: 10px;
		background-color: #ff6600;
		float: left;
		margin-top: 17px;
	}

	.info {
		width: 270px;
		margin-left: 62px;
	}

	.name {
		font-size: 20px;
		color: #6f6f6f;
		margin-bottom: 15px;
	}

	.key {
		color: #ff6600;
		font-weight: bold;
	}

	.email {
		width: 65px;
	}
</style>
