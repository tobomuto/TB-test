<template>
  <section class="livraison">
    <div class="section-divider mb-3">
        <h2 class="section-title">
            Informations sur la livraison
        </h2>
    </div>
    <div class="delivery-container row row-cols-1 row-cols-lg-4" v-for="adress in adress" :key="adress.title">
      <div class="adress col">
        <span class="box-title mb-3">Adresse de collecte</span>
        <span class="delivery-name">{{ adress.title }}</span>
        <span class="delivery-street">{{ adress.street }}</span>
        <span class="delivery-city">{{ adress.city }}</span>
        <span class="delivery-code">{{ adress.code }}</span>
        <span class="delivery-country">{{ adress.country }}</span>
      </div>

      <div class="contact col">
        <span class="box-title mb-3">Vos coordonnées</span>
        <span class="contact-name">{{orders.contact}}</span>
        <span class="contact-phone">{{orders.phone}}</span>
      </div>
      <div class="estimation col">
        <span class="box-title mb-3">Livraison estimée</span>
        <span class="date">{{ orders.estimation }}</span>
      </div>
      <div class="mode col">
        <span class="box-title mb-3">Mode de livraison</span>
        <span class="type">{{ orders.mode }}</span>
      </div>

    </div>
  </section>
</template>

<script>

import json from "@/assets/data/db.json";

export default {
    name: "Livraison",
    data() {
        return {
        orders: json.orders,
        adress: json.orders.adress
        };
    }

}
</script>

<style lang="scss" scoped>

.delivery-container {
    background: white;
    box-shadow: black;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
    padding: 1.5rem;
    display: flex;

    .adress, .contact, .estimation, .mode {
      display: flex;
      flex-direction: column;
      font-family: $fontLight;
      border-right: rgba(#7F7C89,0.5) solid 1px;
      padding: 0;    
    }
    .contact, .estimation, .mode {
      padding-left: 1.5rem;
    }
    .mode {
      border: none;
    }
    .box-title {
      font-family: $fontStd;
      text-transform: uppercase;
    }
    .delivery-name, .delivery-city, .delivery-country, 
    .dcontact-phone {
      text-transform: uppercase;
    }
}

@media all and (max-width: 768px){
  .delivery-container {
    padding: 1rem;
    .adress, .contact, .estimation, .mode {
      display: flex;
      flex-direction: column;
      font-family: $fontLight;
      border-right: 0;
      border-bottom: rgba(#7F7C89,0.5) solid 1px;
      padding: 0px;
    }
    .contact, .estimation, .mode {
      padding: 1.5rem 0;
    }
    .mode {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
}

</style>