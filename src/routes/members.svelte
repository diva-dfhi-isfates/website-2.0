<script context="module" lang="ts">
  import { getDivaMembers } from "$lib/api";
  import { getLocaleInUrl } from "$lib/utils";

  export async function load({ url }) {
		const members = await getDivaMembers(getLocaleInUrl(url.href));

		return {
			props: {
				members
			}
		};
	}
</script>

<script>
  export let members
</script>

<h1>Members</h1>

<ul>
  {#each members as member}
    <li>
      <img src={member.profile.url} alt="">
      {member.firstname}
      {member.lastname}
      {@html member.description.html}
    </li>
  {/each}
</ul>