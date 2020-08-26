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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1' }
    ],
    link: [
      { rel: 'canonical', href: '/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  css: ['~/assets/main.css'],
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
  }
}
