<template>
<section class="suivi">
    <div class="section-divider mb-5">
        <h2 class="section-title">
            suivi de commande
        </h2>
    </div>

            <div class="row  row-cols-1 row-cols-lg-2">
                <div class="col mr-3">
                    <div class="row  row-cols-1 info">
                        <div class="informations">
                        <span>N° de commande : {{ orders.id }}</span>
                        <span>Date de commande : {{ orders.dateOrder }}</span>
                        <span>Date d’expédition : {{ orders.dateExpedition }}</span>
                        </div>
                    <AccordionSuivi/>
                    </div>
                </div>

                <div class="col">
                    <span class="ArticlesNumber">Articles (3)</span>
                    <CardProduct  v-bind:articles="articles"/>

                </div>
            </div>

</section>
</template>

<script>

import AccordionSuivi from './AccordionSuivi'
import CardProduct from './CardProduct'

import json from "@/assets/data/db.json";

export default {
    components: {
        AccordionSuivi,
        CardProduct
    },
    data() {
        return {
        orders: json.orders,
        articles: json.orders.articles
        };
    }
}
</script>

<style lang="scss" scoped>

.suivi {
    font-family: $fontLight;
    .informations {
        display: flex;
        height: 130px;
        flex-direction: column;
        justify-content: space-between;
    }
    .ArticlesNumber {
        font-size: 16px;
        text-transform: uppercase;
    }
}





</style>