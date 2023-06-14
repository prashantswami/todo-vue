<template>
  <div id="app">
    <header>
      <nav>
        <div class="title">
          Welcome to application
        </div>
        <div class="home-links">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> | 
          <router-link to="/todo">To Do</router-link>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  margin: 0;
  min-height: 75px;
  background-color: #2c3e50;
  color: whitesmoke;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: whitesmoke;
  padding-right: 10px;
  padding-left: 10px;
  text-decoration: none;
}

.home-links {
  float: right;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  padding: 2% 20%;
}

* {
  box-sizing: border-box;
}
.title {
  float:left;
  font-size: 25px;
  position: relative;
  top: -10px;
}
</style>
