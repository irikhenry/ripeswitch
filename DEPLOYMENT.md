# RipeSwitch Website - Deployment Guide

## Vercel Deployment

This website is configured for deployment on Vercel with proper SPA (Single Page Application) routing support.

### Deployment Steps

1. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will auto-detect the Vite configuration

2. **Build Settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (or `pnpm build`)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install` (or `pnpm install`)

3. **Environment Variables:**
   - No environment variables required for basic deployment

### Routing Configuration

The website uses React Router DOM for client-side routing. The `vercel.json` file ensures all routes are properly handled:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration ensures that:
- All routes redirect to `index.html`
- React Router handles the routing client-side
- Direct links to any page work correctly
- Page refreshes maintain the current route

### Available Routes

#### Main Pages
- `/` - Home page
- `/technology` - Technology overview
- `/technical-specification` - Technical specifications
- `/about` - About us / Team page
- `/contact` - Contact page

#### Research & White Papers
- `/research` - Research overview and white papers list
- `/research/active-ripening-control` - Active Ripening Control white paper
- `/research/economic-impact-assessment` - Economic Impact Assessment
- `/research/material-safety-compliance` - Material Safety & Compliance
- `/research/pilot-study-nordic-retail` - Pilot Study Framework

### Verification Checklist

✅ **Routing:**
- All navigation links use React Router's `Link` component
- Active route highlighting works in navigation
- Footer contact links use standard `mailto:` and `tel:` protocols

✅ **Configuration Files:**
- `vercel.json` - SPA routing configuration
- `vite.config.ts` - Build configuration
- `package.json` - Dependencies and build scripts

✅ **Dependencies:**
- `react-router-dom` installed and configured
- All required packages in `package.json`

### Testing Locally

Before deploying, test the production build locally:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the production build
npx vite preview
```

### Post-Deployment Testing

After deployment, verify:

1. ✅ Home page loads correctly
2. ✅ All navigation menu items work
3. ✅ Direct links to sub-pages work (e.g., `/technology`, `/about`)
4. ✅ Page refresh maintains current route
5. ✅ Research/white paper pages load correctly
6. ✅ Footer contact links work (email and phone)
7. ✅ Mobile responsive design functions properly

### Common Issues & Solutions

**Issue: 404 on page refresh**
- Solution: Ensure `vercel.json` is in the root directory
- Vercel should automatically detect and use this configuration

**Issue: Styling not loading**
- Solution: Check that Tailwind CSS v4 is properly configured in `vite.config.ts`
- Verify all CSS files are imported in the main component

**Issue: Images not loading**
- Solution: Ensure `figma:asset` imports are resolved correctly
- Check that ImageWithFallback component is used for dynamic images

### Performance Optimization

The website is optimized for production with:
- Code splitting via React Router
- Motion/Framer animations for smooth interactions
- Responsive images with fallbacks
- Optimized Tailwind CSS v4 build

### Support

For technical issues or questions:
- Email: tutki@ripeswitch.com
- Phone: +358 40 461 1019
