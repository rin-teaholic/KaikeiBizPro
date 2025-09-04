# replit.md

## Overview

KaikeiBiz Pro is a cloud-based accounting software designed for small to medium-sized Japanese businesses. The application features AI-powered automatic bookkeeping, bank integrations, and comprehensive financial reporting capabilities. Built as a modern full-stack web application, it includes a marketing landing page with contact form functionality and uses Japanese language throughout the interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation using @hookform/resolvers
- **Styling**: Tailwind CSS with CSS custom properties for theming, including dark mode support

The frontend follows a component-based architecture with clear separation between layout components, page components, UI components, and business logic sections. The design system uses a neutral color palette with blue primary colors and supports both light and dark themes.

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development Setup**: Hot module replacement in development using Vite middleware integration

The server uses a simple storage abstraction pattern with an in-memory implementation for development, making it easy to swap out for database implementations later.

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured but using in-memory storage in current implementation)
- **Schema**: Defined in shared TypeScript files with Zod validation schemas
- **Migration**: Drizzle Kit for database migrations

The data layer includes tables for users and contact submissions, with proper TypeScript types generated from the schema definitions.

### Development & Build System
- **Build Tool**: Vite for frontend bundling with esbuild for server bundling
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Code Organization**: Monorepo structure with shared schemas between client and server
- **Development Experience**: Hot reload, error overlay, and development banners for Replit environment

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types
- `components.json` - shadcn/ui configuration
- Root level configuration files for build tools and development

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete UI component library built on Radix UI
- **Radix UI**: Headless UI components for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Schema validation for both client and server
- **Drizzle ORM**: Type-safe ORM with PostgreSQL support

### Development Tools
- **Vite**: Fast build tool with development server
- **TypeScript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production server builds

### Database
- **Neon Database**: Serverless PostgreSQL (configured via @neondatabase/serverless)
- **Drizzle Kit**: Database migrations and schema management

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling integration

The application is designed to be easily deployable on Replit with proper development and production configurations.