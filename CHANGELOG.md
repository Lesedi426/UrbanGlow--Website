# UrbanGlow Salon — Changelog

This changelog records the documented development and improvement stages of the UrbanGlow Salon website for the WEDE5020 Web Development Introduction POE. The entries describe features verified in the current project files.

## Version 1.0 — Initial Website Development

- Established the website structure using eight separate HTML pages:
  - `index.html`
  - `about.html`
  - `services.html`
  - `pricing.html`
  - `gallery.html`
  - `bookings.html`
  - `contact.html`
  - `location.html`
- Added the external stylesheet at `css/style.css`.
- Implemented a consistent header, navigation area, main content area, and footer across the pages.
- Added page-specific content for the salon's introduction, services, prices, gallery, bookings, contact information, and location.

## Version 1.1 — Branding and Logo

- Implemented the UrbanGlow Salon branding using the existing UGS logo image:
  - `images/UGS Logo design.jpg`
- Added the logo to the shared header on all eight HTML pages.
- Linked the logo to `index.html` so it also provides a route back to the Home page.

## Version 1.2 — Pricing Page and Price List

- Added the existing price-list image as the downloadable price-list resource on `pricing.html`:
  - `images/UGS Price list.jpg`
- Retained the existing pricing table containing service names and prices.
- Styled the pricing table with table headers, row spacing, borders, and alternating row backgrounds through `css/style.css`.

## Version 1.3 — Background Image

- Implemented the existing UrbanGlow background image in the external stylesheet:
  - `images/UrbanGlow background.jpg`
- Referenced the image from `css/style.css` using the correct relative path:
  - `../images/UrbanGlow background.jpg`
- Applied a warm cream overlay to maintain readability while preserving the existing background image.
- Configured the background to cover the viewport, remain centered on larger screens, and use a mobile-friendly top-centered position on smaller screens.

## Version 1.4 — CSS Styling

- Developed and restored the shared external styling in `css/style.css`.
- Added styling for:
  - The header and UGS logo
  - Navigation links
  - Main headings and subheadings
  - Paragraphs and general page text
  - Content sections
  - Service sections and service cards
  - Call-to-action and form buttons
  - Pricing tables
  - Gallery figures, images, and captions
  - Booking forms, labels, inputs, selects, and textareas
  - Contact and address content
  - Footer content
- Used shared CSS variables so the appearance remains consistent across all eight pages.
- Preserved the existing HTML structure and placed the website styling in the single external stylesheet.

## Version 1.5 — Colour Scheme

- Implemented a consistent UrbanGlow Salon colour scheme in `css/style.css`:
  - Sage Green: `#8FAF9A`
  - Dark Sage: `#4F6658`
  - Warm Cream: `#F7F3EC`
  - Charcoal: `#2F3430`
  - Blush: `#D9A6A6`
  - White: `#FFFFFF`
- Used sage green for borders, headings accents, and primary styling details.
- Used dark sage and charcoal for headings, navigation, labels, and normal text.
- Used warm cream for content panels, form fields, and the background overlay.
- Used blush sparingly for navigation hover indicators, button hover states, and form focus outlines.
- Used white for button and table-header text where strong contrast is required.

## Version 1.6 — Responsive Design

- Added responsive CSS media queries for tablet and mobile widths.
- Responsive adjustments include:
  - **Layout:** constrained content widths and reduced spacing on smaller screens.
  - **Typography:** scaled headings and navigation text for narrower viewports.
  - **Navigation:** wrapped navigation links and adjusted their gaps and font sizes.
  - **Images:** applied `max-width: 100%` and automatic height scaling; gallery images become full width on smaller screens.
  - **Buttons:** retained readable padding and flexible sizing within content areas.
  - **Forms:** limited form controls to the available content width while retaining usable input sizes.
  - **Tables:** enabled horizontal table scrolling within the table area when necessary on small screens.
- Added `overflow-x: hidden` to prevent unwanted horizontal page scrolling.
- Changed the fixed background attachment to a scroll-based attachment on smaller screens for improved mobile behavior.

## Version 1.7 — Image Path Corrections

- Checked image references against the actual filenames present in the `images` folder.
- Corrected the UGS logo reference in `index.html` to:
  - `images/UGS Logo design.jpg`
- Corrected the Home page gallery references to:
  - `images/UGS Hair Stylist.jpg`
  - `images/UGS Services.jpg`
  - `images/UGS Barber.jpg`
- Corrected the Pricing page price-list download reference to:
  - `images/UGS Price list.jpg`
- Confirmed the other existing image references:
  - `images/UGS Saloon Shop.jpg`
  - `images/Map.png`
  - `images/UrbanGlow background.jpg`
- Preserved the exact spelling, capitalisation, spaces, and file extensions of the existing image files.

## Version 1.8 — Separate Page Navigation

- Updated the website so navigation opens separate HTML pages rather than scrolling between sections on `index.html`.
- Implemented the following navigation links on each page:
  - Home → `index.html`
  - About → `about.html`
  - Services → `services.html`
  - Pricing → `pricing.html`
  - Gallery → `gallery.html`
  - Bookings → `bookings.html`
  - Contact → `contact.html`
  - Location → `location.html`
- Kept only the Home content on `index.html`.
- Kept the About, Services, Pricing, Gallery, Bookings, Contact, and Location content on their corresponding pages.
- Kept the shared header, logo, navigation, stylesheet link, and footer structure consistent across the pages.
- Repaired duplicated and malformed header markup in `gallery.html` without changing its gallery content.

## Version 1.9 — Pseudo-Classes and Interactive Styling

- Added CSS pseudo-classes and interactive styling that are present in the current stylesheet:
  - `a:hover` and `a:focus-visible` for link interaction.
  - `nav a:hover` and `nav a:focus-visible` for navigation emphasis and blush underline accents.
  - `main > section > a:hover` and `main > section > a:focus-visible` for the Home call-to-action link.
  - `button:hover` and `button:focus-visible` for button colour and position feedback.
  - `input:focus`, `select:focus`, and `textarea:focus` for form focus indication.
- Added a short transition to buttons and call-to-action links so hover movement and colour changes remain subtle and professional.
- Kept keyboard-focus states visible through `:focus-visible` styling.

## Version 2.0 — Testing and Validation

- Validated all eight HTML pages and the shared CSS file using project diagnostics.
- Checked the following areas during development:
  - HTML structure and stylesheet references.
  - CSS syntax and stylesheet loading.
  - Navigation targets for all eight separate pages.
  - Exact image paths, filenames, capitalisation, spaces, and extensions.
  - The UGS logo, gallery images, map, price-list image, and background image.
  - Responsive layout behavior for desktop, tablet, and mobile widths.
  - Responsive image sizing.
  - Form and table behavior on smaller screens.
  - Prevention of unwanted horizontal page scrolling.
- Confirmed that `css/style.css` remains the single external stylesheet used by the eight HTML pages.

## Feedback from Part 1

- The website was improved in response to the development issues identified during the earlier project work.
- The original long scrolling Home page structure was separated into dedicated pages so that each navigation item opens the correct content page.
- The shared header, UGS logo, navigation, stylesheet, and footer were made consistent across the site to improve usability and navigation between pages.
- Broken image references were checked against the actual `images` folder and corrected so that the existing logo, gallery assets, price-list resource, map, and background image use valid project-relative paths.
- The external stylesheet was restored and expanded so the existing HTML receives complete presentation styling rather than appearing as unstyled HTML.
- The colour palette was refined to provide a more professional salon identity while maintaining readable contrast between text, content backgrounds, buttons, and the background image.
- Responsive rules were retained and verified so the website remains usable on desktop, tablet, and mobile devices without unwanted horizontal scrolling.

## Website Creation Timeline

1. **Initial project planning, proposal and website structure:** Project planning and proposal documentation were established for the WEDE5020 POE, followed by the definition of the UrbanGlow Salon website structure.
2. **Creation of the multi-page HTML website:** The website was implemented as eight HTML pages for Home, About, Services, Pricing, Gallery, Bookings, Contact, and Location.
3. **Addition and organisation of website images/assets:** The existing logo, background, price-list, gallery, and map assets were organised in the `images/` folder and connected using project-relative paths.
4. **UrbanGlow Salon UGS logo implementation:** `images/UGS Logo design.jpg` was added to the shared header on all eight pages.
5. **Pricing page image and pricing table:** The Pricing page retained its price-list download image and grooming service pricing table.
6. **Background image and CSS styling:** `images/UrbanGlow background.jpg` was added through `css/style.css`, together with the shared website styling.
7. **UrbanGlow colour scheme:** The sage green, cream, charcoal, blush, and white colour scheme was implemented through CSS variables and component styling.
8. **Separate-page navigation:** Navigation was changed from section anchors to separate-page links for Home, About, Services, Pricing, Gallery, Bookings, Contact, and Location.
9. **Responsive design:** Media queries and responsive rules were added for desktop, tablet, and mobile/phone screen sizes, including layout, navigation, typography, images, forms, and tables.
10. **Hover, focus and active states:** CSS interaction states were added for links, navigation, buttons, call-to-action elements, and form controls.
11. **Dedicated service-card styling:** Service sections were given dedicated card styling with spacing, alignment, sage borders, backgrounds, shadows, and mobile adjustments.
12. **README, references and Unsplash attribution documentation:** README project documentation, Google Maps and Unsplash references, and the local image-source statement were completed without inventing individual photographer or image-page details.
13. **Testing, validation, GitHub commits and final repository synchronisation:** The HTML pages, CSS, image paths, navigation, responsive behavior, and horizontal scrolling protections were validated. Descriptive commits were created and local `main` was synchronised with `origin/main`.

### Later Refinements

- Added explicit `:active` pseudo-classes for navigation links, buttons, and the Home call-to-action.
- Added dedicated responsive service-card styling.
- Completed the README student name and student number information.
- Added Unsplash image attribution and reference documentation while retaining the Google Maps reference.
- Completed final validation and synchronised the local `main` branch with `origin/main`.
