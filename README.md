# Opsfuxion Technologies Ltd Website

A premium dark-mode, single-page marketing website for **opsfuxiontech.com**.

## Files
- `index.html` — full single-page markup and content sections
- `styles.css` — design system + responsive styling
- `script.js` — mobile navigation, logo toggle, accordion interactions, scroll-to-top

## Local Asset Setup
Place your brand assets in an `assets/` folder at the same level as `index.html`:

- `assets/logo-a.jpg`
- `assets/logo-b.jpg`
- `assets/banner-1.jpg`
- `assets/banner-2.jpg`

> The hero currently uses `banner-1.jpg`. You can switch to Banner 2 in `styles.css` by changing `.hero-bg` background image to `assets/banner-2.jpg`.

## Run Locally
Open `index.html` directly in your browser.

For local server testing:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## WordPress Integration

### Option A: Elementor (HTML Widget) + Custom CSS/JS
Best for quick launch without theme development.

1. In WordPress, create a new page (e.g. **Home**).
2. Edit with Elementor.
3. Add one **HTML widget**.
4. Paste the full body structure from `index.html` (everything inside `<body>...</body>`).
5. In Elementor Site Settings or theme Customizer:
   - Add the content of `styles.css` into **Custom CSS**.
6. Add the content of `script.js`:
   - Elementor custom code (footer) OR
   - A plugin such as “WPCode” / “Code Snippets” (front-end footer script).
7. Upload assets to Media Library and either:
   - Keep paths as `/wp-content/uploads/...` and replace asset URLs in HTML/CSS, or
   - Create a static `/assets/` directory in your theme and keep file names unchanged.
8. Set page template to **Elementor Full Width** and disable default title.
9. Set this page as homepage in **Settings → Reading**.

### Option B: WordPress Custom Page Template
Best for cleaner, maintainable theme-level integration.

1. In your active theme, create:
   - `page-opsfuxion.php`
   - `assets/css/opsfuxion.css`
   - `assets/js/opsfuxion.js`
2. Copy HTML from `index.html` body into `page-opsfuxion.php`.
3. Enqueue CSS/JS in `functions.php` for that template.
4. Move image assets to your theme folder and update URLs with `get_template_directory_uri()`.
5. Create a page in WP admin and assign template **Opsfuxion Landing**.
6. Set as homepage.

Template header sample:

```php
<?php
/*
Template Name: Opsfuxion Landing
*/
get_header();
?>
<!-- paste body content here (without <body> tags) -->
<?php get_footer(); ?>
```

Enqueue sample:

```php
add_action('wp_enqueue_scripts', function () {
  if (is_page_template('page-opsfuxion.php')) {
    wp_enqueue_style('opsfuxion-style', get_template_directory_uri() . '/assets/css/opsfuxion.css', [], '1.0');
    wp_enqueue_script('opsfuxion-script', get_template_directory_uri() . '/assets/js/opsfuxion.js', [], '1.0', true);
  }
});
```

---

## Calendly Hookup (Primary CTA)
Current CTA links point to `/book` as requested.

To connect Calendly later:
1. Create a `/book` page in WordPress.
2. Embed your Calendly widget or booking tool there.
3. Keep all CTA links unchanged (already routed to `/book`).

---

## Tiny Content Style Guide

### Tone
- Calm, expert, practical, warm.
- Avoid hype and dense jargon.
- Sound like a reliable systems partner.

### Messaging Style
- Lead with outcomes.
- Mention deliverables clearly.
- Emphasize documentation, governance, and predictable delivery.

### CTA Pattern
- Primary: **Book a Discovery Call**
- Secondary: **Request scope call**
- Supportive CTA: **Subscribe**

### Microcopy Examples
- “Remote-first • Abuja, Nigeria • Working globally”
- “Clear documentation, predictable delivery, no chaos.”
- “Demo / Reference Build”
- “Privacy-friendly website. No invasive tracking.”

### Accessibility + UX Notes
- Semantic landmarks (`header`, `main`, `section`, `footer`)
- Visible focus states inherited from browser defaults + high contrast palette
- Mobile-first layout with hamburger menu
- Accordions use `aria-expanded` and hidden panels

