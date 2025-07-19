---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Bray 美国博雷阀门 - 美国博雷阀门Bray是全球流体控制、自动化产品与配件的首要制造商之一，拥有超过30年的持续成功历程，并在逾40个国家和地区开展业务运营。

hero:
  # name: "全面、综合控制系统解决方案"
  text: "全面、综合控制系统解决方案"
  tagline: "全球流体控制、自动化产品与配件的首要制造商之一，拥有超过30年的持续成历程，并在世界各地逾40个国家和地区开展业务运营。"
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

## 公司领导层

<div class="team-container">
  <p class="team-description">公认的企业管理专家，在阀门和执行机构行业具有40多年的国际经验。</p>
  <VPTeamMembers size="medium" :members="members" />
</div>

<style>
.team-container {
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 2rem;
  text-align: center;
}
.team-description {
  max-width: 800px;
  margin: 0 auto 2rem;
  color: var(--vp-c-text-2);
}
</style>
