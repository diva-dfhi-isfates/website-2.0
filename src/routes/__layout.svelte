<script lang="ts">
  import '../i18n'
  import { locale, waitLocale } from 'svelte-i18n'

  import { page } from '$app/stores'
  import Navbar from '$lib/components/Navbar.svelte';
  import '../global.scss'
  import { LANGS } from '$lib/constants';


  export async function load(): Promise<Record<string, never>> {
    await waitLocale()
    return {}
  }

  const setLangFromUrl = (query: URLSearchParams): void => {
    const lang = query.get('lang') || 'de'
    const isLangValid = LANGS.includes(lang)

    if (isLangValid) $locale = lang
  }

  $: setLangFromUrl($page.url.searchParams)
</script>

<Navbar />

<slot/>
