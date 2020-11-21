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
      <div class="flex justify-center w-3/4 sm:w-1/3 my-10">
        <LogoCard />
      </div>
    </div>
    <section class="flex justify-center w-full mt-1 sm:mt-10">
      <div class="w-full sm:w-3/4">
        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :post="post"
        ></PostPreview>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData({ $content }) {
    const posts = await $content('articles').fetch()

    const postsTags = (await $content('articles').only(['tags']).fetch()).map(
      (item) => {
        return item.tags
      }
    )

    const tags = [...new Set([].concat.apply([], postsTags))]

    return {
      posts,
      tags,
    }
  },
}
</script>
