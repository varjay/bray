// https://vitepress.dev/guide/custom-theme
import { h, defineComponent } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TopBar from './components/TopBar.vue'
import './style.css'

// 导入UnoCSS
import 'uno.css'

// 创建顶部条组件
const TopBar = defineComponent({
  setup() {
    return () => h('div', { class: 'custom-top-bar' }, [
      h('div', { class: 'container' }, [
        h('div', { class: 'content' }, [
          h('div', { class: 'left' }, '欢迎访问博雷阀门官方网站'),
          h('div', { class: 'right' }, [
            h('span', null, '联系电话: +86-21-12345678'),
            h('span', { class: 'separator' }, '|'),
            h('span', null, '邮箱: info@braycn.com')
          ])
        ])
      ])
    ])
  }
})

// 创建扩展布局组件
const Layout = defineComponent({
  setup() {
    return () => {
      return h('div', { class: 'custom-layout' }, [
        // 先渲染顶部条
        h(TopBar),
        // 然后渲染整个默认布局
        h(DefaultTheme.Layout)
      ])
    }
  }
})

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme 