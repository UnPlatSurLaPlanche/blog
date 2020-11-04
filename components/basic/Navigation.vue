<template>
  <nav class="flex justify-center w-full h-16 top-0">
    <div class="flex items-center w-4/5 shadow-md rounded-b-full bg-white">
      <div class="flex justify-center">
        <Logo />
      </div>
      <div class="flex justify-center w-4/5">
        <div class="flex items-center w-auto space-x-12 font-normal">
          <nuxt-link
            to=""
            class="text-primary hover:text-opacity-50 font-semibold"
            >Accueil</nuxt-link
          >
          <nuxt-link to="" class="text-dark-200 hover:text-opacity-50"
            >Recettes</nuxt-link
          >
          <nuxt-link to="" class="text-dark-200 hover:text-opacity-50"
            >Blog</nuxt-link
          >
          <nuxt-link to="" class="text-dark-200 hover:text-opacity-50"
            >Carnet d'adresses</nuxt-link
          >
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
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
}
</script>
