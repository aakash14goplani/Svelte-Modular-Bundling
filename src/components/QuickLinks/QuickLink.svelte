{#each [1, 2, 3, 4, 5] as link}
  <div class="link__c">
    <span class="text">
      Child Component: {link}
    </span>
  </div>
{/each}

<style lang="scss">
  .link__c {
    display: flex;
    flex-direction: column;
    border: 1px solid orange;
    padding: 0.25rem;
    margin: 0.25rem;
    
      .text {
        font-size: 1.6rem;
        color: orange;
      }
  }
</style>