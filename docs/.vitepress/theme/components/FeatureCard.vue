<template>
  <div class="feature-card w-full">
    <div class="card-content bg-white dark:bg-gray-700 rounded-lg p-6 transition-all text-center border border-gray-100 dark:border-gray-700 border-solid h-[330px] overflow-hidden">
      <div :class="iconClass + ' text-primary mb-6 mx-auto text-5xl'"></div>
      <span class="text-2xl! font-bold">{{ title }}</span>
      <p class="text-sm text-gray-900 dark:text-gray-300">{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script> 

<style scoped>
.feature-card {
  width: calc((100% - 56px) / 3);
}

.card-content {
  transition: all 0.3s ease;
}

.card-content:hover {
  background-color: #0a2558; /* 深蓝色背景 */
  color: white;
}

.card-content:hover p {
  color: rgba(255, 255, 255, 0.9) !important;
}

</style>