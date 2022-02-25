<script context="module" lang="ts">
  import { locale, _ } from "svelte-i18n"
  import { get } from "svelte/store"

  import { getGoodies } from "$lib/api"

  export async function load({ url, params }) { // keep unused url to trigger data reload when language change
    let goodies = await getGoodies(get(locale))

    return {
			props: {
				goodies
			}
		}
	}
</script>

<script>
  import { getPageTitle } from '$lib/utils'

  export let goodies
</script>

<svelte:head>
  <title>{getPageTitle($_('goodies.title'))}</title>
</svelte:head>

<section class="container">
  <h1 data-aos="fade-right">{$_('goodies.title')}</h1>

   <ul class="mt-5 row row-cols-1 row-cols-md-3 g-5 list-unstyled">
    {#each goodies as goody}
      <li class="col" data-aos="fade-up">
        <div class="h-100 d-flex flex-column align-items-center">
          <div class="position-relative avatar">
            <img src={goody.image?.url} class="card-img-top" alt="">
          </div>
          <div class="card-body mt-3">
            <h2 class="card-title text-center fs-5 fw-bold">
              {goody.name}
            </h2>
            <p class="text-center">
              {goody.price}€
            </p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  img {
    max-height: 300px;
  }
</style>