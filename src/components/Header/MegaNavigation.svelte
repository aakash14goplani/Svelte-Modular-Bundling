<script lang="ts">
  import { url, isActive } from '@roxi/routify';

  export let mode: string = 'header';

  const headerLinks = [
    ['./home', 'Home'],
    ['./overview', 'Overview'],
    ['./order', 'Order'],
    ['./price', 'Price']
  ];

  const footerLinks = [
    ['#', '<Twt>'],
    ['#', '<Fb>'],
    ['#', '<Ln>'],
    ['#', '<Inst>']
  ]

  let links = (mode === 'header') ? headerLinks : footerLinks;
</script>

<ul>
  {#each links as [path, name]}
    <li><a href="{$url(path)}" class:selected={$isActive(path)}>{name}</a></li>
  {/each}
</ul>

<style lang="scss">
  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.65rem;
    display: block;
  }
</style>