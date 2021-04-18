<template>
  <div>
    <transition name="slide-fade">
      <aside-menu v-if="asideConfig" :aside-toggle="asideToggle"></aside-menu>
    </transition>

    <basic-navigation
      class="fixed z-20 print:hidden"
      :aside-toggle="asideToggle"
    />
    <main>
      <Nuxt />
    </main>
    <basic-footer class="z-20 mt-20 print:hidden" />
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
  transform: translateX(100vw);
  opacity: 0;
}
</style>
