<template lang="pug">
#app.col-lg-8.mx-auto.p-4.py-md-5
  header.d-flex.align-items-center.pb-3.mb-4.border-bottom
    h3.d-flex.align-items-center.text-decoration-none
      span.fs-3.ps-3 Pokémon GO QR Generator
  main
    CanvasContainer
    FormContainer
  FooterContainer
</template>

<script>
import CanvasContainer from './components/CanvasContainer.vue'
import FormContainer from './components/FormContainer.vue'
import FooterContainer from './components/FooterContainer.vue'

export default {
  name: 'App',
  components: {
    CanvasContainer,
    FormContainer,
    FooterContainer
  }
}
</script>

<style lang="sass">

</style>
