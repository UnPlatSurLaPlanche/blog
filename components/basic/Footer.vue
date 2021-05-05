<template>
  <footer class="w-full bottom-0">
    <section class="flex justify-center w-full h-40 bg-gray-800">
      <div class="flex justify-around w-4/5 mt-6">
        <div class="hidden sm:block w-1/5">
          <LogoBlackWhite />
          <!-- <p class="mt-4 text-white text-xs">
            Bien manger c'est le début du bonheur
          </p> -->
        </div>
        <div class="w-1/2 sm:w-1/5">
          <h3 class="text-primary font-semibold text-lg">Navigation</h3>
          <div
            v-for="link in menus"
            :key="link.name"
            class="text-sm text-gray-500 hover:text-opacity-50 transition duration-300 ease-in-out"
          >
            <nuxt-link
              class=""
              active-class="text-gray-200 hover:text-opacity-50 transition duration-300 ease-in-out"
              :to="link.path"
              :exact="link.path === '/' ? true : false"
            >
              {{ link.name }}
            </nuxt-link>
          </div>
        </div>
        <div class="flex flex-col items-center w-1/2 sm:w-1/5">
          <h3 class="text-primary font-semibold text-lg">Suivez-nous !</h3>
          <a
            href="https://www.instagram.com/unplatsurlaplanche/"
            class="flex items-center w-10 h-10 p-3 mt-2 rounded-full bg-gray-900 bg-opacity-25 hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.733 20.728"
              class="text-white fill-current w-5 h-5"
            >
              <path
                id="instagram-brands"
                d="M10.294,36.875a5.315,5.315,0,1,0,5.315,5.315A5.306,5.306,0,0,0,10.294,36.875Zm0,8.77a3.455,3.455,0,1,1,3.455-3.455,3.461,3.461,0,0,1-3.455,3.455Zm6.771-8.987a1.24,1.24,0,1,1-1.24-1.24A1.237,1.237,0,0,1,17.065,36.657Zm3.52,1.258a6.134,6.134,0,0,0-1.674-4.343A6.175,6.175,0,0,0,14.568,31.9c-1.711-.1-6.841-.1-8.552,0a6.166,6.166,0,0,0-4.343,1.67A6.155,6.155,0,0,0,0,37.911c-.1,1.711-.1,6.841,0,8.552a6.134,6.134,0,0,0,1.674,4.343,6.183,6.183,0,0,0,4.343,1.674c1.711.1,6.841.1,8.552,0a6.134,6.134,0,0,0,4.343-1.674,6.175,6.175,0,0,0,1.674-4.343c.1-1.711.1-6.836,0-8.548ZM18.374,48.3a3.5,3.5,0,0,1-1.97,1.97c-1.364.541-4.6.416-6.11.416s-4.75.12-6.11-.416a3.5,3.5,0,0,1-1.97-1.97c-.541-1.364-.416-4.6-.416-6.11s-.12-4.75.416-6.11a3.5,3.5,0,0,1,1.97-1.97c1.364-.541,4.6-.416,6.11-.416s4.75-.12,6.11.416a3.5,3.5,0,0,1,1.97,1.97c.541,1.364.416,4.6.416,6.11S18.915,46.939,18.374,48.3Z"
                transform="translate(0.075 -31.825)"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
    <div class="flex justify-center items-center w-full bg-gray-900 h-8">
      <p class="text-white text-xs text-gray-400">
        <!-- Mentions légales - Politique de confidentialité -->
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data: () => ({
    menus: [
      {
        name: 'Accueil',
        path: '/',
        strict: true,
      },
      {
        name: 'Recettes',
        path: '/recettes',
        strict: false,
      },
      // {
      //   name: 'Blog',
      //   path: '/blog',
      //   strict: false,
      // },
      {
        name: "Carnet d'adresses",
        path: '/adresses',
        strict: false,
      },
    ],
  }),
}
</script>
