<template lang="pug">
#app.col-lg-8.mx-auto.p-4.py-md-5
  header.d-flex.align-items-center.pb-3.mb-4.border-bottom
    h3.d-flex.align-items-center.text-decoration-none
      span.fs-3.ps-3 Pokémon GO QR Generator
  main
    CanvasContainer
    FormContainer

  footer.pt-3.mt-4.text-muted.border-top
    | &copy; #[span.year] by #[a.text-reset.text-decoration-none(href="https://www.github.com/gaycookie" target="_blank") GayCookie] with lots of ❤ and ☕.
    p.text-muted.mb-0 Not affiliated with Niantic Inc., The Pokemon Company, or Nintendo
</template>

<script>
import CanvasContainer from './components/CanvasContainer.vue'
import FormContainer from './components/FormContainer.vue'

export default {
  name: 'App',
  components: {
    CanvasContainer, FormContainer
  }
}
</script>

<style lang="sass">

</style>
