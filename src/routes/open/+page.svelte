<script>
    import * as Card from "$lib/components/ui/card";
    import { fade } from "svelte/transition";
    let currentPacks = [];

    async function getPacks() {
        const res = await fetch("https://api.tcgdex.net/v2/en/sets/base1");
        const { cards } = await res.json();
        let i = 0;
        let randomCards = [];
        while (i < 6) {
            const index = Math.floor(Math.random() * cards.length);
            randomCards[i] = cards[index];
            i++;
        }
        saveItems(randomCards);
        currentPacks = randomCards;
    }

    function saveItems(cards) {
        let lsCards = localStorage.getItem("cards");
        console.log(lsCards);
        if (lsCards == null) {
            localStorage.setItem("cards", JSON.stringify(cards));
        } else {
            lsCards = JSON.parse(lsCards);

            const newCards = [...lsCards, ...cards];
            localStorage.setItem("cards", JSON.stringify(newCards));
        }
    }

    $: console.log(currentPacks);
</script>

<div class="flex justify-center mb-4">
    <button
        on:click={getPacks}
        class="border-2 p-2 bg-gray-200 rounded-md text-black font-bold"
    >
        Open Pack</button
    >
</div>
{#if currentPacks}
    <div class="w-full justify-center">
        <div class="grid grid-cols-2 gap-4">
            {#each currentPacks as card}
                <div transition:fade>
                    <img src={card.image + "/low.png"} />
                </div>
            {/each}
        </div>
    </div>
{/if}
