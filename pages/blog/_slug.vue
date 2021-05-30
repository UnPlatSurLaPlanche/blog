<template>
  <div class="w-full">
    <div class="relative flex w-full justify-center pt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-primary absolute w-3/4 sm:w-5/12 top-0 right-0"
        viewBox="0 0 977.556 834.44"
      >
        <path
          id="Union_1"
          data-name="Union 1"
          d="M-4638-458.639l-6.006.972,6.006-.972V-1280h969.2v664.548l2.351-.38-2.351.38v111.545L-4638-445.56Z"
          transform="translate(4644.001 1280)"
          opacity="0.1"
        />
      </svg>

      <div class="z-10">
        <div class="flex flex-col items-center justify-center w-full px-4">
          <div class="w-full sm:w-2/3">
            <div class="my-16">
              <h1
                class="text-4xl sm:text-6xl font-extrabold text-secondary text-left"
              >
                {{ page.title }}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="13"
                viewBox="0 0 106 13"
                class="fill-current text-primary mt-2"
              >
                <rect
                  id="Rectangle_14"
                  data-name="Rectangle 14"
                  width="106"
                  height="13"
                  rx="6.5"
                />
              </svg>
            </div>
            <div class="relative">
              <nuxt-img
                class="rounded-2xl w-full object-cover"
                :src="page.thumbnail"
                format="webp"
                quality="80"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 175.553 217.476"
                class="hidden sm:block w-32 h-32 fill-current text-primary absolute right-0 bottom-0 -mr-20 -mb-20"
              >
                <g
                  id="Groupe_183"
                  data-name="Groupe 183"
                  transform="translate(-1504.639 -831.776)"
                >
                  <path
                    id="Tracé_46"
                    data-name="Tracé 46"
                    d="M61.194,10.667a11.708,11.708,0,0,1-2.657,8.591L20.791,64.717A11.751,11.751,0,0,1,2.71,49.7L40.457,4.243a11.748,11.748,0,0,1,20.738,6.423Z"
                    transform="matrix(-0.777, -0.629, 0.629, -0.777, 1636.793, 923.911)"
                  />
                  <path
                    id="Tracé_47"
                    data-name="Tracé 47"
                    d="M68.908,48.413A11.752,11.752,0,0,1,49.7,58.537L4.244,20.791A11.75,11.75,0,1,1,19.254,2.71L64.714,40.457A11.723,11.723,0,0,1,68.908,48.413Z"
                    transform="matrix(-0.777, -0.629, 0.629, -0.777, 1558.229, 1049.253)"
                  />
                  <path
                    id="Tracé_48"
                    data-name="Tracé 48"
                    d="M84.843,10.664A11.75,11.75,0,0,1,74.229,23.45l-61.4,5.691a11.75,11.75,0,0,1-2.168-23.4L72.057.051A11.75,11.75,0,0,1,84.843,10.664Z"
                    transform="matrix(-0.777, -0.629, 0.629, -0.777, 1648.923, 1000.481)"
                  />
                </g>
              </svg>
            </div>
            <div class="flex justify-center w-full mt-20">
              <nuxt-content
                class="prose prose-lg text-gray-500"
                :document="page"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(`articles/${slug}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found :/' })
      })
    return {
      page,
    }
  },
}
</script>
<style>
.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4 {
  @apply text-secondary;
}

.nuxt-content h1 {
  @apply text-5xl font-bold;
}
.nuxt-content h2 {
  @apply text-4xl;
}
.nuxt-content h3 {
  @apply text-3xl;
}
.nuxt-content h4 {
  @apply text-2xl;
}

.nuxt-content nuxt-img {
  @apply rounded-xl;
}
</style>
