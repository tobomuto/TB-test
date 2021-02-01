<template>
  <div class="navbar shadow">
      <img class="burger d-md-none" src="../assets/menu.png" alt="menu">
      <div class="navbar-left d-flex justify-content-between align-items-center">
        <a href="#" class="navbar-brand order-sm-2">
            <img class="logo" alt="tediber logo" src="../assets/logo_tediber.svg">
        </a>

        <a href="" class="nav-item">
            nos produits
        </a>

        <a href="" class="nav-item">
            le concept
        </a>

        <a href="" class="nav-item">
            avis
        </a>
      </div>
      <div class="navbar-center d-flex justify-content-center align-items-center">
        <img class="ours d-xs-none" alt="Mascotte Tediber" src="../assets/logo_ours_noel.svg">
      </div>

      <div class="navbar-right d-flex justify-content-between align-items-center">
        <a href="" class="nav-item">
            pub tv
        </a>
        <a href="" class="nav-item">
            mon compte
        </a>
        <a href="" class="nav-item">
            mag
        </a>
        <a href="" class="nav-item">
            contactez-nous
        </a>
        
      </div>
      <img class="cart order-sm-2" alt="Panier" src="../assets/cart.svg">
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>

.navbar {
    width: 100%;
    height: 80px;
    font-family: $fontLight;
    text-transform: uppercase;
    padding: 0 20px;
    .navbar-left {
        width: 40%;
    }
    .navbar-center {
        width: 10%;
        .ours {
            width: 75px;
        }
    }
    .navbar-right {
        width: 40%;
    }
        a {
            text-decoration: none;
            color: $titleFontColor;
        }
        .cart {
            width: 50.74px;
        }
        .logo {
            width: 79px;
        }

}

// @media only screen and (max-width: 767px) {
//     .ours {
//         display: none;
//     }
//     .burger {
        
//         float: left;
//     }
//     .navbar-brand {
         
//     }
// }




</style>