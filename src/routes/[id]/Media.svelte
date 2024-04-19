<script context="module" lang="ts">
	let current: HTMLAudioElement
</script>

<script lang="ts">
	export let name: string
	export let recording: string

	let time = 0
</script>

<figure>
	<figcapture>
		<h3 translate="no">
			{name}
		</h3>
	</figcapture>
	<audio
		controls
		controlslist="novolume"
		src={recording}
		bind:currentTime={time}
		on:play={(e) => {
			const audio = e.currentTarget

			if (audio !== current) {
				current?.pause()
				current = audio
			}
		}}
		on:ended={() => {
			time = 0
		}}
	></audio>
</figure>

<style>
	audio {
		display: block;
		width: 100%;
	}
	figure {
		display: flex;
		margin-left: 1rem;
		margin-right: 1rem;
		gap: 1rem;
		align-items: center;
	}
	h3 {
		margin: 0;
	}
</style>
