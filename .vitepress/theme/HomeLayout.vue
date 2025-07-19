<template>
  <div class="custom-home-layout">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 头部横幅 -->
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">{{ frontmatter.hero.name }}</h1>
          <p class="hero-subtitle">{{ frontmatter.hero.text }}</p>
          <p class="hero-tagline">{{ frontmatter.hero.tagline }}</p>
          
          <div class="hero-actions">
            <a 
              v-for="action in frontmatter.hero.actions" 
              :key="action.link" 
              :href="action.link" 
              :class="['hero-action', `hero-action-${action.theme}`]"
            >
              {{ action.text }}
            </a>
          </div>
        </div>
        
        <div class="hero-image" v-if="frontmatter.hero.image">
          <img 
            :src="frontmatter.hero.image.src" 
            :alt="frontmatter.hero.image.alt || ''" 
          />
        </div>
      </div>
    </div>
    
    <!-- 特性介绍 -->
    <div class="features" v-if="frontmatter.features">
      <div class="container">
        <div class="features-grid">
          <div 
            v-for="(feature, index) in frontmatter.features" 
            :key="index"
            class="feature-item"
          >
            <div class="feature-icon" v-if="feature.icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-details">{{ feature.details }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 内容区域 -->
    <div class="content">
      <div class="container">
        <Content />
      </div>
    </div>
    
    <!-- 页脚 -->
    <div class="footer">
      <div class="container">
        <p v-if="frontmatter.footer">{{ frontmatter.footer }}</p>
        <p v-else>&copy; {{ new Date().getFullYear() }} 博雷阀门. 保留所有权利.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// 导入默认主题的导航栏组件
const { NavBar } = DefaultTheme

const { frontmatter } = useData()
</script>

<style scoped>
.custom-home-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 头部横幅样式 */
.hero {
  padding: 80px 0;
  background-color: var(--vp-c-bg-soft);
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 16px;
  color: var(--vp-c-brand);
}

.hero-subtitle {
  font-size: 36px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 12px;
}

.hero-tagline {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin: 0 0 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-action {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.hero-action-brand {
  background-color: var(--vp-c-brand);
  color: white;
}

.hero-action-brand:hover {
  background-color: var(--vp-c-brand-dark);
}

.hero-action-alt {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.hero-action-alt:hover {
  background-color: var(--vp-c-bg-soft);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  max-height: 400px;
}

/* 特性区域样式 */
.features {
  padding: 80px 0;
  background-color: var(--vp-c-bg);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.feature-item {
  padding: 32px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  transition: all 0.3s;
}

.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px;
}

.feature-details {
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

/* 内容区域样式 */
.content {
  padding: 60px 0;
  flex: 1;
}

/* 页脚样式 */
.footer {
  padding: 32px 0;
  background-color: var(--vp-c-bg-soft);
  text-align: center;
  color: var(--vp-c-text-2);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero .container {
    flex-direction: column;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 28px;
  }
  
  .hero-image {
    justify-content: center;
    margin-top: 40px;
  }
}
</style> 