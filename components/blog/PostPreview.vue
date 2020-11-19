<template>
  <div class="flex w-full px-4 bg-white">
    <div class="w-3/5">
      <p class="text-secondary text-3xl font-semibold mt-2">
        {{ post.title }}
      </p>
      <div class="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 106 13"
          class="fill-current text-primary w-16"
        >
          <rect
            id="Rectangle_14"
            data-name="Rectangle 14"
            width="106"
            height="13"
            rx="6.5"
          />
        </svg>
        <p class="text-primary text-sm font-semibold">
          {{ post.date }}
        </p>
      </div>
      <div class="w-10/12">
        <p class="my-3 text-dark-200">
          {{ post.summary }}
        </p>
        <div class="flex justify-end">
          <nuxt-link
            :to="`blog/${post.slug}`"
            class="flex items-center cursor-pointer bg-primary hover:bg-opacity-75 transition duration-300 ease-in-out text-white rounded-lg shadow-md py-3 px-6"
            >Lire la suite
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
              ></path></svg
          ></nuxt-link>
        </div>
      </div>
    </div>
    <div class="w-2/5">
      <img
        :src="post.thumbnail"
        alt=""
        class="bg-primary object-cover h-56 rounded-xl"
      />
    </div>
  </div>
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
