<script async lang="ts">
    import { page } from '$app/stores'
  
    $: {
      if (typeof gtag !== 'undefined') {
        gtag('config', 'G-RTQJXGSR9H', {
          page_title: document.title,
          page_path: $page.url.href,
        })
        gtag('config', 'AW-11364348341', {
          page_title: document.title,
          page_path: $page.url.href,
        })
      }
    }
  </script>
  
  <svelte:head>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KZQPWFVV');</script>
      
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-RTQJXGSR9H">
    </script>
    <script async>
      window.dataLayer = window.dataLayer || []
  
      function gtag() {
        dataLayer.push(arguments)
      }
  
      gtag('js', new Date())
      gtag('config', 'G-RTQJXGSR9H')
      gtag('config', 'AW-11364348341');
    </script>
  </svelte:head>
  