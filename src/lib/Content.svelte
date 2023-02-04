<main>
	<slot />
</main>

<style>
	main {
		background: #fff;
		padding: 0 20px;
		margin: 0 auto;
		margin-bottom: 36px;
		width: 940px;
		color: #6f6f6f;
		font-size: 14px;
		line-height: 24px;
	}

	main :global(*) {
		color: #6f6f6f;
		line-height: 24px;
	}

	main :global(h1),
	main :global(h1),
	main :global(h2),
	main :global(h3),
	main :global(h4),
	main :global(h5),
	main :global(h6) {
		clear: both;
		font-weight: normal;
		color: #6f6f6f;
		line-height: 1.5em;
		margin: 0 0 20px 0;
	}

	main :global(p) {
		margin-bottom: 18px;
	}

	main :global(a) {
		color: #ff6600;
		text-decoration: none;
	}
</style>
