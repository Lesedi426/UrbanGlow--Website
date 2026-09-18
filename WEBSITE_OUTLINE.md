# UrbanGlow Salon Website Outline

## 1. Website Name

UrbanGlow Salon

## 2. Student Details

- **Student Name:** Lesedi Ramorula
- **Student Number:** st10509100

## 3. Website Purpose

The UrbanGlow Salon website provides an online information resource for the salon. Visitors can learn about the salon, view its services and pricing, browse salon-related images, submit a booking enquiry, find contact details, and view the salon's Pretoria location and map.

## 4. Target Audience

The intended users are current and prospective UrbanGlow Salon customers. This includes visitors looking for hair styling, beauty services, skincare, grooming, pricing information, appointment bookings, contact details, and location information.

## 5. Website Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduces UrbanGlow Salon and provides a link to book an appointment. |
| About | `about.html` | Describes the salon's background, aims, services, and professional environment. |
| Services | `services.html` | Presents Hair Styling, Beauty Services, Skincare, and Grooming services. |
| Pricing | `pricing.html` | Provides the downloadable price-list image and the existing grooming pricing table. |
| Gallery | `gallery.html` | Displays four salon-related images with captions for hair styling, skincare treatment, barber service, and the salon. |
| Bookings | `bookings.html` | Provides a booking form for client details, service selection, appointment date, and a message. |
| Contact | `contact.html` | Provides telephone, email, address, and opening-hours information. |
| Location | `location.html` | Provides the Pretoria location, a map image, and a Google Maps link. |

## 6. Website Navigation

The website uses a shared navigation menu in the header of every page. Each navigation item opens its own separate HTML page rather than scrolling to a section on one long page.

- Home → `index.html`
- About → `about.html`
- Services → `services.html`
- Pricing → `pricing.html`
- Gallery → `gallery.html`
- Bookings → `bookings.html`
- Contact → `contact.html`
- Location → `location.html`

The UGS logo links to `index.html`, and the Home page booking call-to-action links to `bookings.html`.

## 7. Main Website Features

The following features are implemented in the current project:

- Multi-page navigation across eight HTML pages.
- Salon services information for Hair Styling, Beauty Services, Skincare, and Grooming.
- Pricing information, including a grooming pricing table and downloadable price-list image.
- Gallery with four locally stored salon images and captions.
- Booking page and form with name, email, telephone, service, date, and message fields.
- Contact information including telephone, email, address, and opening hours.
- Location information, `Map.png`, and a Google Maps Pretoria, Gauteng link.
- UrbanGlow Salon UGS logo in the shared header.
- Responsive design for desktop, tablet, and mobile screens.
- CSS hover, focus, and active states for navigation links, buttons, call-to-action links, and form controls.
- Dedicated responsive service-card styling for the service sections.
- Existing UrbanGlow background image applied through the external stylesheet.

## 8. Design and Colour Scheme

The current UrbanGlow Salon colour scheme is defined in `css/style.css`:

- **Sage Green:** `#8FAF9A`
- **Dark Sage:** `#4F6658`
- **Warm Cream:** `#F7F3EC`
- **Charcoal:** `#2F3430`
- **Blush:** `#D9A6A6`
- **White:** `#FFFFFF`

Sage green is used for borders, accents, and service-card highlights. Dark sage and charcoal are used for headings, navigation, labels, and readable text. Warm cream is used for content panels, form controls, and the background-image overlay. Blush is used sparingly for hover, focus, and navigation indicators. White is used for high-contrast text on dark sage buttons, table headings, and the footer.

## 9. Responsive Design

The responsive design is implemented in `css/style.css` using these media queries:

- `@media (max-width: 768px)` for tablet and smaller screens.
- `@media (max-width: 420px)` for smaller mobile/phone screens.

Responsive adjustments include:

- Flexible header and main-content widths.
- Reduced spacing and padding on smaller screens.
- Navigation links that wrap across available rows.
- Smaller navigation and heading typography at narrower widths.
- Gallery images that become full width on smaller screens.
- Images using `max-width: 100%` and `height: auto` to prevent distortion.
- Flexible form controls constrained to the available content width.
- Tables that can scroll within their own area on small screens when required.
- Service cards with reduced minimum height on smaller screens.
- Mobile background positioning and scrolling behavior.
- `overflow-x: hidden` on the body to prevent unwanted page-level horizontal scrolling.

## 10. Images and Assets

The following image files are present in the project's `images/` folder:

- `UGS Logo design.jpg` — UGS UrbanGlow Salon logo used in the header.
- `UrbanGlow background.jpg` — background image used through `css/style.css`.
- `UGS Price list.jpg` — price-list image used as the downloadable resource on `pricing.html`.
- `UGS Hair Stylist.jpg` — hair-styling image used in the Gallery page.
- `UGS Services.jpg` — services/skincare image used in the Gallery page.
- `UGS Barber.jpg` — barber image used in the Gallery page.
- `UGS Saloon Shop.jpg` — salon-shop image used in the Gallery page.
- `Map.png` — map image used on `location.html`.

The website image assets were sourced from Unsplash where applicable and are stored locally in the project's `images/` folder. No individual photographer names or specific Unsplash photo-page URLs are identified in the project files.

## 11. Technologies Used

- **HTML5:** Structures the eight pages, headings, navigation, sections, forms, tables, figures, images, links, and footers.
- **CSS3:** Provides the external styling, colour scheme, typography, layout, responsive behavior, image handling, forms, tables, service cards, and interactive states.
- **Visual Studio Code:** Used as the development editor and for working with the project files and Live Server workflow.
- **Git and GitHub:** Used for version control, descriptive commits, branch synchronisation, and the remote repository.

## 12. File Structure

```text
UrbanGlow Salon/
├── index.html
├── about.html
├── services.html
├── pricing.html
├── gallery.html
├── bookings.html
├── contact.html
├── location.html
├── README.md
├── CHANGELOG.md
├── WEBSITE_OUTLINE.md
├── css/
│   └── style.css
├── images/
│   ├── Map.png
│   ├── UGS Barber.jpg
│   ├── UGS Hair Stylist.jpg
│   ├── UGS Logo design.jpg
│   ├── UGS Price list.jpg
│   ├── UGS Saloon Shop.jpg
│   ├── UGS Services.jpg
│   └── UrbanGlow background.jpg
└── js/
```

The `js/` directory is present, but no JavaScript functionality is currently used by the website pages.

## 13. Testing and Validation

The website was tested through a browser/Live Server workflow and responsive viewport checks. Testing covered:

- Desktop, tablet, and mobile/phone screen sizes.
- All eight HTML pages and their shared navigation.
- CSS loading through `css/style.css`.
- Responsive layout, navigation, typography, images, forms, tables, and service cards.
- Image paths and exact local filenames.
- The UGS logo, gallery images, price-list image, map, and background image.
- Prevention of unwanted horizontal scrolling on smaller screens.
- HTML and CSS diagnostics, which reported no errors during the completed validation checks.

## 14. GitHub Repository

**Repository:**

https://github.com/Lesedi426/UrbanGlow--Website.git

**Live Website:**

https://lesedi426.github.io/UrbanGlow--Website/

## 15. References

- Unsplash — https://unsplash.com/
- Google Maps — https://www.google.com/maps/search/?api=1&query=Pretoria%2C+Gauteng

The website does not use an external CSS framework or external stylesheet. Shared styling is contained in the local `css/style.css` file.
