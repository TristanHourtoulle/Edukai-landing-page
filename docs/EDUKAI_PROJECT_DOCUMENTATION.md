# Edukai Project Documentation 🐧

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Design System](#design-system)
4. [Color Palette](#color-palette)
5. [Typography](#typography)
6. [Layout Patterns](#layout-patterns)
7. [Component Library](#component-library)
8. [Project Structure](#project-structure)
9. [Features](#features)
10. [Team & Contact](#team--contact)
11. [Development Guidelines](#development-guidelines)

---

## Project Overview

**Edukai** is an innovative educational platform dedicated to auto-generating quizzes and revision sheets from course content provided in various formats (PDF, image, text, Word, etc.). The platform aims to simplify the creation of personalized revision material, helping students focus on learning while reducing time spent preparing study materials.

### Core Mission
- **Simplify Learning**: Make exam preparation simple, fast, and efficient
- **Auto-Generation**: Transform any course content into interactive quizzes and revision sheets
- **Student-Focused**: Help students concentrate on learning rather than material preparation

---

## Technology Stack

### Frontend Framework
- **Next.js 14.2.16** - React framework with App Router
- **TypeScript 5.6.3** - For type safety and better developer experience
- **React 18** - UI library

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **ShadCN UI** - High-quality, customizable components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon library

### Key Dependencies
- **React Hook Form** - Form management with validation
- **Zod** - Schema validation
- **Axios** - HTTP client
- **Next Themes** - Dark/light mode support
- **Sonner** - Toast notifications
- **Tesseract.js** - OCR for image text extraction

---

## Design System

### Component Architecture
The project uses **ShadCN UI** with the "New York" style variant, providing:
- **Consistent Design Language**: Modern, clean, and professional
- **Accessibility First**: Built on Radix UI primitives
- **Customizable**: CSS variables for easy theming
- **TypeScript Native**: Full type safety

### Design Principles
1. **Clean & Modern**: Minimalist design with focus on content
2. **Accessible**: WCAG compliant components
3. **Responsive**: Mobile-first approach
4. **Consistent**: Unified spacing, typography, and color usage
5. **User-Friendly**: Intuitive navigation and clear visual hierarchy

---

## Color Palette

### Light Theme
```css
--background: 220 20% 97%;           /* #f8fafc */
--foreground: 240 10% 3.9%;         /* #0f172a */
--card: 0 0% 100%;                  /* #ffffff */
--primary: 240 5.9% 10%;            /* #0f172a */
--secondary: 240 4.8% 95.9%;        /* #f1f5f9 */
--muted: 240 4.8% 95.9%;            /* #f1f5f9 */
--accent: 240 4.8% 95.9%;           /* #f1f5f9 */
--destructive: 0 84.2% 60.2%;       /* #ef4444 */
--border: 240 5.9% 90%;             /* #e2e8f0 */
--input: 240 5.9% 90%;              /* #e2e8f0 */
--ring: 240 5.9% 10%;               /* #0f172a */
```

### Dark Theme
```css
--background: 240 5.9% 7.5%;        /* #0f172a */
--foreground: 0 0% 98%;             /* #fafafa */
--card: 240 10% 3.9%;               /* #1e293b */
--primary: 0 0% 98%;                /* #fafafa */
--secondary: 240 3.7% 15.9%;        /* #334155 */
--muted: 240 3.7% 15.9%;            /* #334155 */
--accent: 240 3.7% 15.9%;           /* #334155 */
--destructive: 0 62.8% 30.6%;       /* #dc2626 */
--border: 240 3.7% 15.9%;           /* #334155 */
--input: 240 3.7% 15.9%;            /* #334155 */
--ring: 240 4.9% 83.9%;             /* #e2e8f0 */
```

### Sidebar Colors
```css
/* Light Mode */
--sidebar-background: 220 100% 97%; /* Light blue background */
--sidebar-foreground: 220 80% 30%;
--sidebar-primary: 220 90% 40%;
--sidebar-accent: 220 80% 95%;
--sidebar-border: 220 30% 80%;
--sidebar-ring: 217 91% 60%;

/* Dark Mode */
--sidebar-background: 240 5.9% 10%;
--sidebar-primary: 224.3 76.3% 48%;
--sidebar-accent: 240 3.7% 15.9%;
--sidebar-border: 240 3.7% 15.9%;
--sidebar-ring: 217.2 91.2% 59.8%;
```

### Brand Colors
- **Primary Blue**: `#3678ff` - Main brand color
- **Primary Blue (Muted)**: `#3678ff` with 75% opacity
- **Text Black**: `rgba(26, 32, 44, 0.75)` - Main text color

### Gradient Combinations
- **Header Gradient**: `from-blue-600 via-indigo-600 to-purple-600`
- **Background Gradient**: `from-blue-50 via-indigo-50 to-white`
- **Sidebar Gradient**: `from-#dbeafe to-#e0e7ff to-#ffffff`

---

## Typography

### Font Families

#### Primary Font: Satoshi
```css
.satoshi-regular { font-family: 'Satoshi-Regular', sans-serif; }
.satoshi-medium { font-family: 'Satoshi-Medium', sans-serif; font-weight: 500; }
.satoshi-bold { font-family: 'Satoshi-Bold', sans-serif; font-weight: 700; }
```

#### Secondary Font: Outfit
```css
.outfit-light { 
  font-family: 'Outfit', serif; 
  font-weight: 300; 
}
.outfit-regular { 
  font-family: 'Outfit', serif; 
  font-weight: 500; 
}
.outfit-bold { 
  font-family: 'Outfit', serif; 
  font-weight: 700; 
}
```

### Typography Utilities
```css
.text-medium { 
  font-family: 'Satoshi-Medium', sans-serif; 
  color: #3678ff; 
}
.text-medium-white { 
  font-family: 'Satoshi-Medium', sans-serif; 
  color: #fff; 
}
.text-medium-black { 
  font-family: 'Satoshi-Medium', sans-serif; 
  color: rgba(26, 32, 44, 0.75); 
}
.text-medium-muted { 
  font-family: 'Satoshi-Medium', sans-serif; 
  color: #3678ff; 
  opacity: 0.75; 
}
.text-primary { color: #2d6bcf; }
```

---

## Layout Patterns

### Main Layout Structure
```
├── Header (Gradient with floating elements)
├── Sidebar Navigation (Glass morphism)
├── Main Content Area
│   ├── Dashboard Grid (1-3 columns responsive)
│   ├── Card Components
│   └── Interactive Elements
└── Footer (Wave pattern)
```

### Responsive Breakpoints
- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

### Card Design Pattern
```css
.card-base {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(sm);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: xl;
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s ease;
}

.card-hover {
  hover:shadow-2xl;
  hover:scale-[1.02];
}
```

### Navigation Patterns
```css
.nav-link-hover {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-hover:hover {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}
```

---

## Component Library

### Available UI Components

#### Form Components
- **Button** - Multiple variants (default, destructive, outline, secondary, ghost, link)
- **Input** - Text inputs with consistent styling
- **Textarea** - Multi-line text inputs
- **Checkbox** - Custom styled checkboxes
- **Select** - Dropdown selections
- **Switch** - Toggle switches
- **Calendar** - Date picker component
- **Form** - Form validation and management

#### Layout Components
- **Card** - Content containers with header, content, footer
- **Separator** - Visual dividers
- **Collapsible** - Expandable content sections
- **Sheet** - Slide-out panels
- **Dialog** - Modal dialogs
- **Popover** - Floating content panels

#### Navigation Components
- **Sidebar** - Main navigation component
- **Breadcrumb** - Navigation trail
- **Command** - Command palette/search
- **Dropdown Menu** - Context menus

#### Data Display
- **Table** - Data tables with sorting/filtering
- **Avatar** - User profile images
- **Badge** - Status indicators
- **Skeleton** - Loading placeholders
- **Scroll Area** - Custom scrollbars

#### Feedback Components
- **Toast** (Sonner) - Notifications
- **Tooltip** - Hover information
- **Alert** - Important messages

---

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   ├── (dashboard)/              # Main application routes
│   │   ├── club-edukai/          # Community features
│   │   ├── generate/             # Quiz generation
│   │   ├── library/              # Content library
│   │   ├── notifications/        # User notifications
│   │   ├── settings/             # User settings
│   │   └── support/              # Help & support
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout
│   └── satoshi.css               # Satoshi font definitions
├── components/                   # React components
│   ├── auth/                     # Authentication components
│   ├── badge/                    # Badge components
│   ├── card/                     # Card components
│   ├── data-table/               # Table components
│   ├── input/                    # Input components
│   ├── recognition/              # OCR components
│   ├── settings/                 # Settings components
│   ├── sidebar/                  # Sidebar components
│   └── ui/                       # ShadCN UI components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── services/                     # API services
├── enum/                         # TypeScript enums
├── json/                         # Static data
└── public/                       # Static assets
    ├── fonts/                    # Custom fonts
    ├── mocks/                    # Mock data
    ├── preview/                  # Preview images
    └── EdukaiLogo.svg            # Brand logo
```

---

## Features

### Core Features
1. **Auto Quiz Generation** - Create quizzes from uploaded content
2. **Revision Sheet Creation** - Generate personalized study materials
3. **Multi-Format Support** - PDF, images, Word documents, text files
4. **OCR Integration** - Extract text from images using Tesseract.js
5. **Progress Tracking** - Monitor learning progress and achievements
6. **Dark/Light Mode** - Theme switching support

### Dashboard Features
- **Welcome Header** - Personalized greeting with stats
- **Quick Stats** - Courses, study time, achievements, progress
- **Upcoming Exams** - Calendar integration
- **Objectives Tracking** - Goal setting and progress monitoring
- **Recent Activity** - Learning history and completed actions

### User Interface Features
- **Responsive Design** - Works on all device sizes
- **Glass Morphism** - Modern frosted glass effects
- **Smooth Animations** - Micro-interactions and transitions
- **Accessible Components** - WCAG compliant interface
- **Toast Notifications** - User feedback system

---

## Team & Contact

### Development Team
- **Tristan Hourtoulle** - Frontend Developer
- **Khalid Belkassmi E.H.** - Backend Developer & AI
- **Lucas Rossignon** - Mobile Developer

### Mission
We are all motivated by the same goal: helping students learn more efficiently.

### Contact & Links
- **Instagram**: [@edukaifr](https://www.instagram.com/edukaifr/?hl=fr)
- **LinkedIn**: _(In development)_
- **GitHub**: [EdukaiFR/website](https://github.com/EdukaiFR/website)

---

## Development Guidelines

### TypeScript Rules
- **NEVER use 'any' type** - Use proper interfaces, 'unknown', or generics
- **Always define proper interfaces** for API responses and props
- **Use union types** for flexible typing
- **Prefer type safety** over convenience

### Component Development Patterns
- Use **ShadCN UI components** as base
- Follow **consistent naming conventions**
- Implement **proper error handling**
- Add **loading states** for async operations
- Ensure **accessibility** compliance

### Styling Conventions
- Use **Tailwind CSS classes**
- Follow **responsive design principles**
- Implement **consistent spacing** using Tailwind scale
- Use **CSS variables** for theme colors
- Apply **smooth transitions** for interactions

### Form Validation
- Use **React Hook Form** with **Zod schemas**
- Implement **client-side validation**
- Provide **clear error messages**
- Handle **loading and error states**

### Best Practices
1. **Component Composition** - Build reusable, composable components
2. **Custom Hooks** - Extract logic into reusable hooks
3. **Error Boundaries** - Implement proper error handling
4. **Performance** - Optimize images, lazy load components
5. **SEO** - Use proper meta tags and structured data

---

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Quick Start
```bash
# Clone the repository
git clone git@github.com:EdukaiFR/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm run start
```

### Docker Setup (Recommended)
```bash
# Build the image
docker build -t edukai-website .

# Run the container
docker run -it -p 3000:3000 edukai-website
```

### Environment Variables
Create a `.env.local` file with necessary API keys and configuration variables.

---

## Notes for Landing Page Development

When building the landing page, focus on:

1. **Hero Section** - Use the gradient header pattern with floating elements
2. **Features Section** - Highlight auto-generation capabilities
3. **Benefits Section** - Student-focused messaging
4. **Social Proof** - Team information and testimonials
5. **Call-to-Action** - Clear signup/get started buttons
6. **Responsive Design** - Ensure mobile-first approach
7. **Performance** - Optimize for fast loading
8. **Accessibility** - Use semantic HTML and ARIA labels
9. **SEO** - Implement proper meta tags and structured data

Use the existing color palette, typography, and component patterns documented above for consistency with the main application.

---

*This documentation serves as a comprehensive guide for understanding and extending the Edukai project. For questions or contributions, please contact the development team.* 