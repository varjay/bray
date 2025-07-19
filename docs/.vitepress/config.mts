import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

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
        items: [
          { text: '球阀系列', link: '/products#球阀系列' },
          { text: '闸阀系列', link: '/products#闸阀系列' },
          { text: '蝶阀系列', link: '/products#蝶阀系列' },
          { text: '截止阀系列', link: '/products' },
          { text: '止回阀系列', link: '/products' }
        ]
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
      { 
        text: '关于我们', 
        items: [
          { text: '公司简介', link: '/about-us#公司简介' },
          { text: '企业文化', link: '/about-us#企业文化' },
          { text: '发展历程', link: '/about-us' },
          { 
            text: '全球业务', 
            items: [
              { text: '亚太地区', link: '/global-business#asia-pacific' },
              { text: '欧洲地区', link: '/global-business#europe' },
              { text: '美洲地区', link: '/global-business#america' },
              { text: '非洲地区', link: '/global-business#africa' }
            ]
          },
          { 
            text: '荣誉资质', 
            items: [
              { text: '企业认证', link: '/honors#certifications' },
              { text: '专利技术', link: '/honors#patents' },
              { text: '行业奖项', link: '/honors#awards' }
            ]
          }
        ]
      },
      { 
        text: '技术支持', 
        items: [
          { text: '技术文档', link: '/tech-support' },
          { 
            text: '产品知识', 
            items: [
              { text: '选型指南', link: '/product-knowledge#selection-guide' },
              { text: '材质选择', link: '/product-knowledge#material-selection' },
              { text: '性能参数', link: '/product-knowledge#performance' },
              { text: '使用环境', link: '/product-knowledge#environment' }
            ]
          },
          { 
            text: '安装维护', 
            items: [
              { text: '安装指南', link: '/installation#guide' },
              { text: '调试方法', link: '/installation#debugging' },
              { text: '维护保养', link: '/installation#maintenance' },
              { text: '故障排除', link: '/installation#troubleshooting' }
            ]
          },
          { text: '常见问题', link: '/tech-support#faq' }
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
    
    footer: {
      message: '博雷阀门 - 专业阀门制造商',
      copyright: '版权所有 © 2024 博雷阀门'
    },
    
    // 添加本地搜索配置
    search: {
      provider: 'local'
    }
  }
})