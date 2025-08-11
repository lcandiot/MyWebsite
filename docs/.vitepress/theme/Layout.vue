<template>
  <Layout>
    <template #layout-bottom>
      <div class="full-width-footer">
        <div style="display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 0.1rem; align-items: center;">
          <!-- GitHub Icon -->
          <a href="https://github.com/lcandiot" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 
                       3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                       0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                       -.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 
                       1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.495.998 
                       .108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 
                       0-1.31.465-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 
                       1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 
                       2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23 
                       .653 1.653.241 2.873.119 3.176.77.84 1.233 1.911 
                       1.233 3.221 0 4.609-2.804 5.628-5.475 5.922.43.371.823 1.102.823 2.222 
                       0 1.606-.015 2.898-.015 3.293 0 .321.216.694.825.576C20.565 22.092 
                       24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

          <!-- LinkedIn Icon -->
          <a href="https://www.linkedin.com/in/lorenzocandioti/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037 
                       -1.851 0-2.135 1.445-2.135 2.939v5.667H9.356V9h3.414v1.561h.049 
                       c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.368 4.268 5.451v6.29zM5.337 
                       7.433c-1.144 0-2.067-.926-2.067-2.067 0-1.144.923-2.067 
                       2.067-2.067s2.067.923 2.067 2.067c0 1.141-.923 2.067-2.067 
                       2.067zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 
                       0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 
                       24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <!-- GitHub Pages badge centered -->
          <a href="https://pages.github.com/" class="social-icon" target="_blank" rel="noopener noreferrer"
            style="text-decoration: none; font-size: 0.8rem; color: #3b82f6;">
            <img src="https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222222?logo=github&logoColor=white" 
                 alt="Hosted on GitHub Pages"
                 style="height: 16px; margin-right: 4px;" />
          </a>
        </div>
        <!-- Copyright line -->
        <div class="footer-copy">
          © {{ new Date().getFullYear() }} Lorenzo Candioti • Made with <a href = "https://vitepress.dev" style="text-decoration: underline;"> VitePress </a>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>