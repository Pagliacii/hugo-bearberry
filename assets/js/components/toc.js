// Initialize TOC with enhanced configuration
tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.content',
    headingSelector: 'h1, h2, h3, h4',
    hasInnerContainers: true,
    scrollSmooth: true,
    scrollSmoothDuration: 300,
    headingsOffset: 80, // Account for any fixed headers
    positionFixedSelector: null, // Disable default fixed positioning
    positionFixedClass: 'is-position-fixed',
    fixedSidebarOffset: 'auto',
    includeHtml: false,
    onClick: function(e) {
        // Smooth scroll to heading on click
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Account for any fixed headers
                const targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
});

// Enhanced mobile-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.toc');
    if (!toc) return;

    // Function to handle mobile TOC setup
    function setupMobileTOC() {
        const isMobile = window.matchMedia('(max-width: 720px)').matches;

        if (isMobile) {
            toc.classList.add('mobile-toc-expanded');

            // Ensure TOC is expanded and visible on mobile
            const tocList = toc.querySelector('.toc-list');
            if (tocList) {
                tocList.style.maxHeight = 'none';
                tocList.style.overflow = 'visible';
            }
        } else {
            toc.classList.remove('mobile-toc-expanded');
        }
    }

    // Initial setup
    setupMobileTOC();

    // Handle window resize
    window.addEventListener('resize', function() {
        setupMobileTOC();
    });

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

            if (entry.isIntersecting) {
                // Remove active class from all links
                document.querySelectorAll('.toc-link').forEach(link => {
                    link.classList.remove('is-active-link');
                });

                // Add active class to current link
                if (tocLink) {
                    tocLink.classList.add('is-active-link');
                }
            }
        });
    }, observerOptions);

    // Observe all headings
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]').forEach(heading => {
        observer.observe(heading);
    });
});
