<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import TopBar from './components/TopBar.vue'

const { Layout } = DefaultTheme

const { frontmatter } = useData()

</script>

<template>
  <Layout :class="{ 'product-list': frontmatter.pageType === 'list' }" class="custom-layout">
    <template #layout-top>
      <TopBar />
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