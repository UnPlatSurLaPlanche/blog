<template>
  <div class="pt-16 mb-40">
    <div class="flex flex-col items-center justify-center mt-20">
      <h3 class="text-2xl text-secondary">
        Découvrez nos recettes avec la catégorie :
        <span class="font-bold">{{ tag }}</span>
      </h3>
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
  async asyncData({ $content, params }) {
    const tag = params.tag
    const recepies = await $content('recettes')
      .where({ tags: { $contains: tag } })
      .fetch()

    return {
      recepies,
      tag,
    }
  },
}
</script>
