<script>
    import { t } from "../../store";
    import Card from "../../components/Card.svelte";
</script>
<section id="tech-stack" class="">
    <div class="max-w-7xl mx-auto flex flex-col justify-start md:justify-center items-center">
        <div class="block w-full h-[150px] md:h-[150px] lg:h-[120px] xl:h-[130px]"></div>
        <h1 class="text-green-400 text-5xl font-bold p-5">{$t('technologies_title')}</h1>
        <div class="flex flex-col gap-3 mt-5 overflow-auto">
            <Card techStackTitle="Front-End" techStack="frontend" />
            <Card techStackTitle="Back-End" techStack="backend" />
            <Card techStackTitle={$t('database')} techStack="database" />
            <Card techStackTitle="Extras" techStack="extras" />
        </div>
        <a href="/projects" class="text-center text-white tracking-wide text-xl md:text-2xl lg:text-2xl my-10 font-semibold bg-green-500 hover:bg-green-300 hover:text-black p-6 rounded-lg shadow-xl">{$t('projects')}</a>
    </div>
</section>