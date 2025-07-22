import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { productMenus } from './theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bray 美国博雷阀门",
  description: "专业工业阀门制造商 - 高品质、可靠、专业的阀门解决方案",
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
    nav: [
      { text: '首页', link: '/' },
      {
        text: '产品中心',
        component: 'CustomNavItem',
      },
      { 
        text: '产品中心', 
        items: productMenus
      },
      { 
        text: '解决方案', 
        items: [
          { text: '石油化工', link: '/solutions' },
          { text: '市政工程', link: '/solutions' },
          { text: '电力能源', link: '/solutions' },
          { text: '冶金矿业', link: '/solutions' },
          { text: '食品医药', link: '/solutions' }
        ]
      },
      { text: '联系方式', link: '/contact' }
    ],

    sidebar: [
      {
        text: '产品中心',
        items: [
          { text: '球阀系列', link: '/products#球阀系列' },
          { text: '闸阀系列', link: '/products#闸阀系列' },
          { text: '蝶阀系列', link: '/products#蝶阀系列' },
          { text: '定制服务', link: '/products#定制服务' }
        ]
      },
      {
        text: '关于博雷',
        items: [
          { text: '公司简介', link: '/about-us#公司简介' },
          { text: '企业文化', link: '/about-us#企业文化' },
          { text: '生产能力', link: '/about-us#生产能力' },
          { text: '质量管理', link: '/about-us#质量管理' },
          { text: '研发创新', link: '/about-us#研发创新' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/BrayInternational/' },
      { icon: 'x', link: 'https://www.braycn.com/#' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/bray-controls/' },
      { icon: 'youtube', link: 'https://www.youtube.com/c/BrayInt' }
    ],
    
    
    // 添加本地搜索配置
    search: {
      provider: 'local'
    }
  }
})