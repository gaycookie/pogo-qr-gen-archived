<template lang="pug">
footer.d-flex.flex-wrap.justify-content-between.align-items-center.py-3.my-4.border-top
  p.col-md-7.mb-0.text-muted
    span(style="display: block;") © {{ currentYear }} #[a.text-reset.text-decoration-none(href="https://github.com/gaycookie" target="_blank") GayCookie], made with lots of ❤ and ☕.
    span(style="display: block;") Not affiliated with Niantic Inc., The Pokemon Company or Nintendo

  ul.nav.col-md-5.justify-content-end
    li.nav-item 
      a.nav-link.px-2.text-muted(href="https://github.com/gaycookie/pogo-qr-gen" target="_blank") Source
    li.nav-item 
      a.nav-link.px-2.text-muted(href="https://github.com/gaycookie/pogo-qr-gen/issues" target="_blank") Issues
    li.nav-item 
      a.nav-link.px-2.text-muted(href="#") FAQs
  

</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear().toString();
    }
  }
}
</script>