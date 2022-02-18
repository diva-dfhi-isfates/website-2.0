<script context="module" lang="ts">
  import { waitLocale } from 'svelte-i18n'
  import '../i18n'

  export async function load(): Promise<Record<string, never>> {
    await waitLocale()

    return {}
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { screen } from '$lib/stores'
  import GoToMainContent from '$lib/components/GoToMainContent.svelte';

  import AOS from 'aos'
  import '../../node_modules/aos/dist/aos.css'

  import '../global.scss'

  let windowHeight: number
  let windowWidth: number

  $: {
    screen.update(() => ({
      height: windowHeight,
      width: windowWidth,
      device: windowWidth >= 768 ? 'computer' : 'mobile',
    }))
  }

  onMount(() => {
    AOS.init()
  })
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<GoToMainContent />
<slot />
