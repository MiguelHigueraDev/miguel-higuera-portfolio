<script>
    import { t, locale, locales } from "../store";
    import Typewriter from 'svelte-typewriter';
</script>
<div class="relative w-full h-screen mx-auto">
    <div class="absolute inset-0 max-w-7xl mx-auto flex flex-col justify-start md:justify-center items-center">
        <div class="block w-full h-[400px] md:h-[150px] lg:h-[120px] xl:h-[130px]"></div>
        <h1 class="text-center text-4xl md:text-7xl text-white font-bold mb-5 drop-shadow-lg">{$t("web_developer")}</h1>
        <div class="flex flex-row gap-3 p-4">
            <h2 class="text-center text-4xl text-white font-bold mb-5">></h2>
            <Typewriter mode="loop" cursor={false} interval={100} unwriteInterval={50}>
                <h1 class="text-center text-5xl text-green-400 font-bold drop-shadow-lg">{$t('web_apps')}</h1>
                <h1 class="text-center text-5xl text-green-400 font-bold drop-shadow-lg">{$t('websites')}</h1>
                <h1 class="text-center text-5xl text-green-400 font-bold drop-shadow-lg">{$t('blogs')}</h1>
                <h1 class="text-center text-5xl text-green-400 font-bold drop-shadow-lg">{$t('erp')}</h1>
            </Typewriter>
        </div>

    </div>
</div>