# Accessibility (WCAG 2.1 AA) Compliance Guide

## Overview

The CMS application is designed and tested to meet WCAG 2.1 AA accessibility standards for inclusive user experience.

## Accessibility Checklist

### Keyboard Navigation
- [ ] All interactive elements accessible via Tab
- [ ] Tab order logical and intuitive
- [ ] Focus indicator visible at all times
- [ ] Focus does not get trapped
- [ ] Escape key closes dialogs/modals
- [ ] Enter key submits forms

### Screen Reader Support
- [ ] Page structure uses semantic HTML
- [ ] Form labels associated with inputs
- [ ] Images have alt text
- [ ] Icons have aria-labels
- [ ] Dynamic content announced
- [ ] Error messages associated with inputs

### Color & Contrast
- [ ] Text contrast >= 4.5:1 (AA)
- [ ] UI components contrast >= 3:1 (AA)
- [ ] Color not sole method of conveying info
- [ ] Focus indicators visible

### Mobile Accessibility
- [ ] Touch targets minimum 44x44px
- [ ] Responsive design works
- [ ] Text zoomable to 200%
- [ ] Scrolling works on both axes
- [ ] No time-out for user interactions

## Implementation Guide

### Semantic HTML

```html
<!-- Good -->
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<main>
  <section>
    <h1>Page Title</h1>
    <p>Content...</p>
  </section>
</main>

<footer>
  <p>Copyright &copy; 2024</p>
</footer>

<!-- Bad -->
<div class="nav">
  <div class="link"><a href="/home">Home</a></div>
</div>
<div class="main">Content...</div>
```

### Form Labels

```html
<!-- Good -->
<label for="email">Email Address:</label>
<input id="email" type="email" name="email" required />

<!-- Bad -->
<input type="email" placeholder="Email Address" />
```

### ARIA Labels

```html
<!-- Icon buttons -->
<button aria-label="Close menu">
  <mat-icon>close</mat-icon>
</button>

<!-- Status indicators -->
<span aria-label="Application approved" class="status-badge">✓</span>

<!-- Skip links -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Dynamic Content

```typescript
// Announce changes to screen readers
import { LiveAnnouncer } from '@angular/cdk/a11y';

constructor(private liveAnnouncer: LiveAnnouncer) {}

updateStatus(message: string) {
  // This will be announced to screen readers
  this.liveAnnouncer.announce(message);
}
```

### Focus Management

```typescript
// Manage focus on route changes
export class MyComponent implements OnInit {
  @ViewChild('mainContent') mainContent!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Move focus to main content after navigation
      this.mainContent.nativeElement.focus();
    });
  }
}
```

## Testing Tools

### Lighthouse
```bash
# Run Lighthouse accessibility audit
# Chrome DevTools → Lighthouse → Accessibility
```

### axe DevTools
- Browser extension for automated testing
- Reports accessibility violations
- Integrates with CI/CD

### NVDA (Free Screen Reader)
- Download from nvaccess.org
- Test keyboard navigation and screen reader experience

### Color Contrast
- WebAIM Contrast Checker
- Ensure all text meets AA/AAA standards

## Component Accessibility Patterns

### Button Components
```html
<button 
  type="button"
  aria-label="Delete application"
  [attr.aria-disabled]="isDisabled">
  Delete
</button>
```

### Form Inputs
```html
<div class="form-group">
  <label for="name">Full Name (required)</label>
  <input 
    id="name"
    type="text"
    required
    aria-describedby="name-help"
    [attr.aria-invalid]="hasError">
  <span id="name-help" class="help-text">
    Please enter your full name
  </span>
</div>
```

### Modals/Dialogs
```html
<dialog 
  role="dialog"
  aria-labelledby="dialog-title"
  aria-modal="true">
  <h2 id="dialog-title">Confirm Action</h2>
  <p>Are you sure?</p>
  <button>Cancel</button>
  <button>Confirm</button>
</dialog>
```

### Data Tables
```html
<table>
  <caption>Application Status Summary</caption>
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2024-05-25</td>
      <td>Approved</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
```

### Navigation Menus
```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

## Testing Accessibility

### Manual Testing Steps

1. **Keyboard Only**
   - Tab through entire page
   - Verify all functions work
   - Check focus indicators

2. **Screen Reader Testing**
   - Test with NVDA or JAWS
   - Verify page structure
   - Check form labels

3. **Color Contrast**
   - Use WebAIM checker
   - Test with color blindness simulator
   - Verify non-color indicators

4. **Mobile Testing**
   - Test touch targets
   - Verify mobile keyboard
   - Check zoom at 200%

### Automated Testing

```bash
# Run accessibility tests
npm run test:a11y

# Integration with CI/CD
# axe DevTools reports in pull requests
```

## Common Issues & Fixes

### Issue: Missing alt text on images
```html
<!-- Bad -->
<img src="logo.png" />

<!-- Good -->
<img src="logo.png" alt="Company Logo" />

<!-- Decorative images -->
<img src="divider.png" alt="" aria-hidden="true" />
```

### Issue: No focus indicator
```scss
// Good
button {
  &:focus-visible {
    outline: 2px solid $focus-color;
    outline-offset: 2px;
  }
}

// Remove browser default only if providing visible alternative
button:focus {
  outline: 2px solid $focus-color;
}
```

### Issue: Low contrast text
```scss
// Bad
color: #999; // Too light

// Good
color: #333; // Dark enough (>4.5:1 on white)
```

### Issue: Keyboard trap
```typescript
// Properly handle modal focus
constructor(private cdkFocusTrap: CdkTrapFocus) {}

// This ensures focus stays within modal
// and returns when closed
```

## Accessibility Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Angular Accessibility](https://angular.io/guide/accessibility)
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)

## Continuous Testing

Include accessibility testing in:
- [ ] Unit tests (aria attributes)
- [ ] Integration tests (keyboard navigation)
- [ ] Manual testing (screen reader)
- [ ] CI/CD pipeline (axe)
- [ ] Performance testing (Core Web Vitals)

## Reporting Accessibility Issues

If you find accessibility issues:
1. Document the issue with details
2. Test with keyboard and screen reader
3. Create GitHub issue with example
4. Link to WCAG guideline violated
5. Propose fix if possible

---

**Document Version**: 1.0
