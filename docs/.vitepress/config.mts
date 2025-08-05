import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/MyWebsite/',
  title: "Dr. Lorenzo Candioti",
  description: "A Scientist with experience in Multi-Physics Simulation, Machine Learning, and Data Analysis.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/index' },
      { text: 'Blog', link: '/blog/index'},
      { text: 'Contact', link: '/contact/index'}
    ],

    sidebar: {
      // Sidebar for /projects/*
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Geoscientific Research', link: '/projects/geoscientific_modelling' },
            { text: 'Software Development', link: '/projects/software_development' },
            // { text: 'Machine Learning', link: '/projects/machine_learning' },
            // Add more project pages if needed
          ]
        }
      ],

      // Sidebar for /blog/*
      '/blog/': [
        {
          text: 'Updates & Blog',
          items: [
            { text: 'News', link: '/blog/index' },
            // Example: First blog post
            { text: 'Archive', link: '/blog/archive' }
          ]
        }
      ]
    }
  }
})
