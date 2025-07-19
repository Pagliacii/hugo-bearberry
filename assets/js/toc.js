tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.content',
    headingSelector: 'h1, h2, h3, h4',
    hasInnerContainers: true
});

// Add mobile-specific CSS class
document.addEventListener('DOMContentLoaded', function() {
    if (window.matchMedia('(max-width: 720px)').matches) {
        document.querySelector('.toc').classList.add('mobile-toc-expanded');
    }
});
