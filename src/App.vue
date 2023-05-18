<script setup></script>

<template>
  <h1 class="hero">App</h1>
</template>

<style lang="scss">
.hero {
  display: flex;

  font-size: 30px;

  &:hover {
    color: green;
  }
}
</style>

<style lang="less" scoped>
.hero {
  &:hover {
    font-weight: 600;
  }
}
</style>
