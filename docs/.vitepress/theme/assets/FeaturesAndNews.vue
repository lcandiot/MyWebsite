<script setup lang="ts">
import { useData } from 'vitepress'

const { site, frontmatter } = useData()

// Features & News from index.md front-matter
const features = (frontmatter.value.features ?? []) as Array<{
  title: string
  details?: string
  link?: string
}>

const news = (frontmatter.value.news ?? []) as Array<{
  date?: string
  title?: string
  text?: string
  link?: { text?: string; href: string }
}>

function fmtDate(d?: string) {
  if (!d) return ''

  // Handle "dd.mm.yyyy" manually
  const match = d.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/)
  let day: number, month: number, year: number

  if (match) {
    day = parseInt(match[1])
    month = parseInt(match[2])
    year = parseInt(match[3])
  } else {
    // Fallback for other formats (e.g. ISO)
    const date = new Date(d)
    if (isNaN(date.getTime())) return d
    day = date.getDate()
    month = date.getMonth() + 1
    year = date.getFullYear()
  }

  // Determine the suffix
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th'

  // Get month name (English)
  const monthName = new Date(year, month - 1, 1).toLocaleString('en-GB', { month: 'long' })

  // Return HTML with superscript suffix
  return `${day}<sup>${suffix}</sup> ${monthName} ${year}`
}
function isExternal(link?: string): boolean {
  return !!link && /^https?:\/\//i.test(link)
}

/** Resolve internal links with the site base (works locally and on GH Pages) */
function resolveHref(link?: string): string | undefined {
  if (!link) return undefined
  if (isExternal(link)) return link

  // normalize internal path
  let p: string = link.trim()
  if (!p.startsWith('/')) p = '/' + p

  // join with base (base usually like '/repo-name/')
  const base: string = (site.value?.base ?? '/').replace(/\/+$/, '')
  return base + p
}
</script>

<template>
<div class="fn-align">
  <div class="fn-wrapper feature-news-container">
    <!-- Left: stacked features (clickable if link provided) -->
    <section class="fn-features" aria-labelledby="features-heading">
      <h2 id="features-heading" class="sr-only">Features</h2>

      <div v-for="(f, i) in features" :key="i" class="fn-card">
        <!-- external link -->
        <a
          v-if="isExternal(f.link)"
          :href="f.link"
          target="_blank"
          rel="noopener"
          class="fn-card-inner"
        >
          <h3 class="fn-card-title">{{ f.title }}</h3>
          <p v-if="f.details" class="fn-card-details">{{ f.details }}</p>
        </a>

        <!-- internal link -->
        <a
          v-else-if="f.link"
          :href="resolveHref(f.link)"
          class="fn-card-inner"
        >
          <h3 class="fn-card-title">{{ f.title }}</h3>
          <p v-if="f.details" class="fn-card-details">{{ f.details }}</p>
        </a>

        <!-- no link -->
        <div v-else class="fn-card-inner">
          <h3 class="fn-card-title">{{ f.title }}</h3>
          <p v-if="f.details" class="fn-card-details">{{ f.details }}</p>
        </div>
      </div>
    </section>

    <!-- Right: news -->
    <aside class="fn-news" aria-labelledby="news-heading">
      <h2 id="news-heading" class="fn-news-title">News &amp; Updates</h2>

      <article v-for="(n, i) in news" :key="i" class="fn-news-item">
        <h3 class="fn-news-item-title">
          <strong v-if="n.date" v-html="fmtDate(n.date)" />
          <span v-if="n.title" class="fn-news-item-title" v-html="n.title" />
        </h3>
        <p v-if="n.text" class="fn-news-item-text" v-html="n.text" />
        <p v-if="n.link?.href" class="fn-news-item-link">
          <a :href="n.link.href" target="_blank" rel="noopener">
            {{ n.link.text || 'Read more' }}
          </a>
        </p>
      </article>
    </aside>
  </div>
</div>
</template>

<style scoped>
/* Outer shell — exactly matches the hero/container on desktop */
.fn-align {
  box-sizing: border-box;
  max-width: 1260px;      /* hard-coded */
  margin: auto auto;
  padding-left: 48px;     /* hard-coded */
  padding-right: 48px;    /* hard-coded */
}

/* Inner shell — exactly matches the “About Me” text width */
.fn-wrapper {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 1fr); /* 2/3 : 1/3 */
  gap: 24px;
  align-items: start;

  width: 100%;
  margin: auto auto;
  box-sizing: border-box;
}
/* Stack feature cards vertically */
.fn-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Outer card container */
.fn-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 120px; /* 👈 fixed height for all feature cards */
}

/* Inner clickable area */
.fn-card-inner {
  display: flex;
  flex-direction: column;
  justify-content: top; /* centers text vertically */
  height: 100%;
  padding: 16px 16px;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
}

/* Hover state (border only) */
.fn-card-inner:hover {
  background: transparent;
  border: 2px solid var(--vp-c-brand-2);
}
.fn-card-title { margin: 0 0 6px; font-weight: 600; }
.fn-card-details { margin: 0; opacity: .9; }

/* news column */
.fn-news {
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  /* Add the soft warning box style */
  background: var(--vp-c-warning-soft);
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
}
.fn-news-title { 
    margin: 0 0 6px; 
    font-size: 1rem; 
    font-weight: 600; 
}
.fn-news-item-title sup {
  font-size: 0.6em;
  vertical-align: super;
  line-height: 0;
}
.fn-news-item {
  /* border: 2px solid var(--vp-c-brand-2); */
  border-radius: 12px;
  padding: 16px 16px;
  margin-top: auto;
  height: 100%;
  justify-content: top; /* centers text vertically */
}
.fn-news-item-title {
    margin: auto auto 6px; 
    font-size: .95rem; 
}
.fn-news-item-text { margin: 0; font-size: .9rem; line-height: 1.5; }

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

@media (max-width: 960px) {
  .fn-wrapper { display: block; }
  .fn-news { margin-top: 20px; }
}
</style>