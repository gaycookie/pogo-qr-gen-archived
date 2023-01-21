<template lang="pug">
.canvas-container.d-flex.justify-content-center.pb-5
  canvas.qr-canvas(width="512" height="512" @click="resize" ref="qrCanvas")
</template>

<style lang="sass" scoped>
canvas
  border-radius: 10px
  width: 256px
  height: 256px
  max-width: 512px
  max-height: 512px

  &:hover
    cursor: pointer
</style>

<script>
import QRCodeStyling from 'qr-code-styling'

export default {
  name: 'CanvasContainer',
  data() {
    return {
      size: "small",
      teams: {
        none: {
          logo: "",
          frame: "empty.png",
          color: "#000000"
        },
        instinct: {
          logo: "instinct.png",
          frame: "zapdos.png",
          color: "#FFDE00"
        },
        mystic: {
          logo: "mystic.png",
          frame: "articuno.png",
          color: "#3B4CCA"
        },
        valor: {
          logo: "valor.png",
          frame: "moltres.png",
          color: "#CC0000"
        }
      }
    }
  },
  methods: {
    resize: function() {
      if (this.size == 'small') {
        this.size = 'large';
        this.$refs.qrCanvas.style.width = '100%';
        this.$refs.qrCanvas.style.height = '100%';
      } else {
        this.size = 'small';
        this.$refs.qrCanvas.style.width = '256px';
        this.$refs.qrCanvas.style.height = '256px';
      }
    },
    drawImage: function(ctx, image, ...args) {
      return new Promise((resolve, reject) => {
        image.onload = () => resolve(ctx.drawImage(image, ...args));
        image.onerror = reject;
      });
    },
    drawPlaceholder: async function() {
      const ctx = this.$refs.qrCanvas.getContext('2d');
      const [width, height] = [this.$refs.qrCanvas.width, this.$refs.qrCanvas.height];
      if (!ctx) return;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      const image = new Image();
      image.src = require('@/assets/images/placeholder.png');
      
      return await this.drawImage(ctx, image, 0, 0, width, height);
    },
    drawCustom: async function(options) {
      const ctx = this.$refs.qrCanvas.getContext('2d');
      const [width, height] = [this.$refs.qrCanvas.width, this.$refs.qrCanvas.height];
      if (!ctx) return;

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      let color = this.teams['none'].color;
      if (options.team && options.team != 'none') {
        color = this.teams[options.team].color;
      }

      const qrCode = new QRCodeStyling({
        type: 'canvas',
        width: width,
        height: height,
        data: options.code,
        cornersSquareOptions: { color: color },
        cornersDotOptions: { color: '#000000' },
        qrOptions: { errorCorrectionLevel: options.level },
        dotsOptions: { type: options.style, color: "#000000" },
      });

      const qrImage = await qrCode._getElement('png');
      ctx.drawImage(qrImage, 64, 64, width - 128, height - 128);

      const frameImage = new Image();
      if (options.show_logo && options.team != 'none') {
        frameImage.src = require('@/assets/images/frames/' + this.teams[options.team].frame);
      } else {
        frameImage.src = require('@/assets/images/frames/' + this.teams['none'].frame);
      }

      await this.drawImage(ctx, frameImage, 0, 0, width, height);
    }
  },
  mounted() {
    this.drawPlaceholder();
    this.$root.$on('drawCustom', this.drawCustom);
  }
}
</script>