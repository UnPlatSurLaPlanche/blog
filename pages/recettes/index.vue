<template>
  <div class="pt-16 mb-40">
    <div
      class="flex flex-col sm:flex-row justify-center items-center mt-10 mb-10 space-x-0 sm:space-x-20 space-y-4 sm:space-y-0"
    >
      <div class="w-4/5 sm:w-2/6">
        <recipe-search-recipe :filter.sync="filter" />
      </div>
      <!-- <div class="w-4/5 sm:w-1/5"> -->
      <!-- <FilterRecipe /> -->
      <!-- </div> -->
    </div>
    <div class="flex flex-col items-center justify-center">
      <h3 class="text-2xl sm:text-4xl text-secondary text-center mb-10">
        Découvrez nos recettes, par catégorie
      </h3>
      <div class="flex w-full sm:w-4/6 flex-row flex-wrap justify-center">
        <div v-for="tag in tags" :key="tag" class="my-4">
          <nuxt-link
            :to="`/recettes/tag/${tag}`"
            class="bg-primary bg-opacity-10 text-primary w-full ring-0 hover:ring-2 transition duration-300 ease-in-out ring-primary font-semibold py-2 px-3 rounded-lg text-sm focus:outline-none mx-4"
          >
            {{ tag }}
          </nuxt-link>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row items-start w-full sm:w-4/6 mt-12 space-y-4 sm:space-y-4 flex-wrap"
      >
        <RecipePreview
          v-for="post in recepiesFiltered"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recettes',
  async asyncData({ $content }) {
    const recepies = await $content('recettes').sortBy('date', 'desc').fetch()

    const recepiesTags = (
      await $content('recettes').only(['tags']).fetch()
    ).map((item) => {
      return item.tags
    })

    const tags = [...new Set([].concat.apply([], recepiesTags))].sort()

    return {
      recepies,
      tags,
    }
  },
  data: () => ({
    filter: '',
    recepiesFiltered: [],
  }),
  watch: {
    async filter(filter) {
      if (!filter) {
        this.recepiesFiltered = await this.$content('recettes').fetch()
        return
      }

      this.recepiesFiltered = await this.$content('recettes')
        .search('title', filter)
        .fetch()
    },
  },
  async mounted() {
    this.recepiesFiltered = await this.$content('recettes').fetch()
  },
}
</script>
