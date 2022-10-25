<script lang="ts">
  import OverviewC from "$src/components/Overview/Overview-C.svelte";
</script>

<div class="overview__b">
  <span class="text">
    This is Overview Component B
  </span>
  <OverviewC />
</div>

<style>
  .overview__b {
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    padding: 1rem;
    margin: 1rem;
  }

  .text {
    font-size: 1.6rem;
    color: blue;
  }
</style>