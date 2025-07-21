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
  - icon: <span class="i-material-symbols-location-on-rounded"></span>
    title: 分支机构
    details: 博雷在40多个国家有分支机构
  - icon: <span class="i-mynaui-telephone-call-solid"></span>
    title: 联系我们
    details: (+86) 139-1744-4407
  - icon: <span class="i-material-symbols-mark-email-read"></span>
    title: 9:00 AM - 5:00 PM
    details: 周一到周六
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import FeatureSection from './.vitepress/theme/components/FeatureSection.vue'
import ProductSection from './ProductSection.vue'
import CompanyHighlights from './.vitepress/theme/components/CompanyHighlights.vue'

const members = [
  {
    avatar: '/team/leader.jpg',
    name: 'William Sterling',
    title: '创始人、CEO兼主席'
  }
]
</script>

<FeatureSection />

<!-- 公司亮点 -->
<CompanyHighlights />

<div class="team-container full-width-container">
  <div class="team-container-overlay py-12">
    <div class="team-description text-sm font-bold">LEADERS</div>
    <p class="team-description text-4xl font-bold">公司领导层</p>
    <p class="team-description text-sm mx-auto">公认的企业管理专家，在阀门和执行机构行业具有40多年的国际经验。</p>
    <VPTeamMembers size="medium" :members="members" />
  </div>
</div>

<!-- 最新产品 -->
<ProductSection />

<style>
/* 全宽容器样式 */
.full-width-container {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.team-container {
  text-align: center;
  background: url('/images/home-leader.jpg') no-repeat fixed 0 0 / cover;
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
</style>
