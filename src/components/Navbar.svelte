<script>
    import { t, locale, locales } from "../store";
    let showMenu = false;
  
    function toggleNavbar() {
      showMenu = !showMenu;
    }

    function changeLanguage() {
        if($locale == "es") {
            $locale = "en";
        } else {
            $locale = "es";
        }
        showMenu = false;
    }

    function hideNavbar() {
      showMenu = false;
    }
  </script>
  
  <div>
    <div>
      <nav
        class="px-6 py-8 mx-auto md:flex md:justify-between md:items-center fixed left-0 right-0 z-10 bg-slate-950"
      >
        <div class="flex mx-auto items-center justify-between">
          <a
            class="text-2xl font-bold text-green-400 md:text-2xl hover:text-white"
            href="/" on:click={hideNavbar}
            >Miguel Higuera.
          </a>

          <div on:click={toggleNavbar} class="flex md:hidden">
            <button type="button" class="text-white hover:text-green-400 focus:outline-none focus:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
  
        <div
          class="flex-col mx-auto mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <button class="text-white hover:text-green-400 font-semibold mr-3" on:click={changeLanguage}>{$t('current_language')}</button>
          <a class="text-white hover:text-green-400 font-semibold" href="/about-me" on:click={toggleNavbar}>{$t('about_me')}</a>
          <a class="text-white hover:text-green-400 font-semibold" href="/technologies" on:click={toggleNavbar}>{$t('technologies')}</a>
          <a class="text-white hover:text-green-400 font-semibold" href="/projects" on:click={toggleNavbar}>{$t('projects')}</a>
          <a class="text-white hover:text-green-400 font-semibold" href="/contact" on:click={toggleNavbar}>{$t('contact')}</a>
        </div>
      </nav>
    </div>
  </div>
  