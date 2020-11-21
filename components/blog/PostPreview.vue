<template>
  <nuxt-link :to="`/blog/${post.slug}`" class="flex w-full px-4 bg-white">
    <div class="w-full sm:w-3/5">
      <p class="text-secondary text-xl sm:text-3xl font-semibold mt-2">
        {{ post.title }}
      </p>
      <div class="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 106 13"
          class="fill-current text-primary w-12 sm:w-16"
        >
          <rect
            id="Rectangle_14"
            data-name="Rectangle 14"
            width="106"
            height="13"
            rx="6.5"
          />
        </svg>
        <p class="text-primary text-xs sm:text-sm font-semibold">
          {{ formatedDate(post.date) }}
        </p>
      </div>
      <div class="w-full sm:w-10/12">
        <div class="flex items-center sm:block">
          <p
            class="my-3 text-gray-500 text-xs sm:text-base w-3/5 sm:w-full pr-4 sm:pr-0"
          >
            {{ post.summary }}
          </p>
          <div class="sm:hidden block w-2/5">
            <img
              :src="post.thumbnail"
              alt=""
              class="bg-primary object-cover w-40 h-40 rounded-xl"
            />
          </div>
        </div>
        <div class="sm:flex justify-end hidden">
          <nuxt-link
            :to="`/blog/${post.slug}`"
            class="flex items-center cursor-pointer bg-primary ring-0 hover:ring-4 ring-opacity-50 ring-primary transition duration-300 ease-in-out text-white rounded-lg shadow-md py-3 px-6"
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
    <div class="hidden sm:block sm:w-2/5">
      <img
        :src="post.thumbnail"
        alt=""
        class="bg-primary object-cover h-56 rounded-xl"
      />
    </div>
  </nuxt-link>
</template>
<script>
import { format } from 'date-fns'

export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    formatedDate(date) {
      return format(new Date(date), 'dd/MM/yyyy')
    },
  },
}
</script>
