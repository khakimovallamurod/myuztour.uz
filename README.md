# UZTOUR - Uzbekistan Tourism Platform

A professional, fully responsive multi-page static HTML/CSS/JS website for exploring tourism in Uzbekistan. This website features a clean, modern design with a green color theme and provides comprehensive information about regions, hotels, restaurants, tours, and more.

## 🌟 Features

- **14 Province Pages** - Detailed pages for each Uzbekistan region
- **Hotels & Restaurants** - Comprehensive listings with filters
- **Tour Packages** - Curated travel experiences
- **Tourist Navigator** - Map integration placeholders
- **Virtual Tours** - 360° panoramic tour placeholders
- **Taxi Services** - Yandex Taxi integration and local numbers
- **News & Updates** - Latest tourism information
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **SEO Optimized** - Semantic HTML5 and meta tags
- **Accessible** - ARIA labels and alt text

## 📁 Project Structure

```
uztour/
├── index.html                    # Home page
├── regions.html                  # All regions listing
├── hotels.html                   # Hotels listing
├── restaurants.html              # Restaurants listing
├── tours.html                    # Tour packages
├── navigator.html                # Tourist navigator
├── virtual-tours.html            # Virtual tours
├── taxi.html                     # Taxi services
├── news.html                     # News & updates
├── payment.html                  # Payment information
├── samarkand.html                # Samarkand province page
├── bukhara.html                  # Bukhara province page
├── tashkent-city.html           # Tashkent City page
├── khorezm.html                 # Khorezm province page
├── fergana.html                 # Fergana province page
├── andijan.html                 # Andijan province page
├── navoi.html                   # Navoi province page
├── namangan.html                # Namangan province page
├── kashkadarya.html             # Kashkadarya province page
├── jizzakh.html                 # Jizzakh province page
├── surxondarya.html             # Surxondarya province page
├── sirdarya.html                # Sirdarya province page
├── tashkent-region.html         # Tashkent Region page
├── republic-karakalpakstan.html # Karakalpakstan page
├── assets/
│   ├── css/
│   │   └── styles.css           # Global styles
│   ├── js/
│   │   └── main.js              # Interactive functionality
│   └── img/
│       ├── hero/                # Hero images
│       ├── provinces/           # Province images
│       │   ├── samarkand/
│       │   │   └── hero.jpg
│       │   ├── bukhara/
│       │   │   └── hero.jpg
│       │   └── ... (all provinces)
│       ├── hotels/              # Hotel images
│       └── restaurants/         # Restaurant images
└── README.md                    # This file
```

## 🎨 Design System

### Colors

- **Primary Green**: `#28A745`
- **Secondary Green**: `#1E7E34`
- **Background White**: `#FFFFFF`
- **Background Light**: `#F6F7F9`
- **Text Dark**: `#212529`
- **Text Gray**: `#6C757D`
- **Border Color**: `#DEE2E6`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Weight 600-700
- **Body Text**: Weight 400
- **Font Size**: 16px base

### Buttons

- **Border Radius**: 12-14px
- **Padding**: 12px 28px
- **Font Weight**: 600

### Cards

- **Border Radius**: 14px
- **Shadow**: Minimal (0 2px 8px rgba(0,0,0,0.08))
- **Hover Effect**: Lift and enhanced shadow

## 📱 Responsive Breakpoints

- **Desktop**: ≥1200px
- **Tablet**: 768px - 1199px
- **Mobile**: ≤767px
- **Small Mobile**: ≤480px

## 🚀 Getting Started

### Option 1: Open Directly

Simply open `index.html` in your web browser. All files are static and require no server.

### Option 2: Local Server (Recommended)

For better performance and testing:

```bash
# Using Python
cd uztour
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 🔧 Customization Guide

### Replacing Placeholder Images

1. **Province Images**:
   - Navigate to `assets/img/provinces/[province-name]/`
   - Replace `hero.jpg` with your image (recommended: 1920x600px)
   - Add gallery images as needed

2. **Hotel Images**:
   - Place images in `assets/img/hotels/`
   - Update `src` attributes in HTML files
   - Recommended size: 800x600px

3. **Restaurant Images**:
   - Place images in `assets/img/restaurants/`
   - Update `src` attributes in HTML files
   - Recommended size: 800x600px

### Updating Google Maps Links

Search for all instances of:
```html
https://www.google.com/maps/search/
```

Replace with actual coordinates or place IDs:
```html
https://www.google.com/maps/place/39.6542,66.9597
```

Or use embedded maps:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="400"></iframe>
```

### Updating Yandex Taxi Links

Current placeholder:
```html
<a href="https://taxi.yandex.com/" target="_blank">
```

Update with deep links for specific cities (contact Yandex for integration details):
```html
<a href="yandextaxi://route?end-lat=39.654&end-lon=66.959">
```

### Updating Contact Information

1. **Email Addresses**: Search and replace `info@uztour.uz` with your actual email
2. **Phone Numbers**: Replace `+998 71 123 4567` with real numbers
3. **Social Media**: Add your social media links in the footer

### Modifying Colors

Edit `assets/css/styles.css` and update CSS variables:

```css
:root {
    --primary-green: #28A745;    /* Change to your primary color */
    --secondary-green: #1E7E34;  /* Change to your secondary color */
    /* ... other variables */
}
```

### Adding New Pages

1. Duplicate an existing page (e.g., `regions.html`)
2. Update content
3. Add navigation link in header of all pages
4. Update footer links if needed

## ⚙️ JavaScript Features

The `main.js` file includes:

- **Mobile Navigation**: Hamburger menu for responsive design
- **Search**: Placeholder search functionality
- **Lightbox**: Image viewing modal
- **Booking Modal**: Hotel booking form (placeholder)
- **Filters**: Client-side filtering for hotels/restaurants
- **Smooth Scroll**: Anchor link smooth scrolling
- **Back to Top**: Floating button
- **Lazy Loading**: Image optimization

### Implementing Real Functionality

To make booking forms functional:

1. **Add Backend**: Use PHP, Node.js, or serverless functions
2. **Payment Gateway**: Integrate Stripe, PayPal, or local payment processor
3. **Database**: Store booking data in MySQL, PostgreSQL, or MongoDB
4. **Email**: Send confirmation emails using SendGrid, Mailgun, etc.

Example booking submission (PHP):

```php
<?php
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    // Process booking...
    // Send confirmation email...
}
?>
```

## 🔍 SEO Optimization

Each page includes:

- **Title Tags**: Unique, descriptive titles
- **Meta Descriptions**: Relevant descriptions for search engines
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Alt Text**: All images have descriptive alt attributes
- **Heading Hierarchy**: Proper H1-H3 structure

### Adding Structured Data

For better SEO, add JSON-LD structured data:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UZTOUR",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/assets/img/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+998-71-123-4567",
    "contactType": "customer service"
  }
}
</script>
```

## 🌐 Deployment

### Hosting Options

1. **GitHub Pages** (Free):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/uztour.git
   git push -u origin main
   ```
   Enable GitHub Pages in repository settings

2. **Netlify** (Free):
   - Drag and drop the `uztour` folder
   - Or connect GitHub repository

3. **Vercel** (Free):
   ```bash
   npm i -g vercel
   vercel
   ```

4. **Traditional Hosting**:
   - Upload via FTP to your web host
   - Point domain to the directory

## 🔒 Security Notes

- **No Backend**: This is a static site with no server-side code
- **Placeholder Forms**: Booking forms don't process real data
- **External Links**: Google Maps and Yandex Taxi links are placeholders
- **HTTPS**: Always deploy with SSL/TLS certificate

## ♿ Accessibility

The website follows WCAG 2.1 guidelines:

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text on all images
- Sufficient color contrast
- Responsive text sizing

## 📄 License

This is a demonstration project. Replace all content, images, and information with your actual data before commercial use.

## 🤝 Support & Contact

For questions about this template:

- Email: info@uztour.uz
- Phone: +998 71 123 4567

## 📝 Changelog

### Version 1.0.0 (2025-01-16)

- Initial release
- 14 province pages
- Full responsive design
- Interactive JavaScript features
- SEO optimized structure
- Accessibility compliant

## 🎯 Roadmap

Future enhancements could include:

- [ ] Real booking system integration
- [ ] User accounts and authentication
- [ ] Reviews and ratings system
- [ ] Multi-language support (English, Russian, Uzbek)
- [ ] Blog/news CMS integration
- [ ] Payment gateway integration
- [ ] Email newsletter signup
- [ ] Social media integration
- [ ] Analytics integration
- [ ] Advanced search with filters

## 🙏 Credits

- **Design**: Custom design for UZTOUR
- **Fonts**: Inter by Google Fonts
- **Icons**: Unicode emoji characters
- **Images**: AI-generated placeholder images

---

**Built with ❤️ for Uzbekistan Tourism**

*Last updated: November 16, 2025*
