<template>
  <Layout>
    <template #layout-bottom>
      <div style="text-align: center; margin-top: 2rem; padding-bottom: 2rem;">
        <div style="display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 0.5rem;">
          <a href="https://github.com/lcandiot" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              alt="GitHub"
              width="24"
              height="24"
              style="display: inline-block;"
            />
          </a>
          <a href="https://www.linkedin.com/in/lorenzocandioti/" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
              alt="LinkedIn"
              width="24"
              height="24"
              style="display: inline-block;"
            />
          </a>
        </div>
        <div style="font-size: 0.85rem; color: #666;">
          © 2025 Lorenzo Candioti • Made with VitePress
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>