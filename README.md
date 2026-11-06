# Better Beans Co. ☕🌱
*Artisanal Specialty Coffee Roastery • Ecoland, Davao City, Philippines*

> **⚠️ ACADEMIC DISCLAIMER**  
> This website and web application were developed strictly as an **undergraduate student academic project** for educational and laboratory presentation purposes. **Better Beans Co. is not affiliated with, endorsed by, or connected to any real commercial business or entity.** All products, prices, and transactions featured on this platform are simulated demo data.

---

## 🚀 Live Preview & Features
- **Minimalist Aesthetic**: Designed with a peaceful, pleasing-to-the-eyes pastel brown and warm beige palette (`#FAF7F2`, `#8C7365`, `#C3B091`).
- **Strict Role-Based Security**: 
  - **Customer Portal**: Browse whole bean collections, cafe drinks, read roastery history, locate the physical cafe, add items to the cart, place live orders, and generate printable digital receipts.
  - **Executive Admin Console**: Completely restricted from customer view, featuring real-time analytics, an interactive orders fulfillment pipeline, inventory stock/price editing, and a customer account directory.
- **Interactive Roastery Location**: Integrated Google Maps container and storefront visual showcase located directly beneath the "About Us" section.
- **Live Ordering Loop**: Customers can check out items to instantly generate a tracking reference (`ORD-###`), which syncs directly into the live admin orders queue.

---

## 🛠️ Tech Stack
- **Structure**: HTML5 (`index.html`)
- **Styling**: Tailwind CSS CDN & Custom Styles (`styles.css`)
- **Interactivity & State Management**: Alpine.js v3 (`app.js`)
- **Deployment**: GitHub Pages

---

## 📁 Project File Structure
```text
BetterBeansCo/
├── index.html      # Main markup, layouts, navigation, modals, and templates
├── styles.css      # Custom color tokens, scrollbar styling, and Alpine.js transitions
├── app.js          # Reactive data engine, authentication logic, cart system, and admin controls
└── README.md       # Project documentation and academic disclaimer
