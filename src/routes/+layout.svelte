<script>
    import "../app.css"
	import Navbar from "../components/Navbar.svelte";
    import { fly } from "svelte/transition";
    import { overflow } from "../store";
    
    export let data

    const changeOverflowHidden = () => {
        console.log("a");
    }
    const changeOverflowAuto = () => {
        console.log("b");
    }
</script>

<div class="app">
    <Navbar />

    <main style="overflow: hidden !important;">
        {#key data.url}
            <div in:fly={{ x: -200, duration: 300, delay: 300}} out:fly={{ x: 200, duration: 300}}>
                <slot />
            </div>
        {/key}

    </main>
</div>

<style lang="postcss">
</style>

