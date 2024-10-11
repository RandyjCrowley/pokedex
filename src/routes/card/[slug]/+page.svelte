<script>
    export let data;
    const { card } = data;
    console.log(card);
</script>

<div class="w-full flex flex-col items-center justify-center space-y-4">
    {#if card.image}
        <img
            class="w-full sm:w-8/12 lg:w-6/12 rounded-md shadow-lg"
            src={`${card.image}/low.png`}
            alt={card.name}
        />
    {/if}

    {#each Object.keys(card) as details, i}
        {#if typeof card[details] !== "object" && !Array.isArray(card[details])}
            <p
                class="border-2 border-red-100 bg-gray-100 text-gray-900 p-2 rounded-lg w-full sm:w-8/12 lg:w-6/12"
            >
                <span class="font-bold">{details}:</span>
                {card[details]}
            </p>
        {/if}
    {/each}

    {#if card.set}
        <div
            class="border-2 border-blue-100 bg-gray-100 text-gray-900 p-4 rounded-lg w-full sm:w-8/12 lg:w-6/12"
        >
            <h3 class="font-bold text-lg">Set Details</h3>
            <p>Set Name: {card.set.name}</p>
        </div>
    {/if}

    {#if card.variants}
        <div
            class="border-2 border-green-100 bg-gray-100 text-gray-900 p-4 rounded-lg w-full sm:w-8/12 lg:w-6/12"
        >
            <h3 class="font-bold text-lg">Variants</h3>
            <p>First Edition: {card.variants.firstEdition ? "Yes" : "No"}</p>
            <p>Holo: {card.variants.holo ? "Yes" : "No"}</p>
            <p>Normal: {card.variants.normal ? "Yes" : "No"}</p>
            <p>Reverse: {card.variants.reverse ? "Yes" : "No"}</p>
        </div>
    {/if}

    {#if card.attacks && card.attacks.length > 0}
        <div
            class="border-2 border-yellow-100 bg-gray-100 text-gray-900 p-4 rounded-lg w-full sm:w-8/12 lg:w-6/12"
        >
            <h3 class="font-bold text-lg">Attacks</h3>
            {#each card.attacks as attack}
                <p>Attack: {attack.name}</p>
                <p>Cost: {attack.cost.join(", ")}</p>
                <p>Damage: {attack.damage}</p>
            {/each}
        </div>
    {/if}

    {#if card.weaknesses && card.weaknesses.length > 0}
        <div
            class="border-2 border-purple-100 bg-gray-100 text-gray-900 p-4 rounded-lg w-full sm:w-8/12 lg:w-6/12"
        >
            <h3 class="font-bold text-lg">Weaknesses</h3>
            {#each card.weaknesses as weakness}
                <p>{weakness.type}: {weakness.value}</p>
            {/each}
        </div>
    {/if}

    {#if card.legal}
        <div
            class="border-2 border-gray-100 bg-gray-100 text-gray-900 p-4 rounded-lg w-full sm:w-8/12 lg:w-6/12"
        >
            <h3 class="font-bold text-lg">Legal Status</h3>
            <p>Standard: {card.legal.standard ? "Legal" : "Not Legal"}</p>
            <p>Expanded: {card.legal.expanded ? "Legal" : "Not Legal"}</p>
        </div>
    {/if}

    {#if card.updated}
        <div
            class="border-2 border-gray-100 bg-gray-100 text-gray-900 p-2 rounded-lg w-full sm:w-8/12 lg:w-6/12"
        >
            <p>
                <span class="font-bold">Last Updated:</span>
                {new Date(card.updated).toLocaleDateString()}
            </p>
        </div>
    {/if}
</div>
