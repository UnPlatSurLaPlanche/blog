<template>
  <div class="w-full">
    <div class="relative flex w-full justify-center pt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-primary absolute w-3/4 sm:w-5/12 top-0 left-0"
        viewBox="0 0 865.557 850.893"
      >
        <path
          id="Union_2"
          data-name="Union 2"
          d="M-4638.682-566.916l-5.319.844,5.319-.844v-839.538h784.907l64.512,704.784,10.819-1.716-10.819,1.716,8.737,95.454-858.157,50.656Z"
          transform="translate(4644.001 1406.454)"
          opacity="0.1"
        />
      </svg>
      <div class="flex justify-center w-full z-10">
        <LogoCard class="w-1/3" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data: () => ({
    posts: [
      {
        id: 0,
        name: 'Comment bien casser des oeufs',
        date: '12/10/2020',
        description:
          'Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l’alcôve ovoïde, où les bûches se consument dans l’âtre, ce qui lui permet de penser à la cænogenèse de l’être dont …',
        likes: 323,
        cover: require('~/assets/img/image1.jpg'),
      },
    ],
  }),
}
</script>
