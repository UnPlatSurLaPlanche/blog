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

      <div class="z-10">
        <div class="flex flex-col items-center justify-center w-full px-4">
          <div class="w-full sm:w-2/3">
            <div class="my-16">
              <h1 class="text-4xl sm:text-5xl text-gray-900 text-left">
                {{ page.title }}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="13"
                viewBox="0 0 106 13"
                class="fill-current text-primary"
              >
                <rect
                  id="Rectangle_14"
                  data-name="Rectangle 14"
                  width="106"
                  height="13"
                  rx="6.5"
                />
              </svg>
            </div>
            <img
              class="rounded-2xl h-64 w-full object-cover"
              :src="page.thumbnail"
            />

            <div class="flex my-4 mt-20">
              <h3
                class="bg-primary-light text-primary font-semibold rounded-xl py-2 px-4"
              >
                Ingrédients
              </h3>
            </div>
            <div class="border p-6 border-primary-light">
              <div class="flex flex-wrap w-full sm:w-2/3">
                <div
                  v-for="ingredient in ingredients"
                  :key="ingredient"
                  class="w-full sm:w-1/2 py-1"
                >
                  <div class="flex items-center space-x-4">
                    <div class="w-2 h-2 bg-primary"></div>
                    <p class="text-dark-200">
                      {{ ingredient }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex my-4 mt-12">
              <h3
                class="bg-primary-light text-primary font-semibold rounded-xl py-2 px-4"
              >
                Déroulé
              </h3>
            </div>
            <div class="w-full">
              <p class="whitespace-pre-wrap text-dark-200">{{ page.steps }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(`recettes/${slug}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found :/' })
      })
    return {
      page,
    }
  },
  computed: {
    ingredients() {
      return this.page.ingredients.split('*').filter(function (el) {
        return el
      })
    },
  },
}
</script>
