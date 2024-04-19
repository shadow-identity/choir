<script>
	import './styles.css'
	import { setContext } from 'svelte'
	import { songs } from './songs'

	setContext('songs', songs)
</script>

<h1>Männerchor</h1>
<nav>
	<ul>
		{#each songs as song}
			<li translate="no" style="--icon: '{song.name.icon}'">
				<a href={song.slug}>{song.name.full}</a>
			</li>
		{/each}
	</ul>
</nav>

<slot />

<style>
	h1 {
		text-align: center;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		max-width: max-content;
	}
	li::marker {
		content: var(--icon);
	}

	li {
		padding-left: 0.8rem;
	}
	a {
		display: block;
		line-height: 40px;
	}
</style>
