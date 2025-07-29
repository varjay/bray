<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, page } = useData()

// 处理图片数据
const imageList = computed(() => {
  if (!frontmatter.value.imgs) return []
  
  // 如果是字符串，转换为数组
  if (typeof frontmatter.value.imgs === 'string') {
    return [frontmatter.value.imgs]
  }
  
  return frontmatter.value.imgs
})

// 当前显示的图片
const currentImage = ref('')

onMounted(() => {
  if (imageList.value.length > 0) {
    currentImage.value = imageList.value[0]
  }
})

// 切换显示的图片
function changeImage(img) {
  currentImage.value = img
}

// 获取产品分类
const categories = computed(() => {
  if (!frontmatter.value.category) return []
  return frontmatter.value.category.split(',').map(item => item.trim())
})

// 获取产品型号
const productModel = computed(() => {
  const title = frontmatter.value.title || ''
  const modelMatch = title.match(/S\d+\/S\d+|S\d+/)
  return modelMatch ? modelMatch[0] : title.split('–')[0].trim()
})

// 获取产品标题
const productTitle = computed(() => {
  return frontmatter.value.title || ''
})

// 获取短描述
const desc = computed(() => {
  return frontmatter.value.desc || ''
})
</script>

<template>
  <div class="product-detail-container">
    <div class="product-info">
      <div class="product-category">
        <span v-for="(category, index) in categories" :key="index" class="category-tag">
          {{ category }}
        </span>
      </div>
      
      <div class="product-model">
        <h2>{{ productModel }}</h2>
      </div>
      
      <div class="product-description" v-if="desc">
        <p>{{ desc }}</p>
      </div>
      
      <div class="product-thumbnails" v-if="imageList.length > 1">
        <div 
          v-for="(img, index) in imageList" 
          :key="index" 
          class="thumbnail"
          :class="{ active: img === currentImage }"
          @click="changeImage(img)"
        >
          <img :src="img" :alt="`${productTitle} - 图片${index + 1}`">
        </div>
      </div>
    </div>
    
    <div class="product-image">
      <img 
        v-if="currentImage" 
        :src="currentImage" 
        :alt="productTitle"
      >
      <div v-else class="no-image">暂无图片</div>
    </div>
  </div>
</template>

<style scoped>
.product-detail-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 16px 0
}

.product-info {
  flex: 1;
  min-width: 300px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-image {
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.product-image img {
  max-width: 100%;
  height: 350px;
  border-radius: 4px;
  box-shadow: none;
}

.no-image {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  color: #999;
  font-size: 1.2rem;
}

.product-category {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-tag {
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
  color: #666;
}

.product-model h2 {
  margin: 0;
  font-size: 1.75rem;
  color: #333;
  font-weight: 600;
}

.product-model h3 {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #666;
  font-weight: normal;
}

.product-description {
  color: #555;
  line-height: 1.6;
}

.product-description p {
  margin: 0 0 1rem;
}

.product-thumbnails {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0.5rem 0;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.thumbnail.active {
  border-color: #0066cc;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .product-detail-container {
    flex-direction: column-reverse;
  }
  
  .product-info {
    max-width: 100%;
  }
  
  .product-image {
    margin-bottom: 1.5rem;
  }
}
</style> 