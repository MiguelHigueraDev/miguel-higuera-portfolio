<script>
    //@ts-nocheck
    import { t } from "../store";
    export let projectTitle = "";
    export let projectDescription = "";
    export let projectLiveURL = "";
    export let projectSourceURL = "";
    export let projectImage = "";
    export let technologies = [];
</script>
<div class="rounded overflow-hidden shadow-lg m-5 bg-white">
    <div class="px-6 py-4">
        <div class="flex flex-row mb-3 gap-3 place-items-end">
            {#if projectLiveURL != "" && projectLiveURL != null && projectLiveURL != undefined}
                <a class="bg-green-400 rounded p-2 text-sm shadow-md" href={projectLiveURL} target="_blank">{$t('view_demo')}</a>
            {:else}
                <p class="bg-red-800 rounded p-2 text-sm text-white cursor-not-allowed shadow-md">{$t('no_demo')}</p>
            {/if}
            {#if projectSourceURL != "" && projectSourceURL != null && projectSourceURL != undefined}
                <a class="bg-green-400 rounded p-2 text-sm shadow-md" href={projectSourceURL} target="_blank">{$t('view_source')}</a>
            {:else}
            <p class="bg-red-800 rounded p-2 text-sm text-white cursor-not-allowed shadow-md">{$t('private_source')}</p>
            {/if}
        </div>
        {#if projectTitle == "Participa Los Ángeles"}
            <img class="mx-auto mt-3 w-auto h-auto" src="../lib/assets/projects/ccda/1.png" alt={projectTitle} />
        {:else if projectTitle == "Splade Hardware Store" || projectTitle == "Ferretería Splade"}
            <img class="mx-auto mt-3 w-auto h-auto" src="../lib/assets/projects/ferreteria/3.png" alt={projectTitle} />
        {:else if projectTitle == "Movie List" || projectTitle == "Lista de películas"}
            <img class="mx-auto mt-3 w-auto h-auto" src="../lib/assets/projects/movies/1.png" alt={projectTitle} />
        {/if}
        <h1 class="font-bold text-xl mt-3">{@html projectTitle}</h1>
        <h2 class="font-normal mt-1">{projectDescription}</h2>
        <ol class="list-none flex gap-3 mt-3">
        {#each technologies as tech }
            {#if tech === "Laravel"}
                <li class="bg-red-600 rounded p-2 text-sm text-white font-semibold tracking-wide cursor-default">{tech}</li>
            {:else if tech === "Splade"}
                <li class="bg-pink-600 rounded p-2 text-sm text-white font-semibold tracking-wide cursor-default">{tech}</li>
            {:else if tech === "Node"}
            <li class="bg-green-400 rounded p-2 text-sm text-gray font-semibold tracking-wide cursor-default">{tech}</li>
            {:else if tech === "jQuery"}
                <li class="bg-blue-600 rounded p-2 text-sm text-white font-semibold tracking-wide cursor-default">{tech}</li>
            {:else if tech === "Vue"}
                <li class="bg-green-600 rounded p-2 text-sm text-gray font-semibold tracking-wide cursor-default">{tech}</li>
            {:else if tech === "MongoDB"}
                <li class="bg-green-800 rounded p-2 text-sm text-white font-semibold tracking-wide cursor-default">{tech}</li>
            {:else if tech === "MySQL"}
                <li class="bg-blue-700 rounded p-2 text-sm text-white font-semibold tracking-wide cursor-default">{tech}</li>
            {:else}
                <li class="bg-gray-600 rounded p-2 text-sm text-white font-semibold tracking-wide cursor-default">{tech}</li>
            {/if}
        {/each}
        </ol>

    </div>
</div>