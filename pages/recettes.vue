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
      <h3 class="text-2xl">Découvrez nos recettes, par catégorie</h3>
      <div class="flex flex-wrap w-4/6 mt-10">
        <RecipePreview
          v-for="post in posts"
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
  data: () => ({
    posts: [
      {
        id: 0,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image1.jpg'),
      },
      {
        id: 1,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image2.jpg'),
      },
      {
        id: 2,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image3.jpg'),
      },
      {
        id: 3,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image1.jpg'),
      },
      {
        id: 4,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image2.jpg'),
      },
      {
        id: 5,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image3.jpg'),
      },
      {
        id: 6,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image1.jpg'),
      },
      {
        id: 7,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image2.jpg'),
      },
      {
        id: 8,
        name: 'Printemps 2019',
        likes: 323,
        times: 30,
        cover: require('~/assets/img/image3.jpg'),
      },
    ],
  }),
}
</script>
