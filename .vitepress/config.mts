import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "博雷阀门",
  description: "专业工业阀门制造商 - 高品质、可靠、专业的阀门解决方案",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '产品中心', link: '/products' },
      { text: '关于我们', link: '/about-us' },
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
      { icon: 'github', link: 'https://github.com/brayvalve' }
    ],
    
    footer: {
      message: '博雷阀门 - 专业阀门制造商',
      copyright: '版权所有 © 2024 博雷阀门'
    }
  }
})
