<script lang="ts">
	import { page } from '$app/stores'
	import { getContext } from 'svelte'
	import { songs as Songs } from '../songs'
	import Media from './Media.svelte'

	const songs = getContext<typeof Songs>('songs')
	$: song = songs.find((s) => s.slug === $page.params.id)
</script>

<main>
	{#if song}
		<h2 translate="no">{song.name.icon} {song.name.full}</h2>
		{#each song.parts as part}
			<Media {...part} />
		{/each}
	{/if}
</main>

<style>
	h2 {
		text-align: center;
	}
</style>
