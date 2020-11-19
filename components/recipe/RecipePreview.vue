<template>
  <nuxt-link
    :to="`recettes/${post.slug}`"
    class="w-full sm:w-1/3 px-4 transform scale-100 hover:opacity-75 opacity-100 sm:hover:opacity-100 sm:hover:scale-110 transition duration-300 ease-in-out"
  >
    <img
      :src="post.thumbnail"
      alt=""
      class="bg-primary object-cover h-40 rounded-xl w-full"
    />
    <p class="text-secondary font-semibold mt-2">{{ post.title }}</p>
    <div class="flex items-center space-x-2">
      <svg
        id="Icon_ionic-md-time"
        data-name="Icon ionic-md-time"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-primary w-4 h-4"
        viewBox="0 0 20.961 20.961"
      >
        <path
          id="Tracé_97"
          data-name="Tracé 97"
          d="M13.845,3.375a10.48,10.48,0,1,0,10.491,10.48A10.477,10.477,0,0,0,13.845,3.375Zm.01,18.865a8.384,8.384,0,1,1,8.384-8.384A8.384,8.384,0,0,1,13.855,22.24Z"
          transform="translate(-3.375 -3.375)"
        />
        <path
          id="Tracé_98"
          data-name="Tracé 98"
          d="M18.11,10.688H16.538v6.288l5.5,3.3.786-1.29-4.716-2.8Z"
          transform="translate(-7.105 -5.447)"
        />
      </svg>

      <p class="text-primary">{{ post.times }} min</p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
