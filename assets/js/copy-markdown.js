function getMarkdownUrl() {
    const path = window.location.pathname;
    if (path.endsWith('/')) {
        return path + 'index.md';
    } else {
        return path + '.md';
    }
}

function fetchMarkdownContent() {
    const markdownUrl = getMarkdownUrl();
    
    return fetch(markdownUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Markdown file not found');
            }
            return response.text();
        });
}

function copyMarkdown() {
    fetchMarkdownContent()
        .then(text => {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('page copied as markdown to clipboard');
            }).catch(err => {
                showNotification('failed to copy: ' + err);
            });
        })
        .catch(error => {
            showNotification('error: ' + error.message);
        });
}

function viewMarkdown() {
    const markdownUrl = getMarkdownUrl();
    window.open(markdownUrl, '_blank');
}


function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--flexoki-dark-cyan);
        color: var(--flexoki-50);
        padding: 12px 16px;
        border-radius: 4px;
        font-size: 14px;
        z-index: 10000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        animation: fadeInOut 2s ease-in-out;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
        if (style.parentNode) {
            style.parentNode.removeChild(style);
        }
    }, 2000);
}

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
        const selection = window.getSelection();
        if (selection.toString().trim() === '') {
            event.preventDefault();
            copyMarkdown();
        }
    }
});