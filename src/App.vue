<template>
  <div id="app">
    <div id="container">
      <div id="header">
        <img src="./assets/logo.png" width="70px" height="70px"/>
        <router-link to="/about" class="headerFont">Home</router-link>
      </div>
      <router-view/>
    </div>
    <div id="footer">
      <router-link to="/about" class="footerFont">Site map</router-link>
      <router-link to="/about" class="footerFont">Terms</router-link>
      <router-link to="/about" class="footerFont">Privacy</router-link>
      <router-link to="/about" class="footerFont">Contact us</router-link>
      <router-link to="/about" class="footerFont">About us</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
html {
  height: 100%;
  margin: 0;
}

body {
  height: 100%;
  margin: 0;
  background-image: url("assets/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment:fixed;
  background-color: black;
  background-position: center;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  background-color: black;
  width: 100%;
  height: 70px;
  padding-left: 20px;
  text-align: left;
  display: flex;
}

#container {
  min-height: 100%;
  padding-bottom: -50px;
}

#footer {
  background-color: black;
  height: 50px;
  margin-top: -50px;
}

.headerFont {
  color: #b08dd0;
  font-size: 20px;;
  margin-left: 50px;
  line-height: 70px;
}

.footerFont {
  color: white;
  margin-left: 30px;
  line-height: 50px;
}

a {
    text-decoration:none;
}
</style>
