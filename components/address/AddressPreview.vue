<template>
  <div class="p-8">
    <nuxt-img
      :src="post.thumbnail"
      class="bg-primary object-cover h-48 rounded-xl w-full"
      format="webp"
      quality="80"
    />
    <p class="text-secondary font-semibold text-2xl mt-2">
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
    <p class="text-gray-500 text-sm" v-html="linkify(post.address)"></p>
  </div>
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
    linkify(text) {
      const regex = /(\b(((https?|file))|www.)[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi
      return text.replace(regex, function (url) {
        return '<a class="text-primary" href="' + url + '">' + url + '</a>'
      })
    },
  },
}
</script>
