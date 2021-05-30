<template>
  <div class="w-full">
    <div class="relative flex w-full justify-center pt-16 print:pt-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-primary absolute w-3/4 sm:w-5/12 top-0 right-0 print:hidden"
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
            <div class="my-16 print:my-6">
              <h1
                class="text-4xl sm:text-5xl text-secondary text-left print:text-3xl"
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
              <div class="flex justify-center">
                <nuxt-img
                  class="rounded-2xl w-full sm:w-1/2 object-cover print:w-72"
                  :src="page.thumbnail"
                  format="webp"
                  quality="80"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 175.553 217.476"
                  class="hidden sm:block w-32 h-32 fill-current text-primary absolute right-0 bottom-0 mr-32 -mb-20"
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
            </div>

            <div class="flex item-center space-x-3 mt-6">
              <svg
                id="Capa_1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current text-primary w-6"
              >
                <g>
                  <path
                    d="m504.5 315.494c4.143 0 7.5-3.357 7.5-7.5v-216.655c0-17.369-14.131-31.5-31.5-31.5h-65.347c0-10.903 0-15.429 0-24.592 0-4.375-3.733-7.832-8.121-7.475-20.27 1.684-37.644 12.458-51.813 32.066h-263.34c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h254.037c-.142.265-.277.547-.418.814-28.467 53.966-36.232 149.666-34.554 208.075.122 4.053 3.442 7.275 7.497 7.275h36.387v17.195c-4.84 1.8-8.156 6.486-8.156 11.722v99.114h-315.172c-9.098 0-16.5-7.401-16.5-16.5v-311.194c0-9.099 7.402-16.5 16.5-16.5h25.379c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-25.379c-17.369 0-31.5 14.131-31.5 31.5v311.195c0 17.369 14.131 31.5 31.5 31.5h315.172v27.719c0 12.406 10.094 22.5 22.5 22.5h31.638c12.406 0 22.5-10.094 22.5-22.5v-27.719h57.19c17.369 0 31.5-14.131 31.5-31.5v-59.54c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v59.54c0 9.099-7.402 16.5-16.5 16.5h-57.19c0-105.831.102-99.696-.223-101.426-.816-4.339-3.891-7.909-7.933-9.41v-233.359h65.346c9.098 0 16.5 7.401 16.5 16.5v216.655c0 4.143 3.357 7.5 7.5 7.5zm-162.494-39.491h-16.168c-.365-66.292 9.712-214.995 74.315-231.898v7.499c-52.122 46.104-57.927 174.765-58.147 224.399zm58.147-202.431v233.848h-30.325v-23.917c0-4.143-3.357-7.5-7.5-7.5h-5.313c.232-37.955 4.28-152.096 43.138-202.431zm8.157 388.181c0 4.136-3.364 7.5-7.5 7.5h-31.638c-4.136 0-7.5-3.364-7.5-7.5 0-6.773 0-132.567 0-139.333h.656 45.325.656c.001 6.77.001 132.567.001 139.333z"
                  />
                  <g>
                    <path
                      d="m70.25 346.937c-16.68 0-30.25-13.57-30.25-30.25v-139.5c0-16.68 13.57-30.25 30.25-30.25s30.25 13.57 30.25 30.25v139.5c0 16.679-13.57 30.25-30.25 30.25zm0-185c-8.409 0-15.25 6.841-15.25 15.25v139.5c0 8.409 6.841 15.25 15.25 15.25s15.25-6.841 15.25-15.25v-139.5c0-8.41-6.841-15.25-15.25-15.25z"
                    />
                  </g>
                </g>
              </svg>
              <p class="text-primary font-semibold">
                Préparation : {{ page.preparationtime || 0 }}
              </p>
            </div>

            <div class="flex item-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="fill-current text-primary w-6"
              >
                <g id="outline">
                  <path
                    d="M271,296a8,8,0,0,0-16,0c0,4.994-1.89,7.154-5.021,10.732C246.19,311.062,241,316.994,241,328s5.19,16.938,8.979,21.268C253.11,352.846,255,355.006,255,360a8,8,0,0,0,16,0c0-11.006-5.19-16.938-8.979-21.268C258.89,335.154,257,332.994,257,328s1.89-7.154,5.021-10.732C265.81,312.938,271,307.006,271,296Z"
                  />
                  <path
                    d="M319,296a8,8,0,0,0-16,0c0,4.994-1.89,7.154-5.021,10.732C294.19,311.062,289,316.994,289,328s5.19,16.938,8.979,21.268C301.11,352.846,303,355.006,303,360a8,8,0,0,0,16,0c0-11.006-5.19-16.938-8.979-21.268C306.89,335.154,305,332.994,305,328s1.89-7.154,5.021-10.732C313.81,312.938,319,307.006,319,296Z"
                  />
                  <path
                    d="M223,296a8,8,0,0,0-16,0c0,4.994-1.89,7.154-5.021,10.732C198.19,311.062,193,316.994,193,328s5.19,16.938,8.979,21.268C205.11,352.846,207,355.006,207,360a8,8,0,0,0,16,0c0-11.006-5.19-16.938-8.979-21.268C210.89,335.154,209,332.994,209,328s1.89-7.154,5.021-10.732C217.81,312.938,223,307.006,223,296Z"
                  />
                  <path
                    d="M440,144H72a8,8,0,0,0-8,8V440a8,8,0,0,0,8,8H440a8,8,0,0,0,8-8V152A8,8,0,0,0,440,144Zm-8,288H80V160H432Z"
                  />
                  <path
                    d="M452,16H60A44.049,44.049,0,0,0,16,60V452a44.049,44.049,0,0,0,44,44H452a44.049,44.049,0,0,0,44-44V60A44.049,44.049,0,0,0,452,16ZM32,60A28.032,28.032,0,0,1,60,32H452a28.032,28.032,0,0,1,28,28V96H32ZM452,480H60a28.032,28.032,0,0,1-28-28V112H480V452A28.032,28.032,0,0,1,452,480Z"
                  />
                  <path
                    d="M312,40H200a8,8,0,0,0-8,8V80a8,8,0,0,0,8,8H312a8,8,0,0,0,8-8V48A8,8,0,0,0,312,40Zm-8,32H208V56h96Z"
                  />
                  <path
                    d="M120,256H392a24,24,0,0,0,8-46.624V184a8,8,0,0,0-8-8H360a8,8,0,0,0-8,8v24H160V184a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v25.376A24,24,0,0,0,120,256Zm248-64h16v16H368Zm-240,0h16v16H128Zm-8,32H392a8,8,0,0,1,0,16H120a8,8,0,0,1,0-16Z"
                  />
                  <path
                    d="M152,40a24,24,0,1,0,24,24A24.027,24.027,0,0,0,152,40Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,152,72Z"
                  />
                  <path
                    d="M88,40a24,24,0,1,0,24,24A24.027,24.027,0,0,0,88,40Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,88,72Z"
                  />
                  <path
                    d="M424,40a24,24,0,1,0,24,24A24.027,24.027,0,0,0,424,40Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,424,72Z"
                  />
                  <path
                    d="M360,40a24,24,0,1,0,24,24A24.027,24.027,0,0,0,360,40Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,360,72Z"
                  />
                  <path d="M328,400H184a8,8,0,0,0,0,16H328a8,8,0,0,0,0-16Z" />
                  <path d="M368,400h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" />
                </g>
              </svg>
              <p class="text-primary font-semibold">
                Cuisson : {{ page.bakingtime || 0 }}
              </p>
            </div>
            <div class="flex my-10 print:hidden">
              <button
                class="flex items-center cursor-pointer bg-primary ring-0 hover:ring-4 ring-opacity-50 ring-primary transition duration-300 ease-in-out text-white rounded-lg shadow-md py-3 px-2 print:text-2xl print:py-0"
                @click="printRecipe"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 animate-bounce"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span> Imprimer la recette </span>
              </button>
            </div>
            <div
              v-if="page.infos"
              class="text-gray-500 leading-relaxed bg-primary-light py-4 px-6 rounded-lg print:mt-2 print:italic"
            >
              <p>{{ page.infos }}</p>
            </div>
            <div class="flex my-4 mt-20 print:mt-2">
              <h3
                class="bg-primary-light text-primary font-semibold rounded-xl py-2 px-4 print:text-2xl print:py-0"
              >
                Ingrédients
              </h3>
            </div>
            <div class="border p-6 border-primary-light">
              <div class="flex flex-wrap w-full sm:w-2/3">
                <div
                  v-for="ingredient in ingredients"
                  :key="ingredient"
                  class="w-full sm:w-1/2 py-1"
                >
                  <div class="flex items-center space-x-4">
                    <div class="w-2 h-2 bg-primary"></div>
                    <p class="text-gray-500">
                      {{ ingredient }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex my-4 mt-12 page-break">
              <h3 class="text-gray-500 font-semibold text-xl">Préparation</h3>
            </div>
            <div class="w-full">
              <div
                v-for="(step, index) in page.steps"
                :key="index"
                class="mb-10 print:mb-6 element-not-break"
              >
                <div class="flex">
                  <h4
                    class="bg-primary-light text-primary font-semibold rounded-lg py-1 px-3 print:px-0 print:py-0"
                  >
                    Étape {{ index + 1 }}
                  </h4>
                </div>
                <p
                  class="whitespace-pre-line text-gray-500 print:whitespace-normal"
                >
                  {{ step.content }}
                </p>
                <div
                  v-for="(thumbnail, key) in step.thumbnailStep"
                  :key="'thumbnail1' + key"
                  class="flex justify-center"
                >
                  <nuxt-img
                    v-if="thumbnail.thumbnailStepPreview"
                    class="rounded-2xl w-full sm:w-1/2 object-cover print:w-72 element-not-break"
                    :src="thumbnail.thumbnailStepPreview"
                    format="webp"
                    quality="80"
                  />
                </div>
              </div>
            </div>
            <div
              v-for="(thumbnail, key) in page.thumbnaillist"
              :key="'thumbnail2' + key"
              class="flex justify-center"
            >
              <nuxt-img
                v-if="thumbnail.thumbnail2"
                class="rounded-2xl w-full sm:w-1/2 object-cover print:w-72 element-not-break"
                :src="thumbnail.thumbnail2"
                format="webp"
                quality="80"
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
    const page = await $content(`recettes/${slug}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found :/' })
      })
    return {
      page,
    }
  },
  computed: {
    ingredients() {
      return this.page.ingredients.split('*').filter(function (el) {
        return el
      })
    },
  },
  methods: {
    includeImage(content) {
      if (content.includes('/images/uploads/')) {
        const firstSplit = content.split(' ')[0]
        return firstSplit.split('(')[1]
      } else {
        return false
      }
    },
    printRecipe() {
      window.print()
    },
  },
}
</script>
<style scoped>
.page-break {
  page-break-before: always;
}

.element-not-break {
  page-break-inside: avoid;
}
</style>
