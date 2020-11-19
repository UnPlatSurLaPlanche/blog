<template>
  <div class="pt-16 mb-40">
    <div class="flex justify-center mt-20 mb-10 space-x-20">
      <div class="w-2/6">
        <SearchRecipe />
      </div>
      <div class="w-1/5">
        <FilterRecipe />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h3 class="text-2xl text-secondary">
        Découvrez nos recettes, par catégorie
      </h3>
      <div class="flex space-x-4 mt-4">
        <div v-for="tag in tags" :key="tag">
          <button
            class="bg-primary bg-opacity-10 text-primary w-full font-semibold py-2 px-3 rounded-lg text-sm focus:outline-none"
          >
            {{ tag }}
          </button>
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
