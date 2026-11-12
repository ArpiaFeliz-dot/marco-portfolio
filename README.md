# Marco Vasquez — Developer Portfolio (`marco-portfolio`)

Personal software developer portfolio for **Marco Vasquez** (Choluteca, Honduras), designed and engineered with **React**, **Vite**, **JavaScript**, **Custom CSS**, **Framer Motion**, and **Lucide React**.

## ✨ Key Features

- **Distinctive Editorial Dark Aesthetic**: Almost-black charcoal background (`#09090B`), electric lime green accent (`#D4FF00`), warm ivory typography (`#F5F4EF`), and subtle architectural grid lines.
- **Full Bilingual Support (English / Spanish)**: Instant language switching across all sections, navigation items, interactive UI mockups, skill descriptions, academic credentials, and metadata.
- **Interactive Project Showcases**:
  1. **Employee Records Management System** — Academic final software project (PHP, MySQL/MariaDB, JavaScript, Bootstrap 5, OOP, MVC, PDO) featuring an interactive, searchable, and filterable HR dossier mockup with anonymized sample records.
  2. **Veterinary Clinic Mobile Application** — Learning mobile & backend project (Ionic, Node.js, MySQL, JavaScript) featuring an interactive mobile client mockup for pet registration and appointment views.
- **Honest Proficiency Categorization**: Skills organized across Frontend, Backend, Databases, Mobile, Tools, and Architecture with transparent context tiers rather than arbitrary percentages.
- **Accessible & Motion-Safe**: Semantic HTML5 landmarks, keyboard navigation, skip-to-content link, `prefers-reduced-motion` support, and responsive layouts across desktop, tablet, and mobile viewports.

---

## 🛠️ Tech Stack

- **Framework**: React 18 (JavaScript)
- **Build Tool**: Vite 6
- **Styling**: Custom CSS (CSS Variables, CSS Grid, Flexbox, Responsive Media Queries)
- **Animations**: Framer Motion (`useReducedMotion` enabled)
- **Icons**: Lucide React

---

## 📂 Project Structure

```text
marco-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- **Node.js** `v18+` (tested on `v24.15.0`)
- **npm** `v9+`

### 1. Install Dependencies

```bash
cd marco-portfolio
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal (typically `http://localhost:5173`).

### 3. Build for Production

```bash
npm run build
```

The production-ready static bundle is output to `dist/`.

### 4. Preview Production Build Locally

```bash
npm run preview
```

---

## 🌐 Deployment (GitHub & Vercel)

This project is pre-configured for zero-configuration deployment on **Vercel**:

1. Create a new repository on GitHub (e.g., `marco-portfolio`).
2. Initialize Git inside `marco-portfolio`, commit all files, and push to your GitHub repository.
3. Import the repository in [Vercel](https://vercel.com/):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. No environment variables are required by default.

---

## 🔧 Customizing Personal Assets

All bilingual copy and profile URLs are centralized in `src/data/portfolioData.js`:
- **Email**: `ipod20314@gmail.com`
- **LinkedIn**: `https://www.linkedin.com/in/marco-vasquez-3ab2ba24b/`
- **GitHub**: `https://github.com/ArpiaFeliz-dot`
- If you wish to add downloadable CV PDF files or public repository links for individual projects later, you can add them directly inside `src/data/portfolioData.js`.
