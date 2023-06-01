<script>
    import { t, locale, locales } from "../../store";
    import Card from "../../components/Card.svelte";
</script>
<section id="about-me" class="">
    <div class="max-w-7xl mx-auto flex flex-col justify-start md:justify-center items-center">
        <div class="block w-full h-[150px] md:h-[150px] lg:h-[120px] xl:h-[130px]"></div>
        <h1 class="text-green-400 text-5xl font-bold p-5">{$t('technologies_title')}</h1>
        <div class="flex flex-col gap-3 mt-5 overflow-auto">
            <Card techStackTitle="Front-End" techStack="frontend" />
            <Card techStackTitle="Back-End" techStack="backend" />
            <Card techStackTitle={$t('database')} techStack="database"/>
        </div>
    </div>
</section>