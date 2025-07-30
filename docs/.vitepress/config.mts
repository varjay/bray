import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import {  productMenus, sidebarMenus } from './theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bray 美国博雷阀门",
  description: "专业工业阀门制造商 - 高品质、可靠、专业的阀门解决方案",
  head: [
    // 无法生效
    // [
    //   'meta',
    //   { name: 'viewport',content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
    // ]
  ],
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/logo.png',
      alt: 'Bray 美国博雷阀门',
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '分类目录',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '产品',
        component: 'CustomNavItem',
      },
      { 
        text: '产品', 
        items: productMenus
      },
      { 
        text: '解决方案', 
        items: [
          { 
            text: '行业',
            items: [
              { text: '化工和石油', link: '/zh/解决方案/行业/化工和石油' },
              { text: '暖通空调', link: '/zh/解决方案/行业/暖通空调' },
              { text: '食品和饮料', link: '/zh/解决方案/行业/食品和饮料' },
              { text: '数据中心', link: '/zh/解决方案/行业/数据中心' },
              { text: '水和废水处理', link: '/zh/解决方案/行业/水和废水处理' },
              { text: '石油和天然气', link: '/zh/解决方案/行业/石油和天然气' }
            ]
          },
          {
             text: '综合解决方案', 
             items: [
              { text: '隔离', link: '/zh/解决方案/综合解决方案/隔离' },
              { text: '自动化', link: '/zh/解决方案/综合解决方案/自动化' },
              { text: '控制', link: '/zh/解决方案/综合解决方案/控制' },
              { text: '以太网/IP', link: '/zh/解决方案/综合解决方案/以太网/IP' }
             ]
          },
        ]
      },
      { text: '联系我们', link: '/contact-us' }
    ],

    sidebar: sidebarMenus,
    outline: {
      label: '本页目录'
    },

    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/BrayInternational/' },
      { icon: 'x', link: 'https://www.braycn.com/#' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/bray-controls/' },
      { icon: 'youtube', link: 'https://www.youtube.com/c/BrayInt' }
    ],
    
    
    // 添加本地搜索配置
    search: {
      provider: 'local'
    },
  }
})