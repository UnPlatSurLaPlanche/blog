<template>
  <div class="pt-16 mb-40">
    <div
      class="flex flex-col sm:flex-row justify-center items-center mt-20 mb-10 space-x-0 sm:space-x-20 space-y-4 sm:space-y-0"
    >
      <div class="w-4/5 sm:w-2/6">
        <SearchRecipe />
      </div>
      <div class="w-4/5 sm:w-1/5">
        <FilterRecipe />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h3 class="text-2xl text-secondary">
        Découvrez nos recettes, par catégorie
      </h3>
      <div class="flex space-x-4 mt-4">
        <div v-for="tag in tags" :key="tag">
          <nuxt-link
            :to="`/recettes/tag/${tag}`"
            class="bg-primary bg-opacity-10 text-primary w-full ring-0 hover:ring-2 transition duration-300 ease-in-out ring-primary font-semibold py-2 px-3 rounded-lg text-sm focus:outline-none"
          >
            {{ tag }}
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-wrap w-4/6 mt-10">
        <RecipePreview
          v-for="post in recepies"
          :key="post.id"
          :post="post"
          class="w-1/3 my-6"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recettes',
  async asyncData({ $content }) {
    const recepies = await $content('recettes').fetch()

    const recepiesTags = (
      await $content('recettes').only(['tags']).fetch()
    ).map((item) => {
      return item.tags
    })

    const tags = [...new Set([].concat.apply([], recepiesTags))]

    return {
      recepies,
      tags,
    }
  },
}
</script>
