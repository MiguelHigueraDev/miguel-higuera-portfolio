<script>
    import { t } from "../../store";
    import ProjectCard from "../../components/ProjectCard.svelte";
</script>
<section id="about-me" class="">
    <div class="max-w-7xl mx-auto">
        <div class="block w-full h-[150px] md:h-[150px] lg:h-[120px] xl:h-[130px]"></div>
        <h1 class="text-green-400 text-center text-5xl font-bold p-5">{$t('projects_title')}</h1>
        <h2 class="text-white text-center text-2xl font-semibold p-5">{$t('projects_subtitle')}</h2>
        <div class="block md:grid md:grid-cols-2 gap-3 mt-5">
            <ProjectCard projectTitle={$t('ccda_title')}
            projectDescription={$t('ccda_description')}
            projectLiveURL=""
            projectSourceURL=""
            projectImage="../lib/assets/projects/ccda/1.png"
            technologies={['Laravel', 'jQuery', 'MySQL']} />
            <ProjectCard projectTitle={$t('moodlist_title')}
            projectDescription={$t('moodlist_description')}
            projectLiveURL="https://moodlist.vercel.app/"
            projectSourceURL="https://github.com/MiguelHigueraDev/moodlist/"
            technologies={['Svelte', 'SvelteKit']}
            />
            <ProjectCard projectTitle={$t('dygingenierias_title')}
            projectDescription={$t('dygingenierias_description')}
            projectLiveURL="https://dyg-ingenierias.vercel.app"
            projectSourceURL=""
            projectImage="../lib/assets/projects/dygingenierias/1.png"
            technologies={['React', 'Next.JS']} />
            <ProjectCard projectTitle={$t('ferreteria_title')}
            projectDescription={$t('ferreteria_description')}
            projectLiveURL=""
            projectSourceURL=""
            projectImage="../lib/assets/projects/ferreteria/3.png"
            technologies={['Laravel', 'Splade', 'Vue', 'MySQL']} />
            <!--<ProjectCard projectTitle={$t('movies_title')}
            projectDescription={$t('movies_description')}
            projectLiveURL="https://randommovie.miguelhiguera1.repl.co/"
            projectSourceURL="https://replit.com/@MiguelHiguera1/RandomMovie"
            projectImage="../lib/assets/projects/movies/1.png"
            technologies={['Node', 'Express', 'jQuery', 'MongoDB',]} />-->
            
        </div>
    </div>
</section>