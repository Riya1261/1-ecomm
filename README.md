# FashionHub - Modern E-Commerce UI

FashionHub is a clean, minimal, and fully responsive e-commerce storefront landing page built using **React** and modern **CSS Grid/Flexbox**. It features a smooth dual-tone design that seamlessly adapts to both light and dark system preferences.

---

## 🚀 Features

* **Clean Aesthetics:** Minimal typography, balanced whitespace, and flat card designs for a high-end retail feel.
* **Fully Responsive Grid:** Dynamically adjusts across desktop, tablet, and mobile displays using `auto-fit` layout structures.
* **System Native Dark Mode:** Automatically syncs with the user's system preferences using native CSS variables.
* **Component-Driven Architecture:** Modular React components for effortless scaling and maintenance.

---

## 📸 Interface Preview

### Desktop View
![Desktop Landing Preview](./public/Screenshot%202026-06-07%20125011.png)

### Responsive Grid & Sections
![Grid Layout Preview](./public/Screenshot%202026-06-07%20125045.png)

---

## 🛠️ Project Structure

```text
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Transparent, fixed navigation bar
│   │   ├── Hero.jsx          # Left-aligned marquee banner with call-to-action
│   │   ├── Categories.jsx    # Smooth grid container for collection categories
│   │   ├── Products.jsx      # Flat-card trending product catalog display
│   │   ├── Testimonials.jsx  # Customer feedback and review module
│   │   └── Footer.jsx        # Storefront index & rights notice
│   ├── App.jsx               # Entry component bundle
│   ├── App.css               # Main layout structures & custom component spacing
│   ├── index.css             # System typography theme and light/dark configurations
│   └── main.jsx              # Virtual DOM entrypoint
