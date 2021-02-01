<template>
    <div class="accordion pb-5">
        <details>
            <summary>SUIVI COMMANDE</summary>
            <Illustrations class="m-4"/>
        </details>
        <details>
            <summary>INFORMATION SUR LES RETOURS</summary>
            <p>Hello</p>
        </details>
    </div>
</template>

<script>

import Illustrations from './svg_Components/Illustrations.vue'

export default {
  name: "AccordionSuivi",
  components: {
    Illustrations

  }
}
</script>

<style lang="scss" scoped>

.accordion {
    font-family: $fontLight;
    border-top: 1px solid $mainFontColor;
    padding-left: 0;
    padding-right: 0;
    details {
      border-bottom: 1px solid $mainFontColor;
      summary {
          text-transform: uppercase;
          padding: 0.5rem;
          outline: none;
          list-style: none;
      }
      summary::after {
          content: url('../assets/down.svg');
          float: right;
          margin-left: auto;
      }
    }
    details summary::-webkit-details-marker {
      display:none;
    }


}

</style>