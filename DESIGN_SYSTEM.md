# RipeSwitch Design System
## Crystal-Clear, Super-Crisp Typography & Graphics

---

## 🎨 **CURRENT TYPOGRAPHY**

### **Primary Font: Inter**
- **Family**: `'Inter'` (Google Fonts)
- **Why**: 
  - Designed specifically for digital screens
  - Exceptional clarity at small sizes
  - Superior legibility on high-DPI displays
  - Professional, technical, modern aesthetic
  - Perfect for B2B/scientific content
  - Variable font with advanced OpenType features

### **Font Rendering Optimizations**
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

### **OpenType Features Enabled**
- `cv02` - Alternate a
- `cv03` - Alternate g  
- `cv04` - Alternate i
- `cv11` - Alternate single-storey a

These make the text look more modern and crisp!

---

## 🎯 **FONT WEIGHT SCALE**

```css
--font-weight-normal: 400    /* Body text, paragraphs */
--font-weight-medium: 500    /* Headings, labels, emphasis */
--font-weight-semibold: 600  /* Strong headings, CTAs */
--font-weight-bold: 700      /* Hero text, major emphasis */
```

### **Usage Recommendations:**
- **Body copy**: 400 (normal)
- **Table headers**: 600 (semibold)
- **Section titles**: 700 (bold)
- **Data labels**: 500 (medium)
- **CTAs/Buttons**: 600 (semibold)

---

## 🌈 **BRAND COLOR PALETTE - SUPER CRISP**

### **Primary Brand Colors**
```css
--ripeswitch-green-primary: #026448   /* Main brand green */
--ripeswitch-green-dark: #014434      /* Hover states, depth */
--ripeswitch-green-light: #038c64     /* Accents, highlights */
--ripeswitch-accent-yellow: #EEFF41   /* Primary accent, energy */
--ripeswitch-accent-yellow-muted: #E8F635  /* Subtle backgrounds */
```

### **High-Contrast Grays** (for maximum readability)
```css
--gray-900: #0a0a0a    /* Almost black - hero text */
--gray-800: #1a1a1a    /* Dark text - body copy */
--gray-700: #2a2a2a    /* Medium-dark - subheadings */
--gray-600: #404040    /* Dark gray - labels */
--gray-500: #737373    /* Medium gray - secondary text */
--gray-400: #a3a3a3    /* Light gray - placeholders */
--gray-300: #d4d4d4    /* Very light - borders */
--gray-200: #e5e5e5    /* Subtle backgrounds */
--gray-100: #f5f5f5    /* Off-white backgrounds */
--gray-50: #fafafa     /* Almost white */
```

---

## ✨ **COLOR CONTRAST RECOMMENDATIONS**

### **For Maximum Crispness:**

**Text on White Backgrounds:**
- Primary text: `#1a1a1a` (gray-800) - WCAG AAA
- Secondary text: `#404040` (gray-600) - WCAG AA
- Tertiary text: `#737373` (gray-500) - WCAG AA for large text

**Green Brand Text:**
- On white: `#026448` (green-primary) - Perfect contrast
- On light backgrounds: `#014434` (green-dark) - Extra crisp

**Yellow Accent:**
- Use sparingly as backgrounds with dark text
- `#EEFF41` with `#026448` green text = ⚡ high impact

---

## 📐 **TYPOGRAPHY SCALE**

### **Responsive Font Sizing (clamp)**
Perfect for Fantasy.co style crisp scaling:

```css
/* Hero Headlines */
font-size: clamp(2.5rem, 5vw, 4.5rem)
font-weight: 700
line-height: 1.1
letter-spacing: -0.02em

/* Section Headings */
font-size: clamp(1.75rem, 3.5vw, 3rem)
font-weight: 700
line-height: 1.2
letter-spacing: -0.01em

/* Subsection Headings */
font-size: clamp(1.25rem, 2.5vw, 2rem)
font-weight: 600
line-height: 1.3

/* Body Large */
font-size: clamp(1.1rem, 2vw, 1.35rem)
font-weight: 400
line-height: 1.6

/* Body Regular */
font-size: clamp(1rem, 1.5vw, 1.125rem)
font-weight: 400
line-height: 1.6

/* Small/Caption */
font-size: clamp(0.875rem, 1.25vw, 1rem)
font-weight: 500
line-height: 1.5
```

---

## 🎬 **ANIMATIONS FOR CRISPNESS**

### **Motion Principles:**
- **Duration**: 0.3s - 0.8s (never longer)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` - smooth, professional
- **Use Motion from 'motion/react'** for all animations

### **Common Patterns:**
```tsx
// Fade + Slide Up (sections)
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}

// Scale (hover interactions)
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.2 }}

// Stagger (list items)
staggerChildren: 0.1
```

---

## 🖼️ **IMAGE OPTIMIZATION**

### **For Super-Crisp Graphics:**

1. **Use 2x resolution images** for Retina displays
2. **WebP format** when possible (smaller, sharper)
3. **Lazy loading** for performance
4. **Aspect ratios**: Use precise ratios (16:9, 4:3, 1:1)

```tsx
<ImageWithFallback
  src={imageSrc}
  alt="Description"
  className="w-full h-auto"
  loading="lazy"
/>
```

---

## 📊 **COMPETITIVE BENCHMARK TABLE COLORS**

### **Desktop Table:**
```css
/* RipeSwitch Column */
Background: rgba(238, 255, 65, 0.1)   /* Yellow tint */
Border-left: 2px solid rgba(2, 100, 72, 0.3)  /* Green accent */
Header bg: rgba(238, 255, 65, 0.1)

/* Competitor Columns */
Background: white
Border: rgba(26, 26, 26, 0.05)  /* Subtle gray */

/* Icons */
✓ CheckCircle: #026448 (green)
✗ XCircle: rgba(26, 26, 26, 0.3) (muted gray)
⚠ AlertTriangle: rgba(245, 158, 11, 0.5) (amber)
```

### **Mobile Cards:**
```css
/* RipeSwitch Card */
Border: 2px solid rgba(2, 100, 72, 0.3)
Background: linear-gradient(to bottom right, 
  rgba(238, 255, 65, 0.1), 
  rgba(2, 100, 72, 0.05)
)

/* Competitor Cards */
Border: 1px solid rgba(26, 26, 26, 0.1)
Background: white
```

---

## 🎯 **ACCESSIBILITY CHECKLIST**

✅ **WCAG AAA Compliance:**
- All text ≥ 4.5:1 contrast ratio
- Large text ≥ 3:1 contrast ratio
- Interactive elements ≥ 3:1 contrast

✅ **Font Size Minimums:**
- Desktop: ≥ 16px body text
- Mobile: ≥ 16px (prevents zoom on iOS)

✅ **Touch Targets:**
- Minimum 44x44px on mobile
- Minimum 32x32px on desktop

---

## 🚀 **PERFORMANCE OPTIMIZATIONS**

### **Font Loading Strategy:**
```css
@import url('...&display=swap');
```
- `display=swap`: Prevents FOIT (Flash of Invisible Text)
- Shows fallback font immediately, then swaps to Inter

### **Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 **DESIGN TOKENS QUICK REFERENCE**

### **Spacing Scale** (use for margins, padding)
```
4px   (0.25rem)  - Tight
8px   (0.5rem)   - Small
12px  (0.75rem)  - Medium-small
16px  (1rem)     - Medium
24px  (1.5rem)   - Large
32px  (2rem)     - XL
48px  (3rem)     - 2XL
64px  (4rem)     - 3XL
96px  (6rem)     - 4XL
```

### **Border Radius**
```
--radius-sm: 6px   - Buttons, small cards
--radius-md: 8px   - Default
--radius-lg: 10px  - Cards, panels
--radius-xl: 14px  - Hero sections
```

### **Shadows** (for depth, not blur)
```css
/* Subtle elevation */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Medium elevation */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);

/* High elevation */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
```

---

## 💡 **PRO TIPS FOR CRISP VISUALS**

1. **Use whole pixel values** whenever possible (avoid 14.5px)
2. **Align to pixel grid** - prevents blurry edges
3. **Sharp borders** - Use integer pixel widths (1px, 2px, not 1.5px)
4. **High contrast** - Don't use light gray on white
5. **Letter-spacing** - Negative for headlines (-0.02em), normal for body
6. **Line-height** - 1.1-1.2 for headlines, 1.5-1.7 for body
7. **Icon sizing** - Use clamp() for responsive icons
8. **Color opacity** - Use /[value] syntax: `bg-[#026448]/10`

---

## 📱 **MOBILE OPTIMIZATIONS**

### **Touch-Friendly Spacing:**
- Minimum tap target: 44x44px
- Padding around interactive elements: ≥ 12px
- Spacing between clickable items: ≥ 8px

### **Mobile Typography:**
```css
/* Slightly larger for readability */
font-size: clamp(0.95rem, 2.8vw, 1.1rem)

/* Tighter line-height saves vertical space */
line-height: 1.5
```

---

## 🔥 **FANTASY.CO SIGNATURE ELEMENTS**

### **Full-Viewport Sections:**
```css
min-height: 100vh
display: flex
align-items: center
justify-content: center
padding: 8vh 4vw
```

### **Immersive Scroll Experience:**
- Smooth scroll behavior
- Section-to-section transitions
- Motion-triggered animations on scroll

### **Premium Feel:**
- Generous white space (never cramped)
- High-quality imagery (2x resolution)
- Subtle hover interactions
- Professional micro-animations

---

## ✅ **IMPLEMENTATION CHECKLIST**

- [x] Inter font imported and applied globally
- [x] Font smoothing enabled for crisp rendering
- [x] Brand colors defined as CSS variables
- [x] High-contrast gray scale implemented
- [x] Responsive typography with clamp()
- [x] WCAG AAA contrast ratios
- [x] Motion/React for smooth animations
- [x] Mobile-optimized spacing and typography
- [x] Competitive benchmark table optimized
- [x] Image optimization guidelines

---

**Last Updated**: February 2026  
**Design System Version**: 1.0  
**For**: RipeSwitch Landing Page by Fantasy.co
