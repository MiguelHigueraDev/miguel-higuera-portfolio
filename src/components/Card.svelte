<script>
    export let techStackTitle = "";
    export let techStack = "";

    let frontend = ['JavaScript', 'jQuery', 'Vue', 'React', 'Svelte']
    let backend = ['PHP', 'Laravel', 'Node', 'Express']
    let database = ['MySQL', 'MongoDB']

</script>
<div class="w-2xl rounded overflow-hidden shadow-lg m-5 bg-white">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-3">{techStackTitle}</div>
        <div class="flex flex-row gap-5">
            {#if techStack == "frontend"}
                <div>
                    <img src='../lib/assets/images/javascript.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={frontend[0]}>
                    <h3 class="text-center font-semibold mb-3">{frontend[0]}</h3>
                </div>
                <div>
                    <img src='../lib/assets/images/jquery.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={frontend[1]}>
                    <h3 class="text-center font-semibold mb-3">{frontend[1]}</h3>
                </div>
                <div>
                    <img src='../lib/assets/images/vue.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={frontend[2]}>
                    <h3 class="text-center font-semibold mb-3">{frontend[2]}</h3>
                </div>
                <div>
                    <img src='../lib/assets/images/react.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={frontend[3]}>
                    <h3 class="text-center font-semibold mb-3">{frontend[3]}</h3>
                </div>
                <div>
                    <img src='../lib/assets/images/svelte.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={frontend[4]}>
                    <h3 class="text-center font-semibold mb-3">{frontend[4]}</h3>
                </div>
            {/if}
        </div>

        <div class="flex flex-row gap-3 items-center justify-center">
            {#if techStack == "backend"}
                <div>
                    <img src='../lib/assets/images/php.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={backend[0]}>
                    <h3 class="text-center font-semibold mb-3">{backend[0]}</h3>
                </div>
                <div>
                    <img src='../lib/assets/images/laravel.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={backend[1]}>
                    <h3 class="text-center font-semibold mb-3">{backend[1]}</h3>
                </div>
                <div>
                    <img src='../lib/assets/images/node.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={backend[2]}>
                    <h3 class="text-center font-semibold mb-3">{backend[2]}</h3>
                </div>
                <div>
                    <img src='../lib/assets/images/express.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={backend[3]}>
                    <h3 class="text-center font-semibold mb-3">{backend[3]}</h3>
                </div>
            {/if}
        </div>
        
        <div class="flex flex-row gap-3 items-center justify-center">
            {#if techStack == "database"}
                <div>
                    <img src='../lib/assets/images/mysql.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={database[0]}>
                    <h3 class="text-center font-semibold mb-3">{database[0]}</h3>
                </div>
                <div>
                    <img src='../lib/assets/images/mongodb.png' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt={database[1]}>
                    <h3 class="text-center font-semibold mb-3">{database[1]}</h3>
                </div>
            {/if}
        </div>

    </div>
</div>