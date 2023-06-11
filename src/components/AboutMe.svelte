<script>
    import { t, locale, locales } from "../store";
    import DeveloperIcon from "./icons/DeveloperIcon.svelte";
</script>
<section id="about-me">
    <div class="max-w-7xl mx-auto flex flex-col justify-start md:justify-center items-center">
        <div class="block w-full h-[150px] md:h-[150px] lg:h-[120px] xl:h-[150px]"></div>
        <h1 class="text-green-400 text-5xl font-bold">{$t('about_me')}</h1>
        <h2 class="p-4 mt-5 md:mt-10 text-2xl text-white"> {$t('about_me_1')}</h2>
        <h2 class="p-4 mt-5 text-2xl text-white">{$t('about_me_2')}</h2>
        <section id="nav-buttons" class="flex flex-col md:flex-row md:gap-7 mt-10">
            <a href="/technologies" class="text-center text-white tracking-wide text-xl md:text-2xl lg:text-2xl mb-10 font-semibold bg-green-500 hover:bg-green-300 hover:text-black p-6 rounded-lg shadow-xl">{$t('technologies')}</a>
            <a href="/contact" class="text-center text-white tracking-wide text-xl md:text-2xl lg:text-2xl mb-10 font-semibold bg-green-500 hover:bg-green-300 hover:text-black p-6 rounded-lg shadow-xl">{$t('contact')}</a>
        </section>
        <DeveloperIcon width={600} height={600}/>
    </div>
</section>