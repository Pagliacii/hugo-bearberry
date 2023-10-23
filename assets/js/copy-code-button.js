const langColors = {
    "python": "#3572A5",
    "css": "#563d7c",
    "cpp": "#f34b7d",
    "c": "#f2f0e5",
    "go": "#00ADD8",
    "javascript": "#f1e05a",
    "html": "#e34c26",
    "rust": "#dea584",
    "bash": "#89e051",
};

function getLanguageColor(language) {
    let color = langColors[language];
    if (color === undefined) {
        color = "#f2f0e5";
    }
    return color;
}

function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        let codeLang = 'text'; 

        if(codeBlock.className) {
          const classes = codeBlock.className.split('-');
          if(classes.length > 1) {
            codeLang = classes[1];
          }
        }

        if (codeLang === 'mermaid') {
          return;
        }

        const codeBar = document.createElement('div');
        codeBar.className = 'code-bar';

        const langSpan = document.createElement('span');
        langSpan.className = 'lang';
        langSpan.innerText = codeLang;
        langSpan.style.color = getLanguageColor(codeLang);

        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';

        button.addEventListener('click', function () {
            // Select only code content spans  
            const codeSpans = codeBlock.querySelectorAll('span.cl');
            // Map to text
            const codeLines = [...codeSpans]
                .map(span => span.innerText)
                .join('');
            clipboard.writeText(codeLines).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerText = 'Copied!';

                setTimeout(function () {
                    button.innerText = 'Copy';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });

        codeBar.appendChild(langSpan);
        codeBar.appendChild(button);
        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(codeBar, highlight);
        } else {
            pre.parentNode.insertBefore(codeBar, pre);
        }
    });
}

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/4.0.1/es6/clipboard-polyfill.es6.min.js';
    script.integrity = 'sha512-l0g4XW6dh+74a1XAlIIl76coRHPeYo8rzjITkvqoyh1nycszyg+nD4DuOuvc5sBc6kPSrkfCsxJG7c8bbmPMsA==';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}
