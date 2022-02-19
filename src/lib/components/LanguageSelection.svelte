<script lang="ts">
  import { locale, _ } from 'svelte-i18n'
  import { page } from '$app/stores'
  import { LANGS } from '$lib/constants'  
  import { getUrlWithUpdatedLang } from '$lib/utils'
</script>

<div
  {...$$restProps}
  class={`language-selection btn-group ms-4 ${$$restProps.class || ''}`}
  role="group"
  aria-label={$_('select_language')}
>
  {#each LANGS as lang}
    <a
      role="button"
      href={getUrlWithUpdatedLang($page.url.href, $locale, lang)}
      class="btn p-1 d-flex align-items-center"
      aria-label={$_(`localisation.${$locale}`)}
      class:disabled={$locale === lang}
      aria-hidden={$locale === lang}
      tabindex={$locale === lang ? -1 : 0}
    >
      <img src={`/assets/flag_${lang}.svg`} alt="" class="rounded border border-dark" />
    </a>
  {/each}
</div>

<style>
  img {
    height: 1.3rem;
  }
</style>