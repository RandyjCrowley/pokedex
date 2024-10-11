<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import "../app.css";
</script>

<main class="min-h-screen bg-gray-300 text-white">
    <NavBar />
    <div class="container mx-auto p-8">
        <slot />
    </div>
</main>
