if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.getElementsByTagName('html').item(0).setAttribute('data-bs-theme', 'dark');