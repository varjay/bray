---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Bray 美国博雷阀门 - 美国博雷阀门Bray是全球流体控制、自动化产品与配件的首要制造商之一，拥有超过30年的持续成功历程，并在逾40个国家和地区开展业务运营。

hero:
  # name: "全面、综合控制系统解决方案"
  text: "<br>全面、综合控制系统解决方案"
  tagline: "全球流体控制、自动化产品与配件的首要制造商之一，拥有超过30年的持续成历程，并在世界各地逾40个国家和地区开展业务运营。<br><br>"
  # image:
  #   src: "/logo.png"
  #   alt: "博雷阀门logo"
  actions:
    - theme: brand
      text: 产品中心
      link: /products
    - theme: alt
      text: 了解更多
      link: /about-us

features:
  - icon: 🌐
    title: 分支机构
    details: 博雷在40多个国家有分支机构
  - icon: ☎️
    title: 联系我们
    details: (+86) 139-1744-4407
  - icon: 📮
    title: 9:00 AM - 5:00 PM
    details: 周一到周六

footer: 版权所有 © 2024 博雷阀门 | 所有权利保留
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/team/leader.jpg',
    name: 'William Sterling',
    title: '创始人、CEO兼主席'
  }
]
</script>

<div class="full-width-container">
  <div class="mt-8 py-10 bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
            <div class="i-carbon-globe text-primary mb-4"></div>
            <h3 class="text-lg font-bold mb-2">全球化业务</h3>
            <p class="text-gray-600 dark:text-gray-300">我们在全球40多个国家和地区开展业务，为客户提供本地化支持。</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
            <div class="i-carbon-task text-primary mb-4"></div>
            <h3 class="text-lg font-bold mb-2">高质量标准</h3>
            <p class="text-gray-600 dark:text-gray-300">严格的质量控制流程确保每个产品都符合国际标准。</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
            <div class="i-carbon-innovation text-primary mb-4"></div>
            <h3 class="text-lg font-bold mb-2">创新技术</h3>
            <p class="text-gray-600 dark:text-gray-300">持续的研发投入使我们始终保持技术领先地位。</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <a href="/about-us" class="btn btn-primary inline-block">了解更多</a>
      </div>
    </div>
  </div>
</div>

<div class="team-container full-width-container">
  <div class="team-container-overlay py-12">
    <div class="team-description text-sm font-bold">LEADERS</div>
    <p class="team-description text-4xl font-bold">公司领导层</p>
    <p class="team-description text-sm mx-auto">公认的企业管理专家，在阀门和执行机构行业具有40多年的国际经验。</p>
    <VPTeamMembers size="medium" :members="members" />
  </div>
</div>

<style>
.team-container {
  text-align: center;
  background: url('home-leader.jpg') no-repeat fixed 0 0 / cover;
  color: white;
}
.team-container-overlay {
  background: rgb(7, 11, 43, 0.88);
}
.VPTeamMembers {
  display: flex;
  justify-content: center;
}
.VPTeamMembers .profile {
  background: transparent;
}
.VPTeamMembers .profile .avatar {
  width: 160px !important;
  height: 160px !important;
}

/* 全宽容器样式 - 突破vp-doc限制 */
.full-width-container {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>
