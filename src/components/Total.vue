<template>
  <section class="total-section">
    <div class="section-divider mb-3">
        <h2 class="section-title">
            Total commande
        </h2>
    </div>
    <div class="total-container d-flex justify-content-center">
        <div class="total-info">
            <div class="sous-total d-flex justify-content-between">
                <p>Sous-totale</p> <span>1130</span> 
            </div>
            <div class="livraison d-flex justify-content-between">
                <p>Livraison</p> <span>GRATUITE</span>
            </div>
            <div class="total d-flex justify-content-between">
                <p>TOTAL</p> <span>1130</span>
            </div>
        </div>
    </div>
  </section>
</template>

<script>


export default {
    name: "Total",
}
</script>

<style lang="scss" scoped>

.total-container {
    padding: 1rem;
    width: 100%;
    background: white;
    box-shadow: black;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
    .total-info {
        width: 173px;
        font-family: $fontLight;
        .total {
            font-family: $fontStd;
        }
    }
}

</style>