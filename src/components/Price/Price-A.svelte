<script lang="ts">
  import PriceB from "./Price-B.svelte";
</script>

<div class="price__a">
  <span class="text">
    This is Price Component A
  </span>
  <PriceB />
</div>

<style>
  .price__a {
    display: flex;
    flex-direction: column;
    border: 1px solid brown;
    padding: 1rem;
    margin: 1rem;
  }

  .text {
    font-size: 1.6rem;
    color: brown;
  }
</style>