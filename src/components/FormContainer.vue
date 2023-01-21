<template lang="pug">
form.row.border-top.g-4.needs-validation(@submit="submit" @reset="reset" novalidate)
  .col-md-6
    h3 Player Information

    .mb-3
      label.form-label(for="code-input") Invite Code 
        span.text-danger *
      input#code-input.form-control(type="text" placeholder="0000 0000 0000" ref="codeInput" @input="masker" @change="masker")
      #code-input-feedback.invalid-feedback Please provide a valid invite code: 
        code 0000 0000 0000

    .mb-3
      label.form-label(for="username-input") Username 
        span.text-warning (will be implemented later)
      input#username-input.form-control(type="text" maxlength="12" placeholder="Username" ref="usernameInput" disabled)
      #username-input-feedback.invalid-feedback
        | Please provide a valid username. If you think this error is incorrect please contact me.

    div
      label.form-label(for="team-input") Team
      select#team-input.form-select(aria-label="Team" ref="teamSelect")
        option(value="none" selected) No team (default)
        option.instinct(value="instinct") Team Instinct
        option.mystic(value="mystic") Team Mystic
        option.valor(value="valor") Team Valor

  .col-md-6
    h3 QR Options

    .mb-3
      label.form-label(for="dot-select") Dot Style
      select#dot-select.form-select(aria-label="Dot Style" ref="dotSelect")
        option(value="square" selected) Sqaures (default)
        option(value="rounded") Rounded
        option(value="extra-rounded") Extra Rounded
        option(value="dots") Dots (not recommended)
        option(value="classy") Classy
        option(value="classy-rounded") Classy Rounded

    .mb-3
      label.form-label(for="frame-select") Frame Style
      select#frame-select.form-select(aria-label="Frame Style" ref="frameSelect")
        option(value="simple" selected) No Pokemon (default)
        option(value="articuno") Articuno
        option(value="moltres") Moltres
        option(value="zapdos") Zapdos
        option(value="" disabled) More comming soon

    div
      label.form-label(for="correction-input") QR Correction Level 
        span.text-warning (advanced)
      select#correction-input.form-select(aria-label="QR Correction Level (advanced)" ref="correctionSelect")
        option(value="L" selected) Level L (default)
        option(value="M") Level M
        option(value="Q") Level Q
        option(value="H") Level H

  .col-12.text-md-end.text-center
    .btn-group(role="group")
      button.btn.btn-success.px-4(type="submit") Generate QR
      button.btn.btn-danger.px-4(type="reset") Reset Fields

</template>

<style lang="sass" scoped>
option.instinct
  background-color: #FFFF00
  color: #000
option.mystic
  background-color: #0000FF
  color: #FFF
option.valor
  background-color: #FF0000
  color: #000
</style>

<script>
export default {
  name: 'FormContainer',
  data() {
    return {
      hasErrors: false
    }
  },
  methods: {
    masker: function(event) {
      const input = event.target;
      let inputValue = input.value;
        
      inputValue = inputValue.replace(/[^0-9]/g, '');
      var inputLength = inputValue.length;
      if (inputLength > 12) {
        inputValue = inputValue.substring(0, 12);
      }
      
      var maskedValue = '';
      for (var i = 0; i < inputLength; i++) {
        if (i % 4 == 0 && i != 0 && i + 1 != inputLength) {
          maskedValue += ' ';
        }

        maskedValue += inputValue.charAt(i);
      }
      
      input.value = maskedValue; 
    },
    reset: function() {
      const inputs = document.querySelectorAll('input');
      this.hasErrors = false;

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('is-invalid');
      }
    },
    submit: function(e) {
      e.preventDefault();
      this.reset();

      const codeEl = this.$refs.codeInput;
      const teamEl = this.$refs.teamSelect;
      const dotStyleEl = this.$refs.dotSelect;
      const frameStyleEl = this.$refs.frameSelect;
      const correctionEl = this.$refs.correctionSelect;

      const code = codeEl.value.replace(/[^0-9]/g, '');
      if (!code || code.length != 12) {
        this.hasErrors = true;
        codeEl.classList.add('is-invalid');
      }

      const team = teamEl.value;
      if (!team || !this.$store.getters.hasTeam(team)) {
        this.hasErrors = true;
        teamEl.classList.add('is-invalid');
      }

      const dotStyle = dotStyleEl.value;
      if (!dotStyle || !this.$store.getters.hasDotStyle(dotStyle)) {
        this.hasErrors = true;
        dotStyleEl.classList.add('is-invalid');
      }

      const frameStyle = frameStyleEl.value;
      if (!frameStyle || !this.$store.getters.hasFrameStyle(frameStyle)) {
        this.hasErrors = true;
        frameStyleEl.classList.add('is-invalid');
      }

      const correction = correctionEl.value;
      if (!correction || !this.$store.getters.hasLevel(correction)) {
        this.hasErrors = true;
        correctionEl.classList.add('is-invalid');
      }

      if (this.hasErrors) return;
      this.$root.$emit('drawCustom', { code, team, dotStyle, frameStyle, level: correction });
    }
  }
}
</script>