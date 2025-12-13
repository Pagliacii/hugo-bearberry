// Initialize TOC with enhanced configuration
tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.content',
    headingSelector: 'h1, h2, h3, h4',
    ignoreSelector: '.chat-content h1, .chat-content h2, .chat-content h3, .chat-content h4, .chat-thinking__content h1, .chat-thinking__content h2, .chat-thinking__content h3, .chat-thinking__content h4, details h1, details h2, details h3, details h4, .alert-text h1, .alert-text h2, .alert-text h3, .alert-text h4, .alert h1, .alert h2, .alert h3, .alert h4',
    hasInnerContainers: true,
    scrollSmooth: true,
    scrollSmoothDuration: 300,
    headingsOffset: 80,
    positionFixedSelector: null,
    positionFixedClass: 'is-position-fixed',
    fixedSidebarOffset: 'auto',
    includeHtml: false,
    onClick: function(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80;
                const targetPosition = targetElement.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
});

// Post-processing filter to ensure shortcode headers are removed from TOC
// This runs after tocbot has built the TOC and handles any edge cases
setTimeout(() => {
    const tocList = document.querySelector('.toc-list');
    if (!tocList) return;

    const tocLinks = tocList.querySelectorAll('.toc-link');

    tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Check if heading is inside a shortcode container
        const isInShortcode = targetElement.closest('.chat-content, .chat-thinking__content, details, .alert-text, .alert');
        if (isInShortcode) {
            link.remove();
        }
    });

}, 150);

// Enhanced mobile-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.toc');
    if (!toc) return;

    function setupMobileTOC() {
        const isMobile = window.matchMedia('(max-width: 720px)').matches;
        if (isMobile) {
            toc.classList.add('mobile-toc-expanded');
            const tocList = toc.querySelector('.toc-list');
            if (tocList) {
                tocList.style.maxHeight = 'none';
                tocList.style.overflow = 'visible';
            }
        } else {
            toc.classList.remove('mobile-toc-expanded');
        }
    }

    setupMobileTOC();
    window.addEventListener('resize', setupMobileTOC);

    // Add active state highlighting
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            const id = entry.target.getAttribute('id');
            const tocLink = document.querySelector(`.toc-link[href="#${id}"]`);
            if (entry.isIntersecting && tocLink) {
                document.querySelectorAll('.toc-link').forEach(link => {
                    link.classList.remove('is-active-link');
                });
                tocLink.classList.add('is-active-link');
            }
        });
    }, observerOptions);

    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]').forEach(heading => {
        observer.observe(heading);
    });
});
