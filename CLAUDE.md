# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Commands
- **Build**: Run `hugo` to build the site for production.
- **Development Server**: Run `hugo server --source ./exampleSite --themesDir ../.. --disableFastRender` to start local development server.
- **Clean Build**: Run `hugo --cleanDestinationDir` to remove old files before building.
- **Draft Content**: Run `hugo server -D --source ./exampleSite --themesDir ../..` to include draft posts.
- **Multilingual Build**: Run `hugo --source ./exampleSite --themesDir ../.. --buildDrafts=false` for production builds.

### Testing & Validation
- **Link Checking**: No automated link checker configured - manually verify links work.
- **HTML Validation**: Check generated HTML in `exampleSite/public/` directory.
- **Theme Testing**: Test across different content types in `exampleSite/content/`.

IMPORTANT: Always test theme changes using the exampleSite before considering them complete.

## Code Style Guidelines

### Hugo Templates
- Use semantic HTML5 elements in layouts
- Follow Hugo's template syntax conventions
- Keep partials focused and reusable
- Use descriptive variable names in templates

### CSS/SCSS
- Follow BEM naming convention for CSS classes
- Keep styles modular and organized
- Use CSS custom properties for theming
- Maintain responsive design principles

### Content Structure  
- Use consistent front matter fields across content types
- Follow Hugo's content organization best practices
- Maintain multilingual content parity when applicable

YOU MUST: Follow the existing code patterns and conventions found in the theme files.

## Workflow Instructions

### Development Setup
1. Clone the repository with submodules: `git clone --recursive [repo-url]`
2. Navigate to exampleSite: `cd exampleSite`
3. Start development server with theme path properly configured
4. Make changes in parent theme directories, not in exampleSite

### Content Development
- Create new posts in `exampleSite/content/blog/`
- Use existing posts as templates for front matter structure
- Test multilingual features with both English and Chinese content
- Verify all shortcodes work correctly before publishing

### Theme Modification Process
1. Make changes in `layouts/`, `assets/`, or `static/` directories
2. Test changes immediately using the development server
3. Verify responsive design on multiple screen sizes
4. Check both light and dark themes if applicable
5. Test all interactive features (TOC, copy buttons, comments)

IMPORTANT: Never modify files in `exampleSite/public/` - these are generated files.

### Upstream Syncing
This repository is a fork of `clente/hugo-bearcub`. To sync with upstream changes:

1. **Fetch upstream changes**: `git fetch upstream`
2. **Switch to main branch**: `git checkout main`
3. **Merge upstream changes**: `git merge upstream/main`
4. **Resolve conflicts** (if any):
   - Review conflicted files carefully
   - Preserve local customizations while integrating upstream improvements
   - Pay special attention to theme files that may have been locally modified
5. **Test changes thoroughly**:
   - Run development server: `hugo server --source ./exampleSite --themesDir ../.. --disableFastRender`
   - Test all theme features (math rendering, diagrams, comments, multilingual)
   - Verify responsive design and both light/dark themes
6. **Commit merge** (if not auto-committed): `git commit -m "Merge upstream changes from hugo-bearcub"`
7. **Push changes**: `git push origin main`

**Important Notes:**
- Always test the exampleSite after merging upstream changes
- Review changes carefully as upstream modifications may affect local customizations
- Consider creating a backup branch before major upstream merges
- The upstream remote should point to: `git@github.com:clente/hugo-bearcub.git`

## Project-Specific Information

### Key Files and Directories
- `layouts/partials/`: Contains reusable template components
- `layouts/shortcodes/`: Custom shortcodes for enhanced content
- `assets/`: CSS, JS, and other assets that need processing
- `static/`: Static files served directly (fonts, images)
- `i18n/`: Translation files for multilingual support
- `exampleSite/`: Demo site for testing and documentation

### Theme Features
- **Math Rendering**: Supports both KaTeX and MathJax (configured per post)
- **Diagrams**: Mermaid.js and Kroki integration for various diagram types
- **Comments**: Giscus integration for GitHub-based commenting
- **Multilingual**: Full Chinese and English support
- **Social Cards**: Dynamic social media card generation
- **SEO**: Built-in SEO optimizations and meta tags

### Configuration Files
- `theme.toml`: Theme metadata and feature declarations
- `exampleSite/config.toml`: Example configuration showing all options
- `i18n/*.toml`: Translation strings for UI elements

## Important Warnings and Behaviors

### Critical Behaviors
- The theme uses Hugo's image processing - changes to images require server restart
- Kroki diagrams are fetched from external service - requires internet connection
- Social card generation happens at build time, not runtime
- Multilingual URLs follow Hugo's default structure (`/en/`, `/zh/`)

### Common Issues
- **Giscus comments**: Require proper repository and category configuration
- **Math rendering**: Only one math renderer (KaTeX or MathJax) per page
- **Diagram caching**: Kroki diagrams are cached - clear Hugo cache if diagrams don't update
- **Asset pipeline**: Changes to CSS/JS in `assets/` require server restart

### Dependencies
- Hugo Extended version required (for SCSS processing)
- Internet connection needed for Kroki diagrams and external CDN resources
- Git submodule structure must be maintained for proper theme updates

YOU MUST: Test the development server and build process after any theme modifications to ensure nothing is broken.

## Repository Etiquette

### Branch Strategy
- Main branch contains stable theme code
- Create feature branches for significant changes
- Test thoroughly in exampleSite before merging

### Commit Guidelines
- Use conventional commit format when possible
- Include both English and Chinese content updates when applicable
- Test builds locally before pushing changes

IMPORTANT: Always verify that the exampleSite builds and serves correctly after making changes.
