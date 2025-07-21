<script setup lang="ts">
import { data } from './api.data'

console.log(data)
</script>

<template>
  <div>
    <h1>AllPds{{ data }}</h1>
  </div>
</template>