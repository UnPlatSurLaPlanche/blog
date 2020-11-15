<template>
  <div class="space-y-1">
    <div class="relative">
      <span class="inline-block w-full">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          class="flex cursor-pointer relative w-full rounded-xl bg-primary pl-3 pr-10 py-4 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          @click="isOpen = !isOpen"
        >
          <div class="flex items-center space-x-3 text-white text-opacity-50">
            <span class="block truncate"> TRIER PAR </span>
          </div>
          <div
            class="flex items-center space-x-3 text-white font-semibold ml-4"
          >
            <span class="block truncate uppercase">{{ select }}</span>
          </div>
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
          >
            <svg
              class="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </span>

      <div
        v-if="isOpen"
        class="absolute mt-1 w-full rounded-xl shadow-xs bg-white"
      >
        <ul
          v-for="filter in filters"
          :key="filter.label"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          class="max-h-56 rounded-xl py-1 text-base leading-6 overflow-auto focus:outline-none sm:text-sm sm:leading-5"
        >
          <li
            id="listbox-item-0"
            role="option"
            class="cursor-pointer select-none relative py-2 pl-3 pr-9"
            @click="selectFilter(filter.label)"
          >
            <div class="flex items-center space-x-3">
              <span
                class="font-normal block truncate"
                :class="[
                  select === filter.label
                    ? 'text-primary font-semibold'
                    : 'text-gray-900',
                ]"
              >
                {{ filter.label }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    filters: [
      {
        label: 'Nouveautés',
      },
      {
        label: 'Populaires',
      },
    ],
    select: 'Nouveautés',
    isOpen: false,
  }),
  methods: {
    selectFilter(label) {
      this.select = label
      this.isOpen = false
    },
  },
}
</script>
