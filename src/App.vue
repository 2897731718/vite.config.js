<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from 'comp/HelloWorld.vue'
console.log('1111')
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <el-button type="default">点击</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="danger">Danger</el-button>

  <img src="@/assets/13.png" class="img-responsive" alt="Image" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 100vw;
  height: 600px;
}
</style>
