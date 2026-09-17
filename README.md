# UrbanGlow Salon

## Project Overview

UrbanGlow Salon is a multi-page website developed for the WEDE5020 Web Development Introduction POE. It presents a salon and grooming business in a professional, accessible, and visually consistent format. The website is designed for current and prospective salon clients who want to learn about available services, review prices and images, submit a booking enquiry, find contact information, and locate the salon.

The website uses eight dedicated HTML pages with a consistent header, UGS logo, navigation menu, content area, and footer. Each page focuses on a specific area of the salon's information rather than placing all content on one long scrolling page.

## Project Purpose

The purpose of the project is to provide UrbanGlow Salon with a clear online presence and a practical information resource for its clients. The website communicates the salon's services, pricing, visual portfolio, booking process, contact details, and location.

The separate page structure supports straightforward browsing. Visitors can move directly from the navigation menu to the Home, About, Services, Pricing, Gallery, Bookings, Contact, or Location page. The website also provides a booking form, a downloadable price-list image, a gallery of salon-related images, and a map image on the Location page.

## Technologies Used

- **HTML5:** Used to structure the eight website pages, including headings, navigation, sections, forms, tables, images, figures, links, and footer content.
- **CSS3:** Used to style the website's layout, typography, colours, spacing, content panels, navigation, buttons, tables, forms, gallery, background image, responsive behavior, and interactive states.
- **External stylesheet:** All shared styling is contained in `css/style.css`, which is linked by all eight HTML pages.
- **Local image assets:** Existing images in the project's `images/` folder are used for branding, the background, gallery content, the price list, and the map.

No JavaScript functionality is used by the current website implementation.

## Website Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduces UrbanGlow Salon and provides a call-to-action link to the booking page. |
| About | `about.html` | Explains the salon's background, aims, services, and professional environment. |
| Services | `services.html` | Presents the Hair Styling, Beauty Services, Skincare, and Grooming offerings. |
| Pricing | `pricing.html` | Provides the price list, downloadable price-list image, and existing grooming price table. |
| Gallery | `gallery.html` | Displays salon, hair styling, skincare, and barber-related images with captions. |
| Bookings | `bookings.html` | Provides a booking form for client details, service selection, appointment date, and a message. |
| Contact | `contact.html` | Provides telephone, email, address, and opening-hours information. |
| Location | `location.html` | Provides the Pretoria location, a map image, and a Google Maps link. |

## Features

The following features are implemented in the current project:

- **Consistent navigation:** All eight pages include links to the complete set of website pages.
- **UrbanGlow Salon UGS logo:** The existing `images/UGS Logo design.jpg` image is used in the shared header and links back to `index.html`.
- **Services information:** The Services page documents Hair Styling, Beauty Services, Skincare, and Grooming.
- **Pricing information:** The Pricing page includes a grooming price table and a downloadable price-list image.
- **Gallery:** The Gallery page displays four existing salon-related images with captions.
- **Booking form:** The Bookings page includes fields for name, email, telephone number, selected service, appointment date, and message.
- **Contact information:** The Contact page includes the salon's telephone number, email address, Pretoria address, and opening hours.
- **Location and map:** The Location page includes `images/Map.png` and a link to a Google Maps search for Pretoria, Gauteng.
- **Responsive design:** The stylesheet includes media queries, flexible widths, responsive images, wrapped navigation, and mobile adjustments.
- **Interactive navigation and buttons:** Navigation links use file-based destinations, while the Home call-to-action and form buttons are styled as interactive controls.
- **CSS hover and focus effects:** The stylesheet implements `:hover` and `:focus-visible` states for links and navigation, hover/focus states for buttons, and focus states for form controls.
- **Background image:** The existing `images/UrbanGlow background.jpg` is used as the website background through the shared stylesheet.

## Design and Colour Scheme

The website uses a restrained salon-oriented palette defined in `css/style.css`:

- **Sage Green:** `#8FAF9A`
- **Dark Sage:** `#4F6658`
- **Warm Cream:** `#F7F3EC`
- **Charcoal:** `#2F3430`
- **Blush:** `#D9A6A6`
- **White:** `#FFFFFF`

Sage green is used for borders, accents, and supporting interface details. Dark sage and charcoal provide readable heading, navigation, label, and body-text colours. Warm cream is used for content backgrounds, form fields, and the background-image overlay, creating a calm and polished salon presentation. Blush is used sparingly for navigation indicators, button hover states, and form focus outlines. White is used where light text is needed against dark sage backgrounds, such as buttons, table headings, and the footer.

## Responsive Design

The website adapts to desktop, tablet, and mobile screen sizes through CSS media queries in `css/style.css`.

- At widths up to `768px`, the background changes to a mobile-friendly scroll attachment and top-centered position.
- At widths up to `768px`, the header, main content, and content panels use narrower widths and reduced spacing.
- Navigation links wrap onto multiple lines and use smaller gaps and text sizes.
- Gallery figures change to full-width blocks on smaller screens.
- Tables become horizontally scrollable within their own area when their content requires more width.
- At widths up to `420px`, the main heading, navigation links, and table cell padding are reduced for small phone screens.
- Images use `max-width: 100%` and automatic height scaling so they remain within their containers.
- Form controls use flexible widths limited by their available content area.
- The body uses `overflow-x: hidden` to prevent unwanted horizontal page scrolling.

## Images and Assets

The following exact filenames are present in the project's `images/` folder:

- `UGS Logo design.jpg` — UGS UrbanGlow Salon logo used in the header on all pages.
- `UrbanGlow background.jpg` — website background image referenced by `css/style.css`.
- `UGS Price list.jpg` — downloadable price-list image used on `pricing.html`.
- `UGS Hair Stylist.jpg` — hair-styling image used on the Gallery page and Home page gallery content.
- `UGS Services.jpg` — services/skincare image used on the Gallery page and Home page gallery content.
- `UGS Barber.jpg` — barber image used on the Gallery page and Home page gallery content.
- `UGS Saloon Shop.jpg` — salon-shop image used on the Gallery page.
- `Map.png` — location map image used on `location.html`.

The project uses local image paths with the exact spelling, capitalisation, spaces, and file extensions shown above. No replacement or online image assets are used by the website's image implementation.

## File Structure

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
├── CHANGELOG.md
├── README.md
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

The `js/` directory is present in the project, but no JavaScript functionality is used or documented as part of the current website implementation.

## Navigation

The website uses separate HTML pages rather than one long scrolling page. The shared navigation appears in the header of every page and links to the following destinations:

- Home → `index.html`
- About → `about.html`
- Services → `services.html`
- Pricing → `pricing.html`
- Gallery → `gallery.html`
- Bookings → `bookings.html`
- Contact → `contact.html`
- Location → `location.html`

The Home page's **Book an Appointment** call-to-action links directly to `bookings.html`. The UGS logo also links to `index.html`.

## Accessibility and Usability

The current project includes the following accessibility and usability features:

- Images include alternative text, including the UGS logo, gallery images, and map image.
- The page structure uses headings, navigation, sections, figures, captions, a form, a table, an address block, and a footer to organise information.
- Navigation labels clearly identify the destination pages.
- The external stylesheet provides readable typography and consistent spacing.
- Warm cream content areas improve text readability over the background image.
- Dark sage and charcoal text provide strong contrast against the light content areas.
- Navigation links, buttons, and form controls have clear visual styling.
- `:focus-visible` and form `:focus` rules provide visible interaction feedback.
- Responsive layouts support desktop, tablet, and mobile screen widths.
- Images scale within their containers, and horizontal page scrolling is prevented on small screens.

The booking form includes labels associated with its controls through `for` and `id` attributes, and required fields are marked with the HTML `required` attribute.

## Testing and Validation

The project was validated during development using project diagnostics and targeted path checks. The following areas were checked:

- All eight HTML pages were checked for diagnostics errors.
- The shared `css/style.css` file was checked for CSS diagnostics errors.
- The eight stylesheet links were checked to confirm that they use `css/style.css`.
- Navigation links were checked to confirm that they point to the corresponding separate HTML pages.
- Image filenames and paths were checked against the actual contents of the `images/` folder.
- The UGS logo, background, gallery images, price-list image, and map image were checked as existing local assets.
- Responsive CSS declarations, responsive images, media queries, and mobile layout rules were checked.
- Horizontal scrolling protection was checked through the `overflow-x: hidden` rule and responsive table behavior.
- The booking form structure and its controls were included in the HTML validation checks.

The project diagnostics reported no errors for the eight HTML pages or the shared stylesheet during the completed validation checks.

## Development and Feedback

The website was refined during development in response to feedback from Part 1. The improvements included restoring and expanding the external CSS presentation, establishing a consistent salon brand through the UGS logo and colour scheme, correcting local image paths, and changing the navigation from one long scrolling page to eight dedicated HTML pages.

The shared header and footer were made consistent across the pages, while page-specific content was kept on its appropriate page. Responsive rules were added and checked for smaller devices, including navigation wrapping, scalable images, mobile spacing, flexible form controls, table handling, and prevention of unwanted horizontal scrolling.

## References

The following resource is used by the website:

- Google Maps — https://www.google.com/maps/search/?api=1&query=Pretoria%2C+Gauteng

The website does not use an external CSS framework or an external stylesheet. All shared styling is contained in the local project stylesheet, `css/style.css`.

The image files used by the website are local project assets stored in the `images/` folder. Image attribution or source information is not included in the project files, and no image creators, external image websites, or image source URLs are identified in the available documentation.

## Author

- **Student Name:** Lesedi Ramorula
- **Student Number:** st10509100
- **Module:** WEDE5020 Web Development (Introduction)
