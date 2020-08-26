const modifyHtml = (html) => {
  // Add amp-custom tag to added CSS and join all the CSS into one <style-tag>
  let styleConcat = ''
  html = html.replace(/(<style\b[^<>]*>)([^<]*)(<\/style>)/gi, (_match, p1, p2) => {
    styleConcat += p2
    return ''
  })

  html = html.replace('</head>', `<style amp-custom data-vue-ssr>${styleConcat}</style></head>`)
  return html
}

export default {
  head: {
    title: 'Internet pela Educação - Um movimento pelo acesso ilimitado a conteúdos de educação',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Se você também acredita e apoia a liberação do acesso gratuito e ilimitado aos conteúdos educacionais, assine esse manifesto e junte-se a nós nessa luta!'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'dns-prefetch', href: 'https://kit.fontawesome.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://kit.fontawesome.com', crossorigin: 'anonymous' },
      { rel: 'preload', href: 'https://kit.fontawesome.com/0863cfd815.js', crossorigin: 'anonymous', as: 'script' },
      { rel: 'canonical', href: '/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/0863cfd815.js', async: true, defer: true, crossorigin: 'anonymous' },
    ],
  },
  css: ['~/assets/styles/main.css'],
  loading: false, // Disable loading bar since AMP will not generate a dynamic page
  render: {
    // Disable resourceHints since we don't load any scripts for AMP
    resourceHints: false
  },
  hooks: {
    // This hook is called before generatic static html files for SPA mode
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    // This hook is called before rendering the html to the browser
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html)
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'form',
        path: '/form',
        component: resolve(__dirname, 'pages/form.vue'),
      });
      routes.push({
        name: 'assinatura',
        path: '/assinatura',
        component: resolve(__dirname, 'pages/signature.vue'),
      });
    },
  },
}
