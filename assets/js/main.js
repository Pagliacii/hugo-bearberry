/* Main JavaScript Entry Point for Hugo Bearberry Theme */

// Import component scripts
// Note: In production, these would be bundled, but for Hugo themes we load them separately

// Load Table of Contents functionality
// This requires tocbot library to be loaded first
if (typeof tocbot !== 'undefined') {
  // Dynamically load the TOC script
  const tocScript = document.createElement('script');
  tocScript.src = '/js/components/toc.js';
  document.head.appendChild(tocScript);
}

// Load Copy Code Button functionality
const copyCodeScript = document.createElement('script');
copyCodeScript.src = '/js/components/copy-code-button.js';
document.head.appendChild(copyCodeScript);

// Load Copy Markdown functionality
const copyMarkdownScript = document.createElement('script');
copyMarkdownScript.src = '/js/components/copy-markdown.js';
document.head.appendChild(copyMarkdownScript);