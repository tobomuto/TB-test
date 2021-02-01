<template>
<div>
    <div class="cardProduct mt-4" v-for="article in articles" :key="article.title">
      
          <div class="row">
              <div class="col-3">
                  <img :src="require(`../assets/${article.path}`)" class="articleIcon" alt="photo article">
              </div>
              <div class="col-9">
                <div class="cardInfo">
                    <span class="productName">{{ article.title }}</span>
                    <span class="price">{{ article.price }} €</span>
                    <span class="taille">TAILLE : {{ article.size }}</span>
                    <span class="qty">QTÉ : {{ article.quantity }}</span>
                </div>
              </div>
          </div>
      
    </div>
</div>
</template>

<script>

export default {
    name: "CardProduct",
    props: ['articles']

}
</script>

<style lang="scss" scoped>

.cardProduct {

    background: white;
    box-shadow: black;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
    padding: 0.5rem;
    .articleIcon {
        width: 100%;
    }
    .cardInfo {
        display: flex;
        padding: 5px;
        flex-direction: column;
        justify-content: space-between;
    }
    .productName, .price {
        font-family: $fontStd;
        font-size: 20px;
        text-transform: uppercase;
    }

}


</style>