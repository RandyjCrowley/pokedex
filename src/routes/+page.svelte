<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    let recentCards = [];
    onMount(() => {
        const lsCards = localStorage.getItem("cards");
        if (lsCards) {
            recentCards = JSON.parse(lsCards).slice(-6); // Get the last 6 cards
        }
    });
</script>

<div class="container mx-auto p-4">
    <header class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800">Welcome to Pokedex</h1>
        <p class="text-lg text-gray-600">
            Open packs and collect your favorite cards!
        </p>
    </header>

    <div class="flex justify-center mb-8">
        <a
            href="/open"
            class="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
            Open a Pack
        </a>
    </div>

    <!-- Recent Cards Section -->
    <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
            Recently Opened Cards
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#if recentCards.length > 0}
                {#each recentCards as card}
                    <div
                        class="bg-gray-200 p-4 rounded-lg shadow-lg transition:fade"
                    >
                        <a href={`/card/${card.id}`}>
                            <img
                                class="w-full h-auto rounded"
                                src={card.image + "/low.png"}
                                alt={card.name}
                            />
                        </a>
                        <h3 class="mt-2 text-lg text-gray-800 font-bold">
                            {card.name}
                        </h3>
                    </div>
                {/each}
            {:else}
                <p class="text-center text-gray-600">No recent cards opened.</p>
            {/if}
        </div>
    </section>
</div>
