<template>
  <div class="product-selection bg-gray-50 dark:bg-gray-800 py-16 full-width-container">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <div class="text-base font-bold text-primary">最新产品</div>
        <h2 class="text-4xl font-bold mb-3">满足您的专业需求</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          博雷阀门提供全系列高性能阀门产品，从基础的隔离阀到复杂的控制阀系统，我们的产品线能满足各种工业应用场景的需求。
        </p>
      </div>

      <div class="flex flex-wrap -mx-4">
        <ProductCard 
          v-for="product in products" 
          :key="product.title"
          :image="product.image"
          :title="product.title"
          :description="product.description"
          :link="product.link"
        />
      </div>

      <div class="text-center mt-10">
        <a href="/products" class="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
          浏览全部产品
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

const products = [
  {
    image: '/products/ball-valve-1.jpg',
    title: '浮球阀系列',
    description: '博雷浮球阀是高性能工业级阀门，适用于各种流体控制应用。采用优质不锈钢材质，具有出色的密封性能和耐腐蚀性，可靠性高。',
    link: '/products#ball-valve'
  },
  {
    image: '/products/butterfly-valve-1.jpg',
    title: '高性能蝶阀',
    description: '博雷蝶阀采用先进的密封技术设计，适用于多种工业环境。其轻量化设计和大流量通道特性，确保最小的压力损失和最高的工作效率。',
    link: '/products#butterfly-valve'
  },
  {
    image: '/products/gate-valve-1.jpg',
    title: '闸阀系列',
    description: '博雷闸阀设计用于需要最小流阻的应用场合，提供双向密封和可靠的关断性能。适用于各种工业介质，具有耐压、耐温、耐腐蚀等特点。',
    link: '/products#gate-valve'
  }
]
</script>

<style scoped>
.product-selection .container {
  max-width: 1152px;
}
</style> 