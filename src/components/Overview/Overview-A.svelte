<script lang="ts">
  import OverviewB from "$src/components/Overview/Overview-B.svelte";
</script>

<div class="overview__a">
  <span class="text">
    This is Overview Component A
  </span>
  <OverviewB />
</div>

<style>
  .overview__a {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    padding: 1rem;
    margin: 1rem;
  }

  .text {
    font-size: 1.6rem;
    color: red;
  }
</style>