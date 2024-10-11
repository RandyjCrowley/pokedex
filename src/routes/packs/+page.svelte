<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    let cards = [];

    function deleteCards() {
        localStorage.removeItem("cards");
        cards = [];
    }
    onMount(() => {
        let lsCards = localStorage.getItem("cards");
        console.log(lsCards);
        if (lsCards != null) {
            cards = JSON.parse(lsCards);
        }
    });

    $: console.log(cards);
</script>

<div class="flex justify-center mb-4">
    <button
        on:click={deleteCards}
        class="border-2 p-2 bg-gray-200 rounded-md text-black font-bold"
    >
        Delete Cards</button
    >
</div>
<div class="flex justify-center mb-4"></div>
{#if cards.length !== 0}
    <div class="w-full justify-center">
        <div class="grid grid-cols-2 gap-4">
            {#each cards as card, i}
                <div transition:fade>
                    <a href={`/card/${card.id}`}>
                        <img class="w-full" src={card.image + "/low.png"} />
                    </a>
                </div>
            {/each}
        </div>
    </div>
{:else}
    <p>NO CARDS GO GAMBLE</p>
{/if}
