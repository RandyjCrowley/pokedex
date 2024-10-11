<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import "../app.css";
</script>

<main class="min-h-screen bg-primary text-white w-full">
    <NavBar />
    <div class="p-8">
        <slot />
    </div>
</main>
