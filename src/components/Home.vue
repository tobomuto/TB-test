<template>
  <div class="container-sm">
    <Suivi/>
    <Livraison/>
    <Paiement/>
    <Total v-bind:articles="articles" v-bind:orders="orders"/>
    <Help/>
  </div>
</template>

<script>

import Suivi from './Suivi.vue'
import Livraison from './Livraison.vue'
import Paiement from './Paiement.vue'
import Total from './Total.vue'
import Help from './Help.vue'

import json from "@/assets/data/db.json";

export default {
  name: 'HelloWorld',
  components: {
    Suivi,
    Livraison,
    Paiement,
    Total,
    Help
  },
    data() {
        return {
        orders: json.orders,
        articles: json.orders.articles
        };
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
