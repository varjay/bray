<script setup lang="ts">
import { data } from './api.data'

const props = defineProps<{
  category: string
}>()

// 确保产品数据有正确的类型
interface Product {
  title: string
  directory: string
  images: string[]
  url: string
  category: string[]
}

const products = (data as Product[]).filter(product => {
  if (props.category.split(',').length === 1) {
    return product.category.find(item => item.split(',')[0] === props.category)
  } else {
    return product.category.indexOf(props.category) !== -1
  }
  return true
})
console.log(products)
</script>

<template>
  <div class="products-container">
    <div class="products-grid">
      <a v-for="product in products" :key="product.title" class="product-card" :href="product.url">
        <div class="product-image">
          <img v-if="product.images && product.images.length" :src="product.images[0]" :alt="product.title">
        </div>
        <div class="product-directory">{{ product.directory }}</div>
        <div class="product-title">{{ product.title }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-image {
  height: 200px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-directory {
  padding: 10px 15px;
  font-size: 16px;
  color: #666;
  font-weight: 500;
  background-color: #f9f9f9;
}

.product-title {
  padding: 10px 15px 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  flex-grow: 1;
}

/* 响应式布局 */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>