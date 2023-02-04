<script lang="ts">
	import { page } from '$app/stores';

	interface ILink {
		href?: string;
		text?: string;
		icon?: string;
		child?: boolean;
		children?: Array<ILink>;
	}

	export let href: ILink['href'] = undefined;
	export let text: ILink['text'] = undefined;
	export let icon: ILink['icon'] = undefined;
	export let child: ILink['child'] = false;
	export let children: ILink['children'] = undefined;

	$: active = $page.url.pathname.startsWith(href!);
</script>

<li class:active class:child>
	<a {href}>
		{#if text}
			{text}
		{:else if icon}
			<img src={icon} alt="icon" />
		{/if}
	</a>
	{#if children}
		<ul class="sub-menu">
			{#each children as child}
				<svelte:self {...child} child={true} />
			{/each}
		</ul>
	{/if}
</li>

<style>
	a {
		height: 38px;
		display: block;
		line-height: 38px;
		padding: 10px 11px 0px 11px;
		text-decoration: none;
		font-weight: bold;
		font-size: 15px;
		color: #ffffff;
		text-decoration-color: initial;
	}

	li {
		float: left;
		position: relative;
	}

	li {
		background: #a58608;
	}

	li.active,
	li:hover {
		background: #ff6600;
	}

	li > ul {
		box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px;
		display: none;
		position: absolute;
		float: left;
		width: 180px;
		z-index: 99999;
		list-style: none;
		padding-inline-start: 0px;
	}

	li.child > a {
		line-height: 1em;
		padding: 10px;
		width: 160px;
		height: auto;
	}

	li:hover > ul {
		display: block;
	}
</style>
