<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let cards = [];
    let filteredCards = [];
    let searchQuery = "";
    let loading = true;

    function deleteCards() {
        localStorage.removeItem("cards");
        cards = [];
        filteredCards = [];
    }

    onMount(() => {
        const lsCards = localStorage.getItem("cards");
        console.log(lsCards);
        if (lsCards) {
            cards = JSON.parse(lsCards);
            filteredCards = [...cards];
        }
        loading = false;
    });

    $: filteredCards = cards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    $: console.log(cards);
</script>

<div class="container mx-auto p-4">
    {#if loading}
        <div class="flex justify-center mt-4">
            <p class="text-gray-600 font-bold">Loading cards...</p>
        </div>
    {:else if cards.length > 0}
        <div class="flex justify-center mb-4">
            <input
                type="text"
                placeholder="Search by card name..."
                bind:value={searchQuery}
                class="border p-2 rounded-md w-full max-w-lg text-black"
            />
        </div>

        <div class="flex justify-center mb-4">
            <button
                on:click={deleteCards}
                class="border-2 p-2 bg-gray-200 rounded-md text-black font-bold hover:bg-gray-300 transition duration-200"
            >
                Delete Cards
            </button>
        </div>

        <div class="flex justify-center">
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg"
            >
                {#each filteredCards as card}
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
                        <p class="text-center text-white font-bold mt-2">
                            {card.name}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    {:else}
        <div class="flex justify-center mb-4">
            <a
                href="/open"
                class="border-2 p-2 bg-gray-200 rounded-md text-black font-bold hover:bg-gray-300 transition duration-200"
            >
                Go Gamble
            </a>
        </div>
        <p class="text-center text-gray-600 font-bold">NO CARDS GO GAMBLE</p>
    {/if}
</div>
