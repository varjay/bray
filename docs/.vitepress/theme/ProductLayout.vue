<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import TopBar from './components/TopBar.vue'
import Footer from './components/Footer.vue'

const { Layout } = DefaultTheme

const { frontmatter } = useData()

</script>

<template>
  <Layout 
    :class="{ 
      'product-list': frontmatter.pageType === 'list',
      'product-detail': frontmatter.category
    }"
    class="custom-layout"
  >

    <template #layout-top>
      <TopBar />
    </template>

    <template #layout-bottom>
      <Footer />
    </template>

    <template v-if="frontmatter.category" #doc-top>
      <div class="doc-extend-content-change bg-[#ececec] h-xs">
        <div class="doc-extend-content-change__content">
          <h1>详细页顶部！！</h1>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
@media (min-width: 960px) {
  .VPNav {
    top: 36px !important;
  }
  .top-bar {
    position: fixed;
    top: 0;
    z-index: 30;
  }
}
</style>