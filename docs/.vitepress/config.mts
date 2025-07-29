import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lorenzo Candioti",
  description: "A Scientist with experience in Multi-Physics Simulation, Machine Learning, and Data Analysis.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/index' },
      { text: 'Blog', link: '/blog/index'}
    ],

    sidebar: {
      // Sidebar for /projects/*
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Geoscientific Research', link: '/projects/index' },
            // Add more project pages if needed
          ]
        }
      ],

      // Sidebar for /blog/*
      '/blog/': [
        {
          text: 'Updates & Blog',
          items: [
            { text: 'Latest Posts', link: '/blog/index' },
            // Example: First blog post
            { text: 'Archive', link: '/blog/archive' }
          ]
        }
      ]
    }
  }
})
