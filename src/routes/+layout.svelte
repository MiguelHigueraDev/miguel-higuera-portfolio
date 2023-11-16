<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    
    inject({ mode: dev ? 'development' : 'production' });
    import "../app.css"
	import Navbar from "../components/Navbar.svelte";
    import { fly } from "svelte/transition";
    
    export let data
</script>

<div class="app">
    <Navbar />

    <main>
        {#key data.url}
            <div in:fly={{ x: -200, duration: 300, delay: 300}} out:fly={{ x: 200, duration: 300}}>
                <slot />
            </div>
        {/key}

    </main>
</div>

<style lang="postcss">
</style>

