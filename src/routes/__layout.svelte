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
  import GoToMainContent from '$lib/components/GoToMainContent.svelte';

  import AOS from 'aos'
  import '../../node_modules/aos/dist/aos.css'

  import '../global.scss'

  onMount(() => {
    AOS.init()
  })
</script>

<GoToMainContent />
<slot />
