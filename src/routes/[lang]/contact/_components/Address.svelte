<script lang="ts">
  export let title: string
  export let street: string
  export let city: string
  export let zip: string
</script>

<address>
  <p class="m-0">{title}</p>
  <p class="m-0">{street}</p>
  <p class="m-0">{zip} {city}</p>
</address>
