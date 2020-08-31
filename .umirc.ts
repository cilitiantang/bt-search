import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      title:
        '种子搜索神器 - 搜索各类资源用以学习交流，bit 磁力链接，迅雷链接，爬虫自动发掘',
    },
    {
      path: '/search/:search',
      component: '@/pages/search',
      title: '搜索列表 - 种子搜索神器',
    },
    {
      path: '/detail/:hash',
      component: '@/pages/detail',
      title: '详情页 - 种子搜索神器',
    },
  ],
  theme: {
    '@primary-color': '#FF6347',
  },
});
