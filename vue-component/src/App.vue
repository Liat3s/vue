<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/order_book">компонент списка ВГК</router-link>
      <router-link to="/documents">Сводные отчеты</router-link>
      <router-link to="/order">Выдать наряд</router-link>
      <router-link to="/table/ethereum">{{$route.params.id}}</router-link>
      <router-link to="/table/bitcoin">{{$route.params.id}}</router-link>
    </nav>
    <router-view/>
        <!-- <img src="./assets/logo.png"> -->
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  width: 90%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  margin-bottom: 0;
}
nav {
  width: 100%;
  display: flex;
  margin: 0 auto;
}
nav a {
  width: 150px;
  height: 40px;
  padding-top: 20px;
  text-decoration: none;
  color: #fff;
  background: rgb(204, 128, 128);
}
</style>
