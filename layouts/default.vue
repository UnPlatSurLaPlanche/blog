<template>
  <div>
    <transition name="slide-fade">
      <aside-menu v-if="asideConfig" :aside-toggle="asideToggle"></aside-menu>
    </transition>

    <Navigation class="fixed z-20" :aside-toggle="asideToggle" />
    <main>
      <Nuxt />
    </main>
    <Footer class="z-20 mt-20" />
  </div>
</template>
<script>
export default {
  data: () => ({
    asideConfig: false,
  }),
  methods: {
    asideToggle() {
      this.asideConfig = !this.asideConfig
    },
  },
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>
