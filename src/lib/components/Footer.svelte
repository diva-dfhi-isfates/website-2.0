<script>
  import { page } from "$app/stores"
  import { getCurrentFullYear } from "$lib/utils"
  import { localisedURL } from "$lib/directives"

  import Links from "./Links.svelte"
</script>

<footer class="d-flex flex-wrap justify-content-between align-items-center p-3 mb-5 border-top">
  <p class="col-md-4 mb-0 text-muted">© {getCurrentFullYear()} <span class="fw-bold">DIVA</span></p>

  <a
    href="/"
    class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    use:localisedURL={$page}
  >
    <img src="/assets/diva-icon-variant.svg" alt=""/>
  </a>

  <Links class="nav col-md-4 justify-content-end" />
</footer>

<style>
  footer {
    margin-top: 5rem;
  }

  img {
    width: 40px;
    height: 40px;
  }
</style>