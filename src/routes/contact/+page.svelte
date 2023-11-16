<script>
    import { t } from "../../store";
</script>
<section id="contact" class="">
    <div class="max-w-7xl mx-auto flex flex-col justify-start md:justify-center items-center">
        <div class="block w-full h-[150px] md:h-[150px] lg:h-[120px] xl:h-[130px]"></div>
        <h1 class="text-green-400 text-5xl font-bold p-5">{$t('contact_title')}</h1>
        <h4 class="text-white font-semibold text-xl sm:text-4xl mb-0 text-center pr-4 pl-4 mt-8">{$t('contact_any_questions_1')}</h4>
        <h4 class="text-white font-semibold text-xl sm:text-4xl mb-5 text-center p-4">{$t('contact_any_questions_2')}</h4>
        <h4 class="text-white font-semibold text-xl sm:text-2xl text-center mb-5 mt-3">{$t('contact_mail_me')}</h4>
        <a href="mailto:contact@miguelhiguera.dev" class="text-green-400 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl p-2 mb-4 mx-auto">contact@miguelhiguera.dev</a>
        <h4 class="mt-5 mb-3 text-white font-semibold text-lg text-center p-4">{$t('contact_find_me')}</h4>
        <a href="https://github.com/MiguelHigueraDev" target="_blank"><img src='../../lib/assets/images/github.svg' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt="GitHub Logo"></a>
    </div>
</section>