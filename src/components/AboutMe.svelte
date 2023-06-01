<script>
    import { t, locale, locales } from "../store";
    import DeveloperIcon from "./icons/DeveloperIcon.svelte";
</script>
<section id="about-me" class="relative w-full h-[1000px] md:h-screen mx-auto">
    <div class="absolute inset-0 max-w-7xl mx-auto flex flex-col justify-start md:justify-center items-center">
        <div class="block w-full h-[150px] md:h-[150px] xl:hidden"></div>
        <h1 class="text-green-400 text-5xl font-bold">{$t('about_me')}</h1>
        <h2 class="p-4 mt-5 md:mt-10 text-2xl text-white"> {$t('about_me_1')}</h2>
        <h2 class="p-4 mt-5 text-2xl text-white">{$t('about_me_2')}</h2>
        <DeveloperIcon />
    </div>
</section>