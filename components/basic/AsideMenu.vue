<template>
  <section class="flex justify-end right-0 fixed shadow-md z-50 w-full">
    <aside class="w-10/12 h-screen bg-gray-800 shadow-md">
      <div class="flex justify-between p-3">
        <LogoBlackWhite />

        <div class="block sm:hidden" @click="asideToggle()">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            class="w-10 h-10 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div
        v-for="link in menus"
        :key="link.name"
        class="text-gray-400 font-semibold px-6 mt-10 space-y-8 text-xl hover:text-opacity-50 transition duration-300 ease-in-out"
      >
        <nuxt-link
          class="whitespace-no-wrap"
          active-class="text-primary font-bold hover:text-opacity-50  transition duration-300 ease-in-out"
          :to="link.path"
          :exact="link.path === '/' ? true : false"
          @click.native="handleRouteChange"
        >
          {{ link.name }}
        </nuxt-link>
      </div>
    </aside>
    <div
      class="w-2/12 h-screen bg-gray-800 opacity-50 top-0 left-0 absolute"
    ></div>
  </section>
</template>

<script>
export default {
  props: {
    asideToggle: {
      type: Function,
      default: null,
    },
  },
  data: () => ({
    menus: [
      {
        name: 'Accueil',
        path: '/',
        strict: true,
      },
      {
        name: 'Recettes',
        path: '/recettes',
        strict: false,
      },
      {
        name: 'Blog',
        path: '/blog',
        strict: false,
      },
      {
        name: "Carnet d'adresses",
        path: '/adresses',
        strict: false,
        disabled: true,
      },
    ],
  }),
  methods: {
    handleRouteChange() {
      this.asideToggle()
    },
  },
}
</script>

<style></style>
