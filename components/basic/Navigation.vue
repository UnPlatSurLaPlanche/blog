<template>
  <nav class="flex justify-center w-full h-16 top-0">
    <div
      class="flex items-center justify-between sm:justify-around px-6 sm:px-0 w-full sm:w-4/5 shadow-md rounded-none sm:rounded-b-full bg-white"
    >
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <div class="sm:flex justify-center hidden">
        <div class="flex items-center w-auto space-x-12 font-normal">
          <div
            v-for="link in menus"
            :key="link.name"
            class="text-dark-200 hover:text-opacity-50"
          >
            <nuxt-link
              class=""
              active-class="text-primary hover:text-opacity-50 font-semibold"
              :to="link.path"
              :exact="link.path === '/' ? true : false"
            >
              {{ link.name }}
            </nuxt-link>
          </div>
          <div
            class="flex items-center p-2 rounded-full bg-primary bg-opacity-25 hover:bg-opacity-50 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.733 20.728"
              class="text-tertiary fill-current w-4"
            >
              <path
                id="instagram-brands"
                d="M10.294,36.875a5.315,5.315,0,1,0,5.315,5.315A5.306,5.306,0,0,0,10.294,36.875Zm0,8.77a3.455,3.455,0,1,1,3.455-3.455,3.461,3.461,0,0,1-3.455,3.455Zm6.771-8.987a1.24,1.24,0,1,1-1.24-1.24A1.237,1.237,0,0,1,17.065,36.657Zm3.52,1.258a6.134,6.134,0,0,0-1.674-4.343A6.175,6.175,0,0,0,14.568,31.9c-1.711-.1-6.841-.1-8.552,0a6.166,6.166,0,0,0-4.343,1.67A6.155,6.155,0,0,0,0,37.911c-.1,1.711-.1,6.841,0,8.552a6.134,6.134,0,0,0,1.674,4.343,6.183,6.183,0,0,0,4.343,1.674c1.711.1,6.841.1,8.552,0a6.134,6.134,0,0,0,4.343-1.674,6.175,6.175,0,0,0,1.674-4.343c.1-1.711.1-6.836,0-8.548ZM18.374,48.3a3.5,3.5,0,0,1-1.97,1.97c-1.364.541-4.6.416-6.11.416s-4.75.12-6.11-.416a3.5,3.5,0,0,1-1.97-1.97c-.541-1.364-.416-4.6-.416-6.11s-.12-4.75.416-6.11a3.5,3.5,0,0,1,1.97-1.97c1.364-.541,4.6-.416,6.11-.416s4.75-.12,6.11.416a3.5,3.5,0,0,1,1.97,1.97c.541,1.364.416,4.6.416,6.11S18.915,46.939,18.374,48.3Z"
                transform="translate(0.075 -31.825)"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="block sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current text-primary w-8 h-8"
          viewBox="0 0 33.495 28.71"
        >
          <g id="menu" transform="translate(-3 -4)">
            <path
              id="Tracé_102"
              data-name="Tracé 102"
              d="M3,6.392A2.393,2.393,0,0,1,5.392,4H34.1a2.392,2.392,0,0,1,0,4.785H5.392A2.393,2.393,0,0,1,3,6.392Z"
              transform="translate(0 0)"
              fill-rule="evenodd"
            />
            <path
              id="Tracé_103"
              data-name="Tracé 103"
              d="M3,11.392A2.393,2.393,0,0,1,5.392,9H34.1a2.392,2.392,0,0,1,0,4.785H5.392A2.392,2.392,0,0,1,3,11.392Z"
              transform="translate(0 6.962)"
              fill-rule="evenodd"
            />
            <path
              id="Tracé_104"
              data-name="Tracé 104"
              d="M3,16.392A2.392,2.392,0,0,1,5.392,14H34.1a2.392,2.392,0,1,1,0,4.785H5.392A2.392,2.392,0,0,1,3,16.392Z"
              transform="translate(0 13.925)"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
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
      {
        name: 'Blog',
        path: '/blog',
        strict: false,
      },
      {
        name: "Carnet d'adresses",
        path: '/adresses',
        strict: false,
      },
    ],
  }),
}
</script>
