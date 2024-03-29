import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { description, discord, font, github, name, releases, twitter } from './meta'

export default defineConfig({
  lang: 'en-US',
  title: name,
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:title', content: name }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/elonehoo/vue-hooks-form/tree/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-PRESENT Elone Hoo',
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Functions', items: [
        {
          text: '',
          items: [
            { text: 'useForm', link: '/use-form/' },
          ],
        },
      ] },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases,
          },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/',
            },
          ],
        },
        {
          text: 'Functions',
          items: [
            {
              text: 'useForm',
              items: [
                { text: 'useForm', link: '/use-form/' },
                { text: 'register', link: '/use-form/register' },
                { text: 'unregister', link: '/use-form/unregister' },
                { text: 'formState', link: '/use-form/formState' },
                { text: 'handleSubmit', link: '/use-form/handleSubmit' },
                { text: 'reset', link: '/use-form/reset' },
                { text: 'setError', link: '/use-form/setError' },
                { text: 'clearErrors', link: '/use-form/clearErrors' },
                { text: 'setValue', link: '/use-form/setValue' },
                { text: 'setFocus', link: '/use-form/setFocus' },
                { text: 'getValues', link: '/use-form/getValues' },
                { text: 'getFieldState', link: '/use-form/getFieldState' },
                { text: 'trigger', link: '/use-form/trigger' },
              ],
            },
          ],
        },
      ],
    },
  },
})
