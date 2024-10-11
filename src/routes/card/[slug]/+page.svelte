<script>
    export let data;
    const { card } = data;
    console.log(card);
</script>

<div class=" w-full justify-center">
    <img class="w-6/12" src={`${card.image}/low.png`} />
    {#each Object.keys(card) as details, i}
        {#if typeof card[details] !== "object"}
            <p class="border-2 border-red-100">{details} : {card[details]}</p>
        {:else}{/if}
    {/each}
</div>
