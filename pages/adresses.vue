<template>
  <div class="w-full">
    <div class="relative flex w-full justify-center pt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-primary absolute w-3/4 sm:w-5/12 top-0 right-0"
        viewBox="0 0 977.556 834.44"
      >
        <path
          id="Union_1"
          data-name="Union 1"
          d="M-4638-458.639l-6.006.972,6.006-.972V-1280h969.2v664.548l2.351-.38-2.351.38v111.545L-4638-445.56Z"
          transform="translate(4644.001 1280)"
          opacity="0.1"
        />
      </svg>

      <div class="flex justify-center z-10 mt-12">
        <div class="w-1/3">
          <div>
            <h2 class="text-primary text-4xl sm:text-5xl 2xl:text-7-6xl">
              Carnet d'adresses
            </h2>
            <h3 class="text-secondary text-2xl sm:text-3xl 2xl:text-4xl">
              À partager sans modération
            </h3>
            <p class="text-gray-500 mt-8 w-full sm:w-3/5 text-sm">
              Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
              vieux whisky au juge blond qui fume sur son île intérieure, à côté
              de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui
              lui permet.
            </p>

            <div class="flex w-full justify-center sm:justify-start">
              <nuxt-link
                to="/recettes"
                class="flex items-center cursor-pointer bg-primary ring-0 hover:ring-4 ring-opacity-50 ring-primary transition duration-300 ease-in-out text-white rounded-lg shadow-md py-3 px-6 mt-8"
              >
                Découvrez nos adresses
                <svg
                  class="w-6 h-6 transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="w-1/3">
          <LogoCard />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mt-20">
      <div class="flex flex-wrap w-full sm:w-4/6 mt-10">
        <div v-for="post in addresses" :key="post" class="w-1/3">
          <AddressPreview :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Adresses',
  async asyncData({ $content }) {
    const addresses = await $content('adresses').fetch()

    return {
      addresses,
    }
  },
}
</script>
