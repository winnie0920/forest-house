<script setup></script>

<template>
  <div>
    <NavBar />
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <Floor />
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
</style>
