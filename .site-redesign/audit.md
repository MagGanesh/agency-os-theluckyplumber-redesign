# Audit — theluckyplumber.co.uk

## Summary
The Lucky Plumber's current site is a recently-built WordPress site that has the bones of a functional local-services presence but suffers from critical rendering failures (broken logo, zero-value stats counters), a cluttered above-the-fold layout that splits the user's attention between a hero message and an inline contact form, and a monotonous gold colour scheme applied so broadly it creates visual fatigue across every page. The site urgently needs a clear visual hierarchy, working trust signals, and a mobile experience that does not bury the headline under a contact form.

---

## Issues by Severity

### High

- **Broken logo image**: The header logo fails to load on every page across desktop, tablet, and mobile. Users see a broken image placeholder in the top-left throughout the entire site — the single most damaging first impression possible.
- **Stats counters showing "0"**: The homepage displays animated counter stats for "Projects Delivered", "Happy Customers", and "Professional Team" — all frozen at 0. This actively undermines credibility rather than building it.
- **Hero split-focus layout**: The hero pits an H1 headline on the left against a full "Quick Call Back Request" contact form on the right. Neither gets sufficient visual weight. Users have no clear primary action.
- **Large dead whitespace on multiple pages**: The services section on the homepage (below the "Plumbing Services in SE London" gold banner) and the contact page (between the contact details and the FAQ accordion) contain large blank white voids where content appears not to have loaded or rendered.
- **Contradictory experience claims**: The homepage hero section states "20 Years of experience" but the footer copy states "We bring 30 years of expertise." This inconsistency directly damages trust.

### Medium

- **Gold overuse creating visual fatigue**: The mustard/gold (#B87C0A approx.) is used as a solid background on the top contact bar, every section divider banner, the CTA strip, the footer, and the form submit buttons. There is no secondary accent or breathing room, making every page feel heavy and tonally flat.
- **No real testimonials visible**: Every page has a "Trusted [X] Services with Customer Satisfaction" section heading, but no actual customer quotes, names, star ratings, or review counts appear beneath it — just generic body copy. The trust signal promised is never delivered.
- **Service area grid is visually inert**: The areas served (Chelsea, Lambeth, Southwark, etc.) are rendered as plain light-grey rectangular tiles with no icon, no hover state, and no linking — they add no value to the UX.
- **Excessive header height**: The beige header area above the navigation is very tall on desktop, consuming approximately 120px of prime viewport space before any navigation or content appears.
- **No differentiation between service pages**: The Plumbing Services and Gas Boiler Services pages share identical layout, colour scheme, section structure, and even the same "Quick Call Back Request" form placement. No page feels tailored to its specific service.
- **Hero form CTA is generic**: The contact form submit button reads "Submit" — no value framing, no urgency, no service context.
- **Body text colour-on-colour contrast**: Gold heading text over the beige background and small grey body copy over white both pass WCAG minimally at best. The gold body text in the footer is especially low contrast.

### Low

- **"Made with ♡ by Cludx" footer credit**: The agency credit line in the footer looks amateur and draws attention away from the business.
- **Decorative footer image is cropped and unfinished**: A photo of plumbing tools appears clipped in the bottom-right corner of the footer on desktop — it looks like a failed design flourish rather than intentional.
- **No social proof quantity or recency**: There are no review counts, Google rating badges, or Trustpilot widgets to give the testimonials section any substance.
- **"Contact" page heading is just "Contact"**: The page H1 is a single word with no supporting subheadline, location signal, or urgency hook.
- **About page not prominently featured**: The About page is in the navigation but has no visual callout or teaser on the homepage to build personal trust (the business appears to be a sole operator — personality would convert well).

---

## Per-Page Issues

### Home
- Logo broken in header
- Hero headline and form compete for attention at equal visual weight
- Stats (Projects Delivered, Happy Customers, Team) display as "0" — either broken JS counters or unset values
- Services section below the gold "Plumbing Services in SE London" banner renders as blank whitespace on desktop
- Service card descriptions are buried — no iconography, no card borders, no visual separation
- "20 Years" and "30 years" copy contradiction across hero and footer

### Plumbing Services
- Page hero image is not loading (broken image placeholder below the headline)
- Layout is identical to Gas Boiler Services — no page personality
- 17-item service list rendered as two plain columns of arrow-links — hard to scan
- Large empty section visible between services list and testimonial section

### Gas Boiler Services
- Strongest page visually — boiler brand logo grid (Viessmann, Baxi, Vaillant, Ideal, Glow-worm) adds genuine credibility
- Brand grid layout is inconsistent with the rest of the site's design language
- "Areas We Serve" section has large blank whitespace below the grid tiles before next section
- CTA at bottom ("Gas Boiler Services in Dulwich SE London & Surrounding Areas — We Install, Maintain & Service All Boiler Makes") is a SEO heading, not a genuine CTA

### Contact
- Enormous dead whitespace gap (approximately 40% of the page height) between the contact form block and the FAQ accordion
- FAQ accordion has only 3 questions — thin content
- The contact form uses a generic "Submit Button" label as the button text — not "Get a Quote" or "Request a Callback"
- No map, no operating hours displayed, no emergency callout box

---

## Mobile-Specific Issues

- Hero contact form stacks directly below the H1 headline and dominates the screen above the fold — the user's first mobile experience is filling out a form before understanding the business
- Gold section banner headings wrap to 3+ lines at 375px (e.g. "Plumbing Services in SE London and surrounding areas" occupies nearly the full viewport width in a solid gold block)
- Navigation hamburger menu area retains excessive header height — requires significant scrolling past the header before content begins
- The large "20" years counter number renders very large on mobile and dominates its section disproportionately
- Footer stacks into 4 narrow columns then breaks — text becomes extremely small and hard to tap
- Service list on Plumbing Services page becomes a single very long scrollable column with no grouping or visual breaks

---

## Opportunities

- **Emergency / 24/7 angle is under-exploited**: The business offers 24/7 emergency callouts — this is a high-value differentiator that should anchor the hero, not be buried in a bullet list.
- **Boiler brand affiliations add authority**: The Gas Boiler Services page shows Viessmann, Baxi, Vaillant, Ideal, and Glow-worm logos — bringing this to the homepage as a trust bar would immediately communicate expertise.
- **South East London geographic specificity**: The site mentions Dulwich, Croydon, Lambeth, Southwark, Greenwich, Westminster, and more — a local-area trust bar or illustrated service map would resonate strongly with local search intent.
- **Sole operator personality**: A business named "The Lucky Plumber" with 20–30 years experience and a horseshoe-and-wrench logo has character. Leaning into a trustworthy, named tradesperson identity (photo, name, personal guarantee) would convert far better than generic stock copy.
- **Google Reviews integration**: If the business has Google reviews, embedding them with star ratings and review counts would be the highest-ROI addition.
- **Clear service bifurcation**: Splitting Plumbing and Gas Boiler Services visually and tonally would help SEO and help users self-select quickly.
