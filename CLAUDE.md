# CLAUDE.md - AI Assistant Guide

## Repository Overview

This is **raihanniloy.github.io**, a GitHub Pages repository hosting multiple demo web projects and a Bengali font resource. The repository serves as a portfolio/demonstration site with various standalone web projects.

**Repository Type:** Static GitHub Pages site
**Primary Language:** HTML, CSS
**Last Updated:** 2025-11-14
**Branch:** `claude/claude-md-mhyjq8stxcn5k47h-01FyfP8yYVPyTM4984RuAni1`

---

## Directory Structure

```
raihanniloy.github.io/
├── Dummy Website/          # Gaming workshop demo site
│   ├── css/
│   │   └── style.css      # Main stylesheet with responsive design
│   └── index.html         # "Gamers Workshop" landing page
│
├── dummy carousel/         # Bootstrap carousel demo
│   └── index.html         # Dota 2 character image carousel
│
├── dota slide/            # Image assets for carousel
│   ├── lesh.jpg
│   ├── mirana.jpg
│   ├── slardar.jpg
│   ├── clings.jpg
│   ├── phantom.jpg
│   ├── cm.jpg
│   └── [other images]
│
└── fluente/               # Bengali font hosting
    ├── nikosh.css         # @font-face declaration for Nikosh font
    └── fonts/
        ├── Nikosh.ttf     # TrueType font (592KB)
        ├── Nikosh.woff    # Web font (273KB)
        └── Nikosh.woff2   # Web font 2.0 (196KB)
```

---

## Project Components

### 1. Gamers Workshop (`Dummy Website/`)

**Purpose:** Demo landing page for a gaming-themed business

**Key Features:**
- Responsive design with mobile breakpoint at 768px
- Navigation header with Home, Games, About links
- Newsletter subscription form
- Three-column layout showcasing games (Dota 2, League of Legends, CS:GO)
- Custom styling with gaming theme colors

**Technology Stack:**
- Vanilla HTML5
- Custom CSS with responsive media queries
- No JavaScript frameworks

**File Reference:** `Dummy Website/index.html:1`, `Dummy Website/css/style.css:1`

### 2. Dota 2 Carousel (`dummy carousel/`)

**Purpose:** Bootstrap-powered image carousel showcasing Dota 2 characters

**Key Features:**
- 6 character slides (Leshrac, Mirana, Slardar, Clings, Phantom Assassin, Crystal Maiden)
- Bootstrap 4.2.1 carousel component
- Previous/Next navigation controls
- Slide indicators

**Technology Stack:**
- Bootstrap 4.2.1 (CDN)
- jQuery 3.3.1 (CDN)
- Popper.js 1.14.6 (CDN)

**Known Issues:**
- Line 73, 78: Carousel navigation uses `#DotaCarousel` but carousel ID is `dotaCarousel` (case mismatch)
- Line 78: Next button has `data-slide="prev"` instead of `data-slide="next"`

**File Reference:** `dummy carousel/index.html:15`

### 3. Nikosh Bengali Font (`fluente/`)

**Purpose:** CDN-style hosting for Nikosh Bengali font

**Key Features:**
- Multi-format font support (WOFF2, WOFF, TTF)
- Publicly accessible via GitHub Pages URL
- Optimized font sizes (WOFF2 is smallest at 196KB)

**Usage Example:**
```css
@import url('https://raihanniloy.github.io/fluente/nikosh.css');
body {
    font-family: 'Nikosh', sans-serif;
}
```

**File Reference:** `fluente/nikosh.css:1`

---

## Development Workflows

### Working with This Repository

1. **No Build Process Required**
   - All projects are static HTML/CSS
   - Changes are directly viewable by opening HTML files in browser
   - No npm install, webpack, or compilation steps needed

2. **Testing Changes Locally**
   ```bash
   # Option 1: Open HTML files directly in browser
   open "Dummy Website/index.html"

   # Option 2: Start a local server (if available)
   python3 -m http.server 8000
   # Then navigate to http://localhost:8000/
   ```

3. **GitHub Pages Deployment**
   - Changes pushed to main branch are automatically deployed
   - Site accessible at: `https://raihanniloy.github.io/`
   - Individual projects accessible via subdirectories

### Making Changes

**For HTML Files:**
- Maintain existing DOCTYPE and meta tags
- Preserve responsive viewport meta tag
- Keep consistent indentation (4 spaces)

**For CSS Files:**
- Follow existing naming conventions (kebab-case for classes)
- Maintain responsive design patterns
- Test at mobile breakpoint (768px)

**For New Projects:**
- Create new subdirectory at root level
- Include standalone index.html
- Place assets (CSS, images) in subdirectories
- Update this CLAUDE.md file

---

## Key Conventions

### HTML Standards
- HTML5 DOCTYPE
- UTF-8 character encoding
- Semantic HTML structure
- Responsive viewport meta tag
- IE compatibility tag included

### CSS Standards
- External stylesheets preferred
- Mobile-first responsive design
- Media queries for viewport < 768px
- BEM-like naming for specificity

### File Naming
- Directories: Title Case with spaces (e.g., `Dummy Website`)
- HTML files: lowercase (e.g., `index.html`)
- CSS files: lowercase (e.g., `style.css`)
- Images: lowercase with extensions (e.g., `mirana.jpg`)

### Color Scheme (Gamers Workshop)
- Primary: `rgb(28, 113, 240)` - Blue
- Secondary: `rgb(85, 5, 74)` - Purple
- Accent: `yellow`
- Background: `whitesmoke`
- Header: Black with background image

---

## Common Tasks for AI Assistants

### Adding a New Demo Project

1. Create new directory at repository root
2. Include `index.html` as entry point
3. Organize assets in subdirectories (`css/`, `js/`, `img/`)
4. Test responsiveness at 768px breakpoint
5. Update CLAUDE.md with project description

### Fixing Responsive Issues

**Test at these breakpoints:**
- Desktop: > 768px
- Mobile: ≤ 768px

**Common patterns:**
```css
@media(max-width: 768px) {
    /* Reset floats */
    .element { float: none; }

    /* Full width */
    .element { width: 100%; }

    /* Center text */
    .element { text-align: center; }
}
```

### Updating the Nikosh Font

**If adding new font formats:**
1. Add font file to `fluente/fonts/`
2. Update `fluente/nikosh.css` with new @font-face src
3. Maintain order: WOFF2, WOFF, TTF (best to worst)
4. Test cross-browser compatibility

### Working with Images

**Current image hosting:**
- All carousel images in `dota slide/`
- Referenced relatively from `dummy carousel/index.html`

**Adding new images:**
1. Optimize for web (compress, resize)
2. Use descriptive filenames
3. Maintain consistent format (JPG for photos, PNG for graphics)

---

## Git Workflow

### Current Branch
`claude/claude-md-mhyjq8stxcn5k47h-01FyfP8yYVPyTM4984RuAni1`

### Recent Commit History
- `91246ee` - ttf file added
- `0284c40` - Nikosh Kalo Adhar
- `e3df8b6` - Rename carousel.html to index.html
- `f8db628` - Delete _config.yml
- `820a674` - Delete carousel.html

### Commit Message Style
- Concise, descriptive messages
- No consistent convention (varies from technical to casual)
- Recommended: Use conventional commits (feat:, fix:, docs:, etc.)

### Pushing Changes
```bash
# Always push to branch with 'claude/' prefix
git push -u origin claude/claude-md-mhyjq8stxcn5k47h-01FyfP8yYVPyTM4984RuAni1
```

---

## Known Issues and Technical Debt

### Carousel Navigation Bug
**Location:** `dummy carousel/index.html:73-81`

**Issue 1 - Case Mismatch:**
```html
<!-- Line 15: Carousel ID -->
<div id="dotaCarousel" class="carousel slide">

<!-- Lines 73, 78: Navigation targets (WRONG CASE) -->
<a href="#DotaCarousel" role="button">
```

**Fix:** Change `#DotaCarousel` to `#dotaCarousel` (lowercase 'd')

**Issue 2 - Next Button Direction:**
```html
<!-- Line 78: Next button with wrong data-slide -->
<a class="carousel-control-next" href="#DotaCarousel"
   role="button" data-slide="prev">
```

**Fix:** Change `data-slide="prev"` to `data-slide="next"`

### Missing Navigation Pages
**Location:** `Dummy Website/index.html:28-32`

**Issue:** Navigation links reference non-existent pages:
- `games.html` - Does not exist
- `about.html` - Does not exist

**Options:**
1. Create placeholder pages
2. Convert to single-page app with anchor links
3. Remove non-functional navigation items

### External Dependencies
**Location:** `dummy carousel/index.html:8-11`

**Issue:** Relies on external CDNs for critical functionality
- Bootstrap 4.2.1 (outdated version from 2019)
- jQuery 3.3.1 (outdated version from 2018)
- Popper.js 1.14.6

**Considerations:**
- CDN availability depends on external service
- Outdated versions may have security vulnerabilities
- Consider upgrading to Bootstrap 5 (no jQuery dependency)

---

## Dependencies and External Resources

### CDN Resources Used
| Library | Version | Used In | Purpose |
|---------|---------|---------|---------|
| Bootstrap | 4.2.1 | dummy carousel | CSS framework, carousel component |
| jQuery | 3.3.1 | dummy carousel | Bootstrap dependency |
| Popper.js | 1.14.6 | dummy carousel | Bootstrap tooltip/popover positioning |

### Self-Hosted Resources
- Nikosh Bengali font (3 formats)
- Dota 2 character images (9 JPG files)
- Gaming-themed background images (referenced in CSS)

### Missing Resources
**Referenced but not found:**
- `Dummy Website/img/head.png` - Referenced in `css/style.css:34`
- `Dummy Website/img/ags.png` - Referenced in `css/style.css:73`
- `Dummy Website/img/Dota2.png` - Referenced in `index.html:63`
- `Dummy Website/img/lol.png` - Referenced in `index.html:68`
- `Dummy Website/img/CS.png` - Referenced in `index.html:73`

---

## Testing Checklist

### Before Committing Changes

- [ ] Test HTML syntax validity (W3C validator)
- [ ] Test CSS syntax validity
- [ ] Verify responsive behavior at 768px breakpoint
- [ ] Test on mobile device or browser DevTools
- [ ] Check all links and navigation
- [ ] Verify image paths and loading
- [ ] Test cross-browser (Chrome, Firefox, Safari)
- [ ] Validate font loading for Nikosh font
- [ ] Check console for JavaScript errors (carousel page)

### Before Pushing to GitHub

- [ ] Verify git status is clean
- [ ] Review all changed files
- [ ] Write descriptive commit message
- [ ] Push to correct branch (claude/*)
- [ ] Verify GitHub Pages deployment after push

---

## Best Practices for AI Assistants

### When Analyzing This Codebase

1. **Always check for missing assets** - Many images are referenced but not present
2. **Test responsive behavior** - Mobile breakpoint at 768px is critical
3. **Maintain simplicity** - No build process exists; keep it that way unless requested
4. **Preserve existing structure** - Each demo is self-contained
5. **Update this file** - Keep CLAUDE.md current with any changes

### When Making Changes

1. **Read before writing** - Always use Read tool before Edit/Write tools
2. **Preserve indentation** - 4 spaces for HTML/CSS
3. **Test locally first** - Open files in browser before committing
4. **Document decisions** - Update CLAUDE.md with rationale for significant changes
5. **Maintain backward compatibility** - External sites may link to font CSS

### When Adding Features

1. **Consider static nature** - No server-side processing available
2. **Minimize dependencies** - Avoid adding npm packages or build tools unless necessary
3. **Optimize assets** - Compress images, minify CSS if file sizes grow
4. **Test GitHub Pages deployment** - Verify paths work in production environment
5. **Update documentation** - Add new projects to this file

### Security Considerations

1. **No user input processing** - All forms are non-functional (no backend)
2. **External CDN risks** - Consider SRI (Subresource Integrity) for CDN resources
3. **Font licensing** - Verify Nikosh font can be redistributed
4. **Image copyrights** - Dota 2 images may have trademark/copyright restrictions

---

## Troubleshooting

### Carousel Not Working
- **Check:** Browser console for JavaScript errors
- **Verify:** Bootstrap and jQuery are loading from CDN
- **Fix:** Correct ID mismatch in navigation links (see Known Issues)

### Font Not Loading
- **Check:** Network tab for 404 errors
- **Verify:** Font file paths in `fluente/nikosh.css`
- **Test:** Direct URL access to font files
- **Note:** GitHub Pages may take a few minutes to deploy changes

### Responsive Layout Breaking
- **Check:** CSS media query syntax
- **Verify:** Viewport meta tag is present
- **Test:** Browser DevTools responsive design mode
- **Reference:** `Dummy Website/css/style.css:123-149` for working example

### Images Not Displaying
- **Check:** File paths are case-sensitive on GitHub Pages
- **Verify:** Images exist in repository
- **Fix:** Add missing images or remove references
- **Note:** Many images in `Dummy Website/img/` are missing

---

## Future Improvements

### High Priority
1. Fix carousel navigation bugs
2. Add missing image assets for Gamers Workshop
3. Create missing navigation pages (games.html, about.html)
4. Update Bootstrap to version 5 (remove jQuery dependency)

### Medium Priority
1. Add SRI hashes to CDN resources for security
2. Optimize image file sizes (some are 500KB+)
3. Create a root index.html to showcase all demos
4. Add meta descriptions and Open Graph tags for SEO

### Low Priority
1. Convert to modern CSS Grid/Flexbox layout
2. Add dark mode support
3. Implement progressive web app features
4. Add automated accessibility testing

---

## Additional Resources

### Documentation
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Bootstrap 4 Documentation](https://getbootstrap.com/docs/4.2/)
- [HTML5 Specification](https://html.spec.whatwg.org/)

### Tools for Development
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [TinyPNG](https://tinypng.com/) - Image compression

### Font Resources
- [Google Fonts](https://fonts.google.com/)
- [Font Squirrel](https://www.fontsquirrel.com/) - Free fonts and webfont generator

---

## Contact and Maintenance

**Repository Owner:** raihanniloy
**Repository URL:** `raihanniloy.github.io`
**Last Updated:** 2025-11-14
**Maintained By:** AI Assistant (Claude)

---

## Version History

### v1.0.0 - 2025-11-14
- Initial CLAUDE.md creation
- Documented existing codebase structure
- Identified known issues and technical debt
- Established conventions and best practices
- Created comprehensive guide for AI assistants

---

## Notes for Future AI Assistants

This repository is straightforward but has some quirks:

1. **It's genuinely static** - No build process, no fancy tooling, just HTML/CSS
2. **Multiple standalone demos** - Each directory is independent
3. **Some broken references** - Many images are missing but referenced in code
4. **Outdated dependencies** - Bootstrap 4.2.1 and jQuery 3.3.1 are from 2018-2019
5. **GitHub Pages hosting** - Changes go live automatically when pushed to main branch

When working with this repository, prioritize simplicity and maintain the existing structure unless explicitly asked to refactor. The owner seems to use this as a learning/demo space rather than a production website.

**Most Important:** Always update this CLAUDE.md file when making significant changes to keep documentation current for future interactions.
