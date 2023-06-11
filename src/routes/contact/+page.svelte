<script>
    import { t } from "../../store";
</script>
<section id="contact" class="">
    <div class="max-w-7xl mx-auto flex flex-col justify-start md:justify-center items-center">
        <div class="block w-full h-[150px] md:h-[150px] lg:h-[120px] xl:h-[130px]"></div>
        <h1 class="text-green-400 text-5xl font-bold p-5">{$t('contact_title')}</h1>
        <h4 class="text-white font-semibold text-xl sm:text-2xl mb-5 text-center p-4">{$t('contact_any_questions')}</h4>
        <h4 class="text-white font-semibold text-xl sm:text-2xl text-center mb-5 mt-3">{$t('contact_mail_me')}</h4>
        <a href="mailto:miguelhiguera.dev@gmail.com" class="text-green-400 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl p-2 mb-4 mx-auto">miguelhiguera.dev@gmail.com</a>
        <h4 class="text-white font-semibold text-xl sm:text-2xl text-center mb-5 mt-3">{$t('contact_call_me')}</h4>
        <a href="tel:+56967660816" class="text-green-400 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl p-2 mb-4 mx-auto">+569 67660816</a>
        <h4 class="mt-5 mb-3 text-white font-semibold text-lg text-center p-4">{$t('contact_find_me')}</h4>
        <a href="https://github.com/MiguelHigueraDev" target="_blank"><img src='../../lib/assets/images/github.svg' class="w-20 h-20 sm:w-40 sm:h-40 object-contain" alt="GitHub Logo"></a>
    </div>
</section>