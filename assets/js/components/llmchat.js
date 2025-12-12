/**
 * LLM Chat Component JavaScript
 * Provides unified functionality for LLM chat foldable bubbles
 * Eliminates duplicate inline JavaScript for consistent behavior across browser contexts
 * Enhanced for Playwright compatibility with improved initialization and timing
 */

(function() {
  'use strict';

  // Use event delegation for all foldable bubbles
  document.addEventListener('click', function(e) {
    const foldable = e.target.closest('.chat-bubble--foldable');
    if (foldable) {
      e.preventDefault();
      foldable.classList.toggle('expanded');

      // Update arrow rotation based on state
      const arrow = foldable.querySelector('.chat-bubble__indicator .dots');
      if (arrow) {
        if (foldable.classList.contains('expanded')) {
          arrow.style.transform = 'rotate(225deg)'; // ↙ collapsible state
        } else {
          arrow.style.transform = 'rotate(45deg)';  // ↘ expandable state
        }
      }
    }
  });

  // Initialize arrow states on DOM ready
  function initializeArrowStates() {
    const foldableBubbles = document.querySelectorAll('.chat-bubble--foldable');
    foldableBubbles.forEach(bubble => {
      const arrow = bubble.querySelector('.chat-bubble__indicator .dots');
      if (arrow && !bubble.classList.contains('expanded')) {
        // Set initial state to expandable (↘)
        arrow.style.transform = 'rotate(45deg)';
      }
    });
  }

  // Retry mechanism for initialization with CSS timing issues
  function initializeWithRetry(retries = 3, delay = 100) {
    if (retries > 0) {
      setTimeout(() => {
        initializeArrowStates();
        // Check if we have foldable bubbles that need initialization
        const foldableBubbles = document.querySelectorAll('.chat-bubble--foldable');
        const needsRetry = Array.from(foldableBubbles).some(bubble => {
          const arrow = bubble.querySelector('.chat-bubble__indicator .dots');
          return arrow && !arrow.style.transform;
        });

        if (needsRetry) {
          initializeWithRetry(retries - 1, delay * 1.5); // Exponential backoff
        }
      }, delay);
    }
  }

  // MutationObserver for dynamically added content (important for Playwright)
  function setupMutationObserver() {
    const observer = new MutationObserver(function(mutations) {
      let hasNewFoldableContent = false;

      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            // Check if the added node itself is a foldable bubble
            if (node.classList && node.classList.contains('chat-bubble--foldable')) {
              hasNewFoldableContent = true;
            }
            // Check if the added node contains foldable bubbles
            if (node.querySelector && node.querySelector('.chat-bubble--foldable')) {
              hasNewFoldableContent = true;
            }
          }
        });
      });

      if (hasNewFoldableContent) {
        // Small delay to ensure CSS is applied
        setTimeout(initializeArrowStates, 50);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return observer;
  }

  // Initialize when DOM is ready
  function initialize() {
    // Initial immediate attempt
    initializeArrowStates();

    // Retry mechanism for timing issues
    initializeWithRetry(3, 100);

    // Setup observer for dynamic content
    setupMutationObserver();
  }

  // Handle different DOM ready states
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else if (document.readyState === 'interactive') {
    // DOM is partially loaded, wait a bit for CSS
    setTimeout(initialize, 50);
  } else {
    // DOM already loaded, initialize immediately
    initialize();
  }

  // Additional safety: re-initialize on window load (ensures all resources are loaded)
  window.addEventListener('load', function() {
    setTimeout(initializeArrowStates, 200);
  });

})();