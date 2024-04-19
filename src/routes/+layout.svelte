<script>
	import './styles.css'
	import { setContext } from 'svelte'
	import { songs } from './songs'
	import { page } from '$app/stores'
	import Copyright from './Copyright.svelte'

	$: id = $page.params.id
	$: composer = songs.find((song) => song.slug === id)?.copyright?.composer
	$: lyricist = songs.find((song) => song.slug === id)?.copyright?.lyricist

	setContext('songs', songs)
</script>

<section>
	<header>
		<h1>Männerchor</h1>
		<nav>
			<ul>
				{#each songs as song}
					<li translate="no">
						<span>{song.name.icon}</span>
						<a href={song.slug}>
							<span>{song.name.full}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>

	<div>
		<slot />
	</div>

	<footer>
		{#if composer}<Copyright author={composer} />{/if}
		{#if lyricist}<Copyright author={lyricist} />{/if}
		<span lang="en">
			Favicon designed by <a href="https://openmoji.org/">OpenMoji</a>
			License:
			<a href="https://creativecommons.org/licenses/by-sa/4.0/#">
				CC BY-SA 4.0
			</a>
		</span>
	</footer>
</section>

<style>
	section {
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: minmax(0, 1200px);
		justify-content: center;
		min-height: 100%;
	}
	h1 {
		text-align: center;
	}
	ul {
		display: flex;
		flex-direction: column;
		padding: 0;
		gap: 0.4rem;
		max-width: max-content;
		list-style: none;
	}
	li {
		display: flex;
		text-wrap: nowrap;
	}

	li span,
	li a {
		min-height: 40px;
		display: flex;
		align-items: center;
	}
	li span {
		margin-right: 0.8rem;
	}

	li a {
		text-wrap: balance;
	}

	footer {
		font-size: smaller;
	}
</style>
