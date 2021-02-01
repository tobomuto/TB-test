<template>
  <section class="paiement">
    <div class="section-divider mb-3">
        <h2 class="section-title">
            Informations de paiement
        </h2>
    </div>
    <div class="paiement-container">
        <img src="../assets/Visa.png" alt="visa logo">
        <span class="paiement-name mx-2">visa</span>
    </div>
  </section>
</template>

<script>


export default {
    name: "Paiement"
}
</script>

<style lang="scss" scoped>

.paiement-container {
    padding: 1rem;
    width: 100%;
    background: white;
    box-shadow: black;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
    img {
        width: 53px;
    }
    .paiement-name {
        text-transform: uppercase;
        font-family: $fontLight;
    }
}

</style>