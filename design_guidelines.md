# Design Guidelines: MERN Developer Portfolio

## Design Approach
**Reference-Based**: Drawing inspiration from Linear's sophisticated interactions, Apple's minimalism, and award-winning developer portfolios (Awwwards, Dribbble). Focus on creating a memorable first impression with subtle but impactful animations that demonstrate technical sophistication without overwhelming content.

## Typography Hierarchy
- **Primary Font**: Google Fonts "Inter" (headings, UI elements)
- **Secondary Font**: Google Fonts "JetBrains Mono" (code snippets, technical details)

**Scale**:
- Hero headline: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section headers: text-4xl md:text-5xl, font-bold
- Subsections: text-2xl md:text-3xl, font-semibold
- Body text: text-base md:text-lg, leading-relaxed
- Captions/labels: text-sm, font-medium

## Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Component spacing: space-y-12 md:space-y-16
- Card padding: p-8
- Button padding: px-8 py-4

**Container Strategy**:
- Hero: Full viewport width with max-w-7xl inner content
- Content sections: max-w-6xl mx-auto
- Project cards: Grid with gap-8

## Core Sections & Components

### 1. Hero Section (Full viewport, 100vh)
- **Background**: Animated gradient mesh or particle system using Canvas API
- **Content**: Centered layout with animated typing effect for name/title
- **Primary CTA**: "View My Work" (smooth scroll to projects)
- **Secondary Element**: Scroll indicator with animated bounce
- **Image**: Abstract tech-themed background or geometric patterns overlaying gradient

### 2. Skills Showcase
- **Layout**: 3-column grid (lg) → 2-column (md) → 1-column (mobile)
- **MERN Stack Highlight**: Dedicated cards with MongoDB, Express, React, Node.js logos (use Font Awesome or Simple Icons via CDN)
- **Animation**: Staggered fade-in on scroll, subtle hover lift effect (transform: translateY(-4px))
- **Additional Skills**: Secondary grid showing complementary technologies
- **Visual Treatment**: Glassmorphism cards with backdrop-blur

### 3. Projects Gallery
- **Layout**: Masonry-style grid or uniform 2-column cards
- **Each Card Contains**:
  - Project thumbnail image (use placeholder: "Screenshot of [project name] showing [main feature]")
  - Tech stack badges (small pills with icons)
  - Title and brief description
  - "View Details" link
- **Interaction**: Card hover reveals additional info overlay, click opens detailed modal
- **Modal**: Full-screen overlay with project images carousel, detailed description, tech stack, GitHub/live links

### 4. About/Experience Section
- **Layout**: Two-column (lg) split: professional headshot left, content right
- **Timeline Component**: Vertical timeline with animated progress line revealing on scroll
- **Content**: 2-year journey narrative, education, key achievements
- **Animation**: Fade-in timeline items as user scrolls

### 5. Contact Section
- **Layout**: Split design - contact form (60%) and info sidebar (40%)
- **Form Fields**: Name, email, message with floating labels
- **Sidebar**: Email, LinkedIn, GitHub links with icon animations on hover
- **CTA**: "Let's Build Something" primary button
- **Background**: Subtle gradient or mesh pattern

### 6. Navigation
- **Desktop**: Fixed top navigation with blur backdrop, logo left, menu items right
- **Mobile**: Hamburger menu with full-screen overlay transition
- **Scroll Behavior**: Hide on scroll down, reveal on scroll up
- **Links**: Smooth scroll to sections with offset

## Animation Strategy

**Core Animations** (Use Framer Motion library):
- **Hero**: Staggered entrance animations for text elements, continuous subtle gradient shift
- **Scroll Reveals**: Fade-in + slide-up for sections (use IntersectionObserver)
- **Project Cards**: Hover scale (1.02), lift shadow, overlay fade-in
- **Skill Icons**: Rotate on hover, pulse on initial load
- **Page Load**: Sequential reveal of sections (200ms stagger)
- **Theme Toggle**: Smooth color transition with loading state

**Performance**: Use `will-change` sparingly, prefer `transform` and `opacity` for animations, lazy load images below fold.

## Component Library

**Buttons**:
- Primary: Rounded-lg, text-base, font-semibold, transition-all
- Secondary: Outlined variant with hover fill
- Ghost: Transparent with hover background

**Cards**:
- Base: Rounded-xl with subtle shadow, backdrop-blur-sm for glassmorphism
- Hover state: Elevated shadow, subtle border glow

**Form Inputs**:
- Rounded-md borders, focus:ring-2 state
- Floating labels that animate on focus/fill

**Icons**: Font Awesome 6 (via CDN) for UI, Simple Icons for tech logos

## Images

**Hero Section**: 
- Large background image: Abstract tech visualization, code patterns, or geometric shapes (full-bleed, 100vw x 100vh)
- Treatment: Overlay with dark gradient (opacity 60-70%) for text readability

**Project Thumbnails**: 
- Screenshots of actual projects showing UI/dashboard views
- Aspect ratio: 16:9, rounded corners (rounded-lg)
- Fallback: Gradient placeholder with project icon

**About Section**:
- Professional headshot (square or circular crop, 400x400px)

## Responsive Breakpoints
- Mobile: Base styles (single column, stacked layout)
- Tablet (md: 768px): 2-column grids, larger text
- Desktop (lg: 1024px): Multi-column layouts, full navigation
- Large (xl: 1280px): Maximum container widths, enhanced spacing

## Accessibility
- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels for icon buttons and interactive elements
- Keyboard navigation support for all interactive components
- Focus visible states with ring utilities
- Reduced motion media query respect for animations

This design creates a professional, technically impressive portfolio that demonstrates both design sensibility and development expertise—exactly what hiring managers seek in a MERN stack developer.