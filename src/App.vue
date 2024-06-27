<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/local">Local</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
    background-color: rgb(15, 22, 237);
  }
  
  .title {
    color: #FFE807;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  
  .card {
    background-color: white;
    border-radius: 10px;
    margin: 20px;
    height: 250px;
    width: 250px;
    padding: 5px;
    text-align: center;
    align-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .card-title {
    color: #FFE807;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 1px 1px 5px black;
  }
  
  .card-description {
    font-size: 14px;
    text-align: center;
    padding-inline-start: 0px;
    list-style: none;
  }
</style>
