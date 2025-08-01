# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Development
pnpm dev        # Start development server with Turbopack on http://localhost:3000

# Build & Production
pnpm build      # Build for production
pnpm start      # Start production server locally

# Code Quality
pnpm lint       # Run Next.js linting - ALWAYS run before completing tasks

# Cloudflare Deployment
pnpm deploy     # Build and deploy to Cloudflare Workers
pnpm preview    # Build and preview on Cloudflare locally
pnpm cf-typegen # Generate TypeScript types for Cloudflare environment
```

## Architecture Overview

This is a Next.js 15 application configured for Cloudflare Workers deployment using OpenNext.js adapter. The project uses:

- **Next.js App Router** in `src/app/` directory
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **React 19** with latest features
- **pnpm** as package manager

Key architectural decisions:
- Path alias `@/*` maps to `./src/*` for clean imports
- Security headers configured in `next.config.ts`
- Cloudflare Workers runtime with Node.js compatibility
- OpenNext.js handles the adaptation layer for Cloudflare deployment

## UI Development Approach

- **shadcn/ui** for building UI components
- **Storybook** for managing design system and component development

## Testing Requirements

**IMPORTANT**: After implementing any component or page, you MUST create the following tests:

1. **Unit Tests** - Test individual component logic and behavior
2. **E2E Tests** - Test user workflows and integration scenarios
3. **Storybook Component Tests** - Document and test component variations in Storybook

This ensures comprehensive test coverage and maintains code quality across the application.