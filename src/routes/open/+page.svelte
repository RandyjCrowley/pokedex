<script>
    import * as Card from "$lib/components/ui/card";
    import { fade } from "svelte/transition";
    let currentPacks = [];

    async function getPacks() {
        try {
            const res = await fetch("https://api.tcgdex.net/v2/en/sets/base1");
            const { cards } = await res.json();

            // Pick 6 random cards
            const randomCards = Array.from(
                { length: 6 },
                () => cards[Math.floor(Math.random() * cards.length)],
            );

            saveItems(randomCards);
            currentPacks = randomCards;
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    }

    function saveItems(cards) {
        let lsCards = localStorage.getItem("cards");

        if (!lsCards) {
            localStorage.setItem("cards", JSON.stringify(cards));
        } else {
            const parsedCards = JSON.parse(lsCards);
            const newCards = [...parsedCards, ...cards];
            localStorage.setItem("cards", JSON.stringify(newCards));
        }
    }

    $: console.log(currentPacks);
</script>

<div class="flex justify-center mb-6">
    <button
        on:click={getPacks}
        class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
    >
        Open Pack
    </button>
</div>

{#if currentPacks.length}
    <div class="flex justify-center">
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg"
        >
            {#each currentPacks as card}
                <div
                    transition:fade
                    class="bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                    <a href={`/card/${card.id}`}>
                        <img
                            class="w-full h-auto rounded"
                            src={card.image + "/low.png"}
                            alt={card.name}
                        />
                    </a>
                </div>
            {/each}
        </div>
    </div>
{/if}
