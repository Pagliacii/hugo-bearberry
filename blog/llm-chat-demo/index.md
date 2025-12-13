
# LLM Chat Shortcode Demonstration

This post demonstrates the new LLM chat shortcode functionality in Hugo Bearberry theme.

## Simple Q&A Format

Here's a simple question-answer pair with the default LLM icon:

{{< llmchat user="What is Hugo?" response="Hugo is a fast and modern static site generator written in Go. It's designed for speed, ease of use, and building websites quickly." />}}

## Custom LLM Icons

You can specify different LLM provider icons:

### OpenAI
{{< llmchat user="What's the difference between GPT-3 and GPT-4?" response="GPT-4 is more advanced than GPT-3, offering better reasoning capabilities, more nuanced understanding, and improved performance across a wide range of tasks." llm-icon="openai" />}}

### Google Gemini
{{< llmchat >}}
{{< llmchat-message role="user" >}}
How do I optimize my Hugo site for performance?
{{< /llmchat-message >}}
{{< llmchat-message role="assistant" llm-icon="gemini" >}}
To optimize your Hugo site:

1. Use minification
2. Optimize images with proper sizing and format
3. Enable caching with proper headers
4. Use a CDN for static assets
5. Keep your dependencies minimal
{{< /llmchat-message >}}
{{< /llmchat >}}

### DeepSeek
{{< llmchat user="What makes DeepSeek models unique?" response="DeepSeek models are known for their strong reasoning capabilities and cost-effectiveness. They're designed to compete with larger models while maintaining efficient resource usage." llm-icon="deepseek" />}}

### Kimi (Moonshot AI)
{{< llmchat >}}
{{< llmchat-message role="user" >}}
What is Kimi AI good at?
{{< /llmchat-message >}}
{{< llmchat-message role="assistant" llm-icon="kimi" >}}
Kimi AI excels at:
- Long-context understanding (up to 200K tokens)
- Chinese language processing
- Document analysis and summarization
- Code generation and explanation
{{< /llmchat-message >}}
{{< /llmchat >}}

## Multiple Exchanges

For conversations with multiple messages, use the nested format:

{{< llmchat >}}
{{< llmchat-message role="user" >}}
How can I add custom shortcodes to my Hugo theme?
{{< /llmchat-message >}}
{{< llmchat-message role="assistant" llm-icon="claude" thinking="The user wants to add custom shortcodes. I should explain the basic process." >}}
You can add custom shortcodes by creating HTML template files in the `layouts/shortcodes/` directory. Each shortcode is a separate HTML file that Hugo will render when called from your content.

For example, create `layouts/shortcodes/button.html` with your HTML template code.
{{< /llmchat-message >}}
{{< llmchat-message role="user" >}}
What about styling?
{{< /llmchat-message >}}
{{< llmchat-message role="assistant" llm-icon="claude" >}}
Add CSS in your stylesheet to style the shortcode output. You can use Flexoki color variables to match the theme.

Here are the key steps:
- Create your CSS file in the assets directory
- Import it in the main CSS bundle
- Use Flexoki color variables for consistency
- Test with different screen sizes
{{< /llmchat-message >}}
{{< /llmchat >}}

## Foldable Thinking Sections

Notice how the assistant messages above include thinking sections that can be expanded to see the reasoning process. This is useful for educational content or showing AI workflow.

## Folding Long Answers

Both thinking sections and long answers can be folded to keep the page clean. Click to expand:

{{< llmchat >}}
{{< llmchat-message role="user" >}}
Explain how Hugo's static site generation works in detail
{{< /llmchat-message >}}
{{< llmchat-message role="assistant" llm-icon="claude" thinking="The user wants a detailed explanation of Hugo's static site generation process. I should cover the core architecture, build process, templating system, and key features that make Hugo fast and efficient. This is a complex topic that requires understanding of Go-based static site generators, content management, and web performance optimization principles." foldable="true" >}}
Hugo's static site generation is a sophisticated process that transforms raw content into optimized HTML websites. Here's how it works:

**Core Architecture**
Hugo is written in Go and compiled into a single executable. When you run `hugo`, it loads your configuration files, parses content directories, and builds a complete website in memory before writing static files.

**Content Processing Pipeline**
1. **Content Discovery**: Hugo scans your `content/` directory for markdown files and other content types
2. **Front Matter Parsing**: It extracts YAML, TOML, or JSON metadata from file headers
3. **Content Classification**: Files are organized by content type, section, and taxonomy
4. **Markdown Processing**: Content is converted to HTML using Goldmark, Blackfriday, or other configured renderers

**Template Engine**
Hugo uses a powerful templating system that supports:
- Go templates for logic and data manipulation
- Partial templates for reusable components
- Base templates for consistent layouts
- Shortcodes for dynamic content injection
- Custom functions and data transformations

**Asset Pipeline**
- CSS/JS processing with PostCSS, Sass, and bundlers
- Image resizing, optimization, and format conversion
- Resource fingerprinting for cache busting
- Minification and compression for production

**Performance Optimizations**
- Parallel processing of multiple content files
- In-memory caching of templates and assets
- Differential rebuilds during development
- Lazy loading of heavy content

The result is a set of static HTML, CSS, and JavaScript files ready for deployment on any web server.
{{< /llmchat-message >}}
{{< /llmchat >}}

## Foldable Answer Usage

You can make long answers foldable by adding `foldable="true"` parameter:

```hugo
{{</* llmchat user="Complex question?" response="Long answer..." foldable="true" */>}}

{{</* llmchat-message role="assistant" foldable="true" */>}}
Very long content...
{{</* /llmchat-message */>}}
```

This creates a "View Answer..." button that expands to show the full response.

## Custom Thinking Labels

You can customize the thinking section label using the `thinking-label` parameter. This is useful for showing elapsed time:

```hugo
{{</* llmchat-message role="assistant" llm-icon="claude" thinking-label="Thought 8 seconds..." */>}}
  {{</* llmchat-thought */>}}
  The user is asking about thinking labels. I should explain the new syntax and show an example with elapsed time.

  - New `thinking-label` parameter for custom text
  - Shows elapsed time like "Thought 3.2s"
  - Backward compatible (defaults to "Thinking...")
  {{</* /llmchat-thought */>}}
  You can now customize the thinking section label! Use the `thinking-label` parameter to show elapsed time or custom text. For example: "Thought 3.2s" or "Processing..."
{{</* /llmchat-message */>}}
```

Which renders as:

{{< llmchat >}}
{{< llmchat-message role="user" >}}
Can we customize the thinking label?
{{< /llmchat-message >}}
{{< llmchat-message role="assistant" llm-icon="claude" thinking-label="Thought 8 seconds..." >}}
  {{< llmchat-thought >}}
The user is asking about thinking labels. I should explain the new syntax and show an example with elapsed time.

- New `thinking-label` parameter for custom text
- Shows elapsed time like "Thought 3.2s"
- Backward compatible (defaults to "Thinking...")
  {{< /llmchat-thought >}}
You can now customize the thinking section label! Use the `thinking-label` parameter to show elapsed time or custom text. For example: "Thought 3.2s" or "Processing..."
{{< /llmchat-message >}}
{{< /llmchat >}}

## Nested Thought Content

The new `llmchat-thought` shortcode allows you to write multi-line thought content with full markdown support:

```hugo
{{</* llmchat-message role="assistant" thinking-label="Thought 12 seconds..." */>}}
  {{</* llmchat-thought */>}}
  **Analysis:**
  - User wants to understand the implementation
  - Should provide code examples
  - Need to show markdown formatting capabilities

  **Plan:**
  1. Explain the shortcode syntax
  2. Show markdown rendering in thoughts
  3. Provide a concrete example
  {{</* /llmchat-thought */>}}
  The `llmchat-thought` shortcode supports:

  - **Bold** and *italic* text
  - Lists (ordered and unordered)
  - [Links](https://example.com)
  - `inline code`
  - Code blocks
{{</* /llmchat-message */>}}
```

## Supported LLM Icons

The shortcode currently supports these LLM icons:
- `ollama` - Ollama icon (default)
- `claude` - Claude/Anthropic icon
- `openai` - OpenAI/GPT icon
- `gemini` - Google Gemini icon
- `deepseek` - DeepSeek icon
- `kimi` - Kimi (Moonshot AI) icon

You can also use custom image URLs or add new icons by modifying the `layouts/partials/llm-icon.html` partial file.