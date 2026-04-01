<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import NewsList from './assets/FeaturesAndNews.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- Put our combined features+news block under the hero -->
    <template #home-hero-after>
      <NewsList />
    </template>

<!-- Existing footer -->
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

          <!-- ResearchGate Icon -->
          <a href="https://www.researchgate.net/profile/Lorenzo-Candioti?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="ResearchGate">
            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>ResearchGate icon</title><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/></svg>
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
          © {{ new Date().getFullYear() }} Lorenzo Candioti • Powered by <a href = "https://vitepress.dev" style="text-decoration: underline;"> VitePress </a>
        </div>
      </div>
    </template>
  </Layout>
</template>