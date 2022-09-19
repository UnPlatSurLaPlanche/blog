<template>
  <div class="w-full">
    <div class="relative flex w-full justify-center pt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-primary absolute w-3/4 sm:w-5/12 top-0 left-0"
        viewBox="0 0 865.557 850.893"
      >
        <path
          id="Union_2"
          data-name="Union 2"
          d="M-4638.682-566.916l-5.319.844,5.319-.844v-839.538h784.907l64.512,704.784,10.819-1.716-10.819,1.716,8.737,95.454-858.157,50.656Z"
          transform="translate(4644.001 1406.454)"
          opacity="0.1"
        />
      </svg>
      <div
        class="flex flex-col sm:flex-row items-center w-full sm:w-4/6 mt-12 z-10"
      >
        <div class="w-full sm:w-1/2 px-6 sm:px-0 mb-16 sm:mb-0">
          <h2 class="text-primary text-4xl sm:text-5xl 2xl:text-7-6xl">
            Des plats savoureux
          </h2>
          <h3 class="text-secondary text-2xl sm:text-3xl 2xl:text-4xl">
            Et facile à réaliser
          </h3>
          <p class="text-gray-500 mt-8 w-full sm:w-3/5 text-sm">
            Retrouvez mes recettes sur instagram:
            <a
              href="https://www.instagram.com/unplatsurlaplanche/"
              class="animate-pulse"
              >@unplatsurlaplanche</a
            >
          </p>

          <div class="flex w-full justify-center sm:justify-start">
            <nuxt-link
              to="/recettes"
              class="flex items-center cursor-pointer bg-primary ring-0 hover:ring-4 ring-opacity-50 ring-primary transition duration-300 ease-in-out text-white rounded-lg shadow-md py-3 px-6 mt-8"
            >
              Découvrez nos recettes
              <svg
                class="w-6 h-6 transform -rotate-90"
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
        <div class="w-full sm:w-1/2 px-6">
          <HeaderImages />
        </div>
      </div>
    </div>
    <div class="relative flex w-full justify-center my-12">
      <div
        class="flex flex-col sm:flex-row items-start w-full sm:w-4/6 mt-12 space-y-4 sm:space-y-0"
      >
        <RecipePreview
          v-for="recette in recettes"
          :key="recette.id"
          :post="recette"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  async asyncData({ $content }) {
    const recettes = (
      await $content('recettes').sortBy('date', 'desc').fetch()
    ).slice(0, 3)
    return {
      recettes,
    }
  },
}
</script>
