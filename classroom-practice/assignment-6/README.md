# Assignment 6 - Advanced HTML & CSS Layouts

This assignment focuses on creating responsive web layouts using Flexbox, CSS Grid, and CSS animations. All solutions use pure HTML and CSS without JavaScript or external frameworks.

## Questions Overview

### Q1: Personal Portfolio Webpage (Flexbox)
- **Location**: `q01-personal-portfolio/`
- **Technologies**: HTML5 Semantic Tags, Flexbox
- **Key Features**:
  - Header with name and navigation
  - Two-column main content (About + Image)
  - Responsive design (stacks vertically below 700px)
  - Centered alignment using flexbox

### Q2: Product Gallery (CSS Grid)
- **Location**: `q02-product-gallery/`
- **Technologies**: CSS Grid, Media Queries
- **Key Features**:
  - 4-column grid on desktop
  - 2-column on tablets
  - 1-column on mobile
  - Hover scale effect (1.05)
  - Smooth transitions

### Q3: Homepage Layout (Flexbox)
- **Location**: `q03-homepage-layout/`
- **Technologies**: Flexbox, CSS Transforms
- **Key Features**:
  - Navigation with space-around
  - Three service boxes horizontally aligned
  - Hover rotation effect (2deg)
  - Fully responsive layout

### Q4: Dashboard Layout (CSS Grid)
- **Location**: `q04-dashboard-layout/`
- **Technologies**: CSS Grid, Grid Columns Spanning
- **Key Features**:
  - Header spanning all columns
  - Left sidebar navigation
  - 2x2 grid main content
  - One box spanning 2 columns
  - Hover scale and shadow effects

### Q5: Pricing Section (Flexbox)
- **Location**: `q05-pricing-section/`
- **Technologies**: Flexbox, CSS Animations, Media Queries
- **Key Features**:
  - Three pricing cards aligned horizontally
  - Highlighted middle card
  - Hover transform effect (translateY)
  - Fade-in animation on page load
  - Stacks vertically below 750px

### Q6: Blog Layout (CSS Grid)
- **Location**: `q06-blog-layout/`
- **Technologies**: CSS Grid with Grid Template Areas, Media Queries
- **Key Features**:
  - Header with title and navigation
  - Left sidebar with categories
  - Main content with two blog posts
  - Full-width footer
  - Uses grid-template-areas for structure
  - Sidebar moves below content on mobile

### Q7: Loading Animation
- **Location**: `q07-loading-animation/`
- **Technologies**: CSS Animations, Flexbox
- **Key Features**:
  - Three circles moving up and down
  - Animation delays for each circle
  - Centered using flexbox
  - Infinite animation loop
  - Smooth transitions

### Q8: Photo Gallery (CSS Grid)
- **Location**: `q08-photo-gallery/`
- **Technologies**: CSS Grid with auto-fit, CSS Transforms
- **Key Features**:
  - Responsive grid using auto-fit
  - Image captions using figcaption
  - Hover zoom effect (scale up)
  - Smooth transitions
  - Auto-adjusts to screen size

### Q9: Card Flip Animation (3D Transforms)
- **Location**: `q09-card-flip/`
- **Technologies**: CSS 3D Transforms, Perspective
- **Key Features**:
  - 180-degree flip on hover
  - Front shows title and image
  - Back shows description
  - Uses transform-style: preserve-3d
  - Centered on screen using flexbox

### Q10: Responsive Combined Layout
- **Location**: `q10-responsive-combined/`
- **Technologies**: Flexbox + CSS Grid Combination
- **Key Features**:
  - Flexbox header with logo and navigation
  - 2-column grid layout (article + sidebar)
  - Three boxes using flexbox inside article
  - Full-width footer
  - Fade-in animation on title
  - Single column on mobile

## How to Use

1. Open any question folder (q01 through q10)
2. Each folder contains:
   - `index.html` - HTML structure
   - `style.css` - All styling and animations
3. Open `index.html` in a web browser to view the layout
4. Resize the browser window to see responsive behavior

## Design Principles Used

- **Semantic HTML5**: Using header, main, section, footer, article, aside, nav tags
- **Mobile-First Responsive Design**: Base styles for mobile, media queries for larger screens
- **Flexbox**: Used for 1D layouts (headers, navigation, stacking)
- **CSS Grid**: Used for 2D layouts (product gallery, dashboard, blog)
- **CSS Transforms & Animations**: For interactive effects and animations
- **No External Dependencies**: Pure CSS and HTML only

## Responsive Breakpoints

- **Mobile**: Below 600px - Single column layouts
- **Tablet**: 600px - 800px - Two column or adjusted grids
- **Desktop**: 800px+ - Full multi-column layouts

## Browser Compatibility

All layouts use modern CSS features and work in:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Author Notes

Each question demonstrates different layout techniques and provides a foundation for building responsive web pages. The styling is consistent across all questions with a professional color scheme and smooth transitions.
