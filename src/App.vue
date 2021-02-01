<template>
  <div id="app">
    <Navbar/>
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navbar
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "GillSansStd";
  src: url(./fonts/Gill_Sans_Std_Regular.woff2) format("woff2");
  font-family: "GillSansStd-Light";
  src: url(./fonts/Gill_Sans_Std_Light.woff2) format("woff2");
}


#app {
  font-family: $fontStd;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $mainFontColor;
  .section-divider {
    // margin: 0 79.5px;
    position: relative;
    text-align: center;
    .section-title {
      min-width: 338px;
      text-transform: uppercase;
      background: #fff;
      position: relative;
      margin-top: 34px;
      padding-left: 1rem;
      padding-right: 1rem;
      position: relative;
      display: inline-block;
      z-index: 2;
      font-family: $fontStd;
      font-size: 22px;
    }
    .section-title::after {
      content: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1IiB3aWR0aD0iMTE5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZD0iTTIuMTc0LjI1aDExNC42NTJ2MTQuNDk5SDIuMTc0eiIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTEwMi4wOTggMTQuMjIxTDEwOS4xOTQuNzhtNy4xMDIgMTMuNDQxTDEwOS4xOTMuNzhtLTcuMDk1IDEzLjQ0MUw5NC45OTUuNzc5bS03LjA5NiAxMy40NDJMOTQuOTk1Ljc4TTczLjY5NyAxNC4yMjFMODAuNzk5Ljc4bTcuMSAxMy40NDFMODAuNzk5Ljc3OW0tNy4xMDIgMTMuNDQyTDY2LjYuNzc5bS03LjEgMTMuNDQyTDY2LjYuNzhNNDUuMzAxIDE0LjIyMUw1Mi40MDEuNzhNNTkuNSAxNC4yMjFMNTIuNDAxLjc3OW0tNy4xIDEzLjQ0MkwzOC4yMDEuNzhNMzEuMSAxNC4yMjFMMzguMjAyLjc4TTE2LjkwMSAxNC4yMjFMMjQuMDAzLjc4TTMxLjEgMTQuMjIxTDI0LjAwMy43NzltLTcuMTAyIDEzLjQ0Mkw5LjgwNC43NzltLTcuMSAxMy40NDJMOS44MDQuNzgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y4YjAxOSIgc3Ryb2tlLXdpZHRoPSIxLjA1OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGNsaXAtcGF0aD0idXJsKCNhKSIvPjwvc3ZnPg==);
      display: block;
    }
  }
  .section-divider::after {
    border: 1px solid $titleFontColor;
    content: " ";
    left: 0;
    position: absolute;
    top: 2.5rem;
    width: 100%;

  }
}
</style>
