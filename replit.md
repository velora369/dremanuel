# Dr. Emanuel Esposito - Landing Page

## Overview

This is a modern, responsive landing page for Dr. Emanuel Esposito, a renowned nephrologist specializing in kidney transplants in the Amazon region of Brazil. The application is built as a full-stack web application using React with TypeScript for the frontend and Express.js for the backend, with PostgreSQL as the database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI components with custom styling (shadcn/ui pattern)
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: TSX for TypeScript execution

### Design System
- **Typography**: Montserrat for headings, Inter for body text
- **Color Palette**: Professional green theme with warm accents
- **Icons**: Font Awesome and Lucide React icons
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
1. **Header**: Sticky navigation with mobile menu and smooth scrolling
2. **HeroSection**: Main landing section with call-to-action buttons
3. **ExperienceSection**: Awards and recognition showcase
4. **AboutDoctorSection**: Doctor profile with image carousel
5. **SpecialtiesSection**: Medical specialties with expandable cards
6. **CourseSection**: POCUS course promotion
7. **ConsultoriaSection**: Specialized consultation services
8. **TestimonialsSection**: Patient testimonials and reviews
9. **ContactSection**: Contact information and WhatsApp integration

### Backend Components
1. **Server**: Express.js application with middleware setup
2. **Routes**: API route registration system
3. **Storage**: Database abstraction layer with memory fallback
4. **Vite Integration**: Development server with HMR support

## Data Flow

### Frontend Flow
1. User visits the landing page
2. Preloader displays while assets load
3. Components render with staggered animations
4. User interactions trigger WhatsApp redirects for appointments
5. Smooth scrolling navigation between sections

### Backend Flow
1. Express server handles API requests
2. Drizzle ORM manages database operations
3. Session management for user state
4. Static file serving for production builds

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **framer-motion**: Animation library
- **@tanstack/react-query**: Data fetching and caching
- **@radix-ui/react-***: Accessible UI components
- **tailwindcss**: Utility-first CSS framework

### Communication Integrations
- **WhatsApp API**: Direct messaging integration for appointments
- **YouTube**: Embedded videos for educational content
- **Social Media**: Instagram and other social platform links

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and better developer experience
- **ESLint/Prettier**: Code quality and formatting
- **Replit**: Development environment integration

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files
2. **Backend Build**: ESBuild bundles Express server
3. **Database**: Drizzle migrations handle schema changes
4. **Assets**: Static files served from Express in production

### Environment Configuration
- **Development**: TSX with Vite dev server
- **Production**: Node.js with pre-built static files
- **Database**: PostgreSQL with connection pooling

### Performance Optimizations
- **Code Splitting**: Dynamic imports for better loading
- **Image Optimization**: WebP format with lazy loading
- **CSS Optimization**: Tailwind purging and compression
- **Caching**: Query caching with TanStack Query

## Architecture Decisions

### Frontend Decisions
- **React with TypeScript**: Chosen for type safety and component reusability
- **Tailwind CSS**: Enables rapid UI development with consistent design
- **Framer Motion**: Provides smooth animations crucial for the modern UX requirements
- **Radix UI**: Ensures accessibility compliance and consistent behavior

### Backend Decisions
- **Express.js**: Lightweight and flexible for API development
- **Drizzle ORM**: Type-safe database operations with good PostgreSQL support
- **Memory Storage Fallback**: Allows development without database setup

### Design Decisions
- **Mobile-First**: Responsive design prioritizing mobile experience
- **Component-Based**: Modular architecture for maintainability
- **Professional Theme**: Green color palette reflecting medical professionalism
- **WhatsApp Integration**: Direct communication channel for patient engagement

The application successfully combines modern web technologies with healthcare-specific requirements, providing a professional platform for Dr. Emanuel Esposito's nephrology practice while maintaining excellent user experience and performance.