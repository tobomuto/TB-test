<template>
  <section class="help">
    <div class="section-divider mb-3">
        <h2 class="section-title">
            Besoin d'aide ?
        </h2>
    </div>

    <div class="accordion pb-5">
        <details>
            <summary>FOIRE AUX QUESTIONS TEDIBER</summary>
            <p>Hello</p>
        </details>
        <details>
            <summary>LA GARANTIE TEDIBER</summary>
            <p>Hello</p>
        </details>
        <details>
            <summary>reprise de l’ancienne literie</summary>
            <p>Hello</p>
        </details>
        
        <details>
            <summary>comment faire un retour ?</summary>
            <p>Hello</p>
        </details>
    </div>


  </section>
</template>

<script>
export default {
    name: "Help"
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