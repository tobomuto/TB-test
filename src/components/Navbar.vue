<template>
  <div class="navbar shadow">
      <img class="burger d-md-none" src="../assets/menu.png" alt="menu">
      <div class="navbar-left">
        <a href="#" class="navbar-brand">
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
      <div class="navbar-center">
        <img class="ours" alt="Mascotte Tediber" src="../assets/logo_ours_noel.svg">
      </div>

      <div class="navbar-right">
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
        <img class="cart" alt="Panier" src="../assets/cart.svg">
      </div>
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
    .navbar-center {
        width: 10%;
        display: flex;
        justify-content: center;
        .ours {
            width: 75px;
        }
    }
    .navbar-left {
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .navbar-brand {
            justify-content: center;
            .logo {
                width: 79px;
            }
        }
    }
    .navbar-right {
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .cart {
            width: 50.74px;
        }
    }
    a {
        text-decoration: none;
        color: $titleFontColor;
    }

}

@media only screen and (max-width: 767px) {
    .navbar {
        
        justify-content: space-between;
        padding: 0 1rem;
        .nav-item {
            display: none;
        }
        .ours {
            display: none;
        }
        .navbar-right {
            display: flex;
            justify-content: right!important;
            width: 40%;
        }
        .navbar-left {
            position: absolute;
            width: 100vw;
            justify-content: center;
            
                
        }
        .burger {
            display: flex;
            width: 40px;
            cursor: pointer;
        }
    }

}

</style>