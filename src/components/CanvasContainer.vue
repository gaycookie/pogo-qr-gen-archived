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
          color: "#000000"
        },
        instinct: {
          logo: "instinct.png",
          color: "#FFDE00"
        },
        mystic: {
          logo: "mystic.png",
          color: "#3B4CCA"
        },
        valor: {
          logo: "valor.png",
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

      ctx.globalAlpha = 1;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      if (options.show_logo && options.team != 'none') {
        const logoImage = new Image();
        logoImage.src = require('@/assets/images/' + this.teams[options.team].logo);
        ctx.globalAlpha = 0.3;
        await this.drawImage(ctx, logoImage, 64, 64, width - 128, height - 128);
      }

      ctx.globalAlpha = 1;
      const qrCode = new QRCodeStyling({
        type: 'canvas',
        width: width,
        height: height,
        data: options.code,
        backgroundOptions: {
          color: 'transparent'
        },
        dotsOptions: {
          type: options.style,
          color: "#000000D0"
        },
        cornersDotOptions: {
          color: this.teams[options.team].color + "D0"
        },
        qrOptions: { 
          errorCorrectionLevel: options.level
        } 
      });

      const qrImage = await qrCode._getElement('png');
      ctx.drawImage(qrImage, 16, 16, width - 32, height - 32);

      ctx.strokeStyle = this.teams[options.team].color;
      ctx.lineWidth = 16;
      ctx.strokeRect(0, 0, width, height);
    }
  },
  mounted() {
    this.drawPlaceholder();
    this.$root.$on('drawCustom', this.drawCustom);
  }
}
</script>