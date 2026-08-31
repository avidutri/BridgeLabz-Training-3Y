# Assignment 5 - Advanced HTML & CSS Practice

This assignment contains 10 comprehensive projects demonstrating advanced HTML and CSS concepts. Each project has its own folder with separate HTML and CSS files.

## Projects Overview

### Q1 - Personal Portfolio Homepage (`q01-personal-portfolio/`)
**Key Concepts:**
- Fixed header positioning (`position: fixed`)
- Flexbox layout
- Multiple CSS units (px, em, %, vh, rem)
- Contrast-aware color combinations
- Sticky footer using flexbox
- Responsive design

**Features:**
- Fixed navigation header with smooth hover effects
- Hero section with gradient background
- Profile image with border-radius
- About section with justified text
- Sticky footer at the bottom

---

### Q2 - City Information Webpage (`q02-city-info/`)
**Key Concepts:**
- Linear gradients (`linear-gradient()`)
- Radial gradients (`radial-gradient()`)
- Parallax effect (`background-attachment: fixed`)
- Semantic HTML sections
- Multiple font sizes and weights
- Padding, margin, and border spacing

**Features:**
- Hero section with parallax background
- History section with linear gradient background
- Attractions section with parallax effect
- Culture section with radial gradient
- Culinary section with themed styling
- Sticky navigation menu

---

### Q3 - Team Members Cards (`q03-team-members/`)
**Key Concepts:**
- Flexbox for 3-column layout
- Box Model (padding, margin, border)
- Rounded corners and shadows
- Hover effects and transitions
- Responsive design (single column < 600px)
- Special styling for Team Lead card

**Features:**
- 3-column card layout with flexbox
- Individual profile cards with images
- Hover effects that scale and elevate cards
- Image overlay with zoom on hover
- Team Lead badge with special styling
- Responsive layout for mobile devices

---

### Q4 - Long Article Webpage (`q04-article/`)
**Key Concepts:**
- `::first-letter` pseudo-element (drop cap effect)
- `::first-line` pseudo-element (bold styling)
- `<mark>` element styling
- Blockquote emphasis with borders
- Typography and spacing
- Text justification

**Features:**
- Drop cap effect on paragraph first letters
- Bold first line of each paragraph
- Highlighted keywords with custom mark styling
- Emphasized blockquote section
- Article metadata section
- Responsive typography

---

### Q5 - Pricing Table (`q05-pricing/`)
**Key Concepts:**
- Flexbox for 3-column layout
- Hover effects (scale and elevation)
- CSS transitions for smooth animations
- Equal height cards using flexbox
- Special styling for popular plan
- Responsive design

**Features:**
- Three pricing plan cards
- Hover effects that enlarge cards
- Popular plan with special border and badge
- Smooth transitions on hover
- Feature lists with visual indicators
- CTA buttons with hover effects
- Responsive grid layout

---

### Q6 - CSS Photo Gallery (`q06-gallery/`)
**Key Concepts:**
- Flexbox layout for grid
- Hover effects (`transform: scale()`)
- Caption overlay with `position: absolute` and opacity
- Box-shadow and border-radius
- Responsive columns based on screen width
- Image object-fit

**Features:**
- Flexible image gallery with 8 placeholder images
- Scale animation on hover
- Caption overlay appears on hover
- Responsive column layout (4 cols → 2 cols → 1 col)
- Smooth transitions
- Clean modern styling

---

### Q7 - Contact Form Page (`q07-contact/`)
**Key Concepts:**
- Semantic form elements
- Input focus states (`:focus` selector)
- Centered layout using flexbox
- Consistent color scheme with RGBA
- Border-radius and box-shadow
- Form validation styling

**Features:**
- Centered contact form with CSS
- Semantic HTML form structure
- Input fields with focus state styling
- Contact information sidebar
- CTA button with hover effects
- Form and contact info side-by-side layout
- Responsive single column on mobile

---

### Q8 - Dashboard Layout (`q08-dashboard/`)
**Key Concepts:**
- Fixed header positioning
- Sidebar with full screen height
- Flexbox for main layout
- Responsive design (sidebar stacks on mobile)
- Box shadows and spacing
- Content grid layout

**Features:**
- Fixed header at top
- Sidebar with navigation menu
- Main content area with metrics cards
- Hover effects on content boxes
- Responsive layout (stacks on < 768px)
- Navigation links with active state
- Professional dashboard styling

---

### Q9 - Magazine Column Layout (`q09-columns/`)
**Key Concepts:**
- CSS columns (`column-count`, `column-gap`)
- `column-span: all` for spanning elements
- `float` for image alignment
- Text justification for newspaper style
- Orphans and widows control
- Responsive column adjustment

**Features:**
- 3-column text layout for large screens
- 2-column layout for tablets
- 1-column layout for mobile
- Featured image floated to left
- Justified text for professional appearance
- Column dividers with rules
- Responsive column count adjustment

---

### Q10 - Complete Webpage Masterpiece (`q10-complete-webpage/`)
**Key Concepts:**
- Sticky positioning (`position: sticky`)
- Flexbox and CSS Grid
- Margin, padding, border, outline properties
- Linear and radial gradients
- RGBA colors with transparency
- Relative and absolute positioning
- Multiple responsive breakpoints

**Features:**
- Sticky navigation header
- Hero section with parallax background
- About section with 2-column grid
- Services section with 3 equal columns
- Contact form section
- Footer with animated heart icon
- Comprehensive responsive design
- Professional styling with transitions

---

## General Features Across All Projects

### CSS Techniques Demonstrated:
✓ Positioning (fixed, sticky, absolute, relative)
✓ Flexbox layout
✓ CSS Grid
✓ Gradients (linear and radial)
✓ Transitions and transforms
✓ Pseudo-elements (::first-letter, ::first-line, ::before, ::after)
✓ Pseudo-classes (:hover, :focus, :active)
✓ Box Model (margin, padding, border, outline)
✓ Colors (hex, RGB, RGBA)
✓ Typography and font sizing
✓ Responsive design with media queries

### Responsive Design:
- Desktop (1200px+)
- Tablets (768px - 1024px)
- Mobile (480px - 768px)
- Extra small devices (< 480px)

### Accessibility Features:
- Semantic HTML elements
- Proper heading hierarchy
- Color contrast compliance
- Focus states for interactive elements
- Alt text for images
- Form labels associated with inputs

---

## How to View

To view any project:
1. Navigate to the project folder (e.g., `q01-personal-portfolio/`)
2. Open the `index.html` file in your web browser
3. The CSS file (`style.css`) is automatically linked

All projects are responsive and work best when viewed in modern browsers:
- Chrome
- Firefox
- Safari
- Edge

---

## Browser Compatibility

All projects use standard CSS3 features with excellent browser support:
- Flexbox: IE 11+, all modern browsers
- CSS Grid: IE 10+, all modern browsers
- Gradients: All modern browsers
- CSS Columns: All modern browsers
- Transform and Transitions: All modern browsers

---

## Best Practices Implemented

1. **Semantic HTML** - Proper use of `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`
2. **CSS Organization** - Well-commented code with logical sections
3. **Responsive Design** - Mobile-first approach with multiple breakpoints
4. **Performance** - Optimized CSS with minimal repaints and reflows
5. **Accessibility** - Semantic markup and proper color contrast
6. **DRY Principle** - Reusable CSS classes and components
7. **Consistency** - Uniform spacing, colors, and typography

---

## File Structure

```
assignment-5/
├── q01-personal-portfolio/
│   ├── index.html
│   └── style.css
├── q02-city-info/
│   ├── index.html
│   └── style.css
├── q03-team-members/
│   ├── index.html
│   └── style.css
├── q04-article/
│   ├── index.html
│   └── style.css
├── q05-pricing/
│   ├── index.html
│   └── style.css
├── q06-gallery/
│   ├── index.html
│   └── style.css
├── q07-contact/
│   ├── index.html
│   └── style.css
├── q08-dashboard/
│   ├── index.html
│   └── style.css
├── q09-columns/
│   ├── index.html
│   └── style.css
├── q10-complete-webpage/
│   ├── index.html
│   └── style.css
└── README.md
```

---

## Key Learnings

This assignment covers:
1. **Advanced Positioning** - Fixed, sticky, absolute, relative
2. **Layout Systems** - Flexbox vs Grid, when to use each
3. **Responsive Design** - Mobile-first approach, media queries
4. **Visual Effects** - Gradients, shadows, transitions
5. **Typography** - Font sizing units, line heights, spacing
6. **Forms** - Semantic form elements, focus states
7. **Pseudo-elements** - Creating effects without extra HTML
8. **Performance** - Optimized CSS practices
9. **Accessibility** - Semantic HTML, color contrast, focus states
10. **Professional Design** - Clean, modern layouts with consistency

---

## Notes

- All projects use **no JavaScript** as per requirements
- All projects use **no external frameworks** (only vanilla HTML and CSS)
- Placeholder images are used from placeholder services
- Forms are non-functional (no backend processing)
- All CSS is organized with comments for clarity

---

## Author
Created as part of BridgeLabz Training Program - Assignment 5

Last Updated: August 31, 2024
