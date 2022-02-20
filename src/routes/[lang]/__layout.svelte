<script context="module" lang="ts">
  import { locale } from 'svelte-i18n'

  import { DEFAULT_LANG, LANGS } from '$lib/constants'
  import { getUrlWithUpdatedLang } from '$lib/utils'

  export async function load({ params, url }) {
    let isLangValid = LANGS.includes(params.lang)

    if (!isLangValid) {
      return {
        status: 303,
        redirect: getUrlWithUpdatedLang(url.href, params.lang, DEFAULT_LANG)
      }
    }

    await locale.set(params.lang)
    return {}
  }
</script>

<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'

  import { MAIN_CONTENT_ID } from '$lib/constants'
</script>

<Navbar />

<main id={MAIN_CONTENT_ID}>
  <slot/>
</main>

<Footer />

<style>
  :global(h1::after) {
    position: absolute;
    content: "";
    background-color: var(--bs-primary);
    height: 5px;
    top: 95%;
    left: 10%;
    width: 50%;
    border-radius: 2px;
    z-index: -1;
  }
</style>
