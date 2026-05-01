# 📰 MyNews — Your Personalized News Hub

> Stay informed. Stay ahead. Read what matters to you — in the language you love.

<br><br>

## 🖼️ UI Preview


<img width="1903" height="831" alt="Screenshot 2026-05-01 122015" src="https://github.com/user-attachments/assets/3104ed2a-58d3-492c-88d2-f0b6b1d05223" />

> *The UI follows a neumorphic design language with a soft green-beige palette, rounded cards, and elegant typography.*

<br><br>

## 🌐 Live Demo

🔗 **[Visit MyNews](https://mynews-ten.vercel.app/)**

<br><br>

## 📖 About the Project

**MyNews** is a modern, fully responsive news web application that brings you the latest headlines and in-depth stories across a wide range of topics — all in one beautifully designed place. Whether you are passionate about technology breakthroughs, following the latest sports scores, keeping up with global politics, or tracking business trends, MyNews has you covered.

The application is built with a clean and intuitive **neumorphic UI**, giving it a soft, tactile, and premium feel that stands out from conventional flat or material design. Every card, button, and surface has been crafted to feel smooth and modern, making the reading experience both visually pleasing and highly functional.

<br><br>

## ✨ Features

- 🗂️ **Multi-Category News Feed** — Browse news across categories including **Trending**, **Business**, **Technology**, **Politics**, **Sports**, and **Entertainment**, all accessible from the top navigation bar.

- 🔍 **Smart Search** — Looking for something specific? Use the built-in search bar to instantly find articles and stories relevant to your query, without leaving the page.

- 🌏 **Language Support (English & Hindi)** — MyNews supports multilingual reading. Users can seamlessly switch between **English** and **Hindi**, making the platform accessible to a wider audience across India and beyond. Translations are handled via an integrated translation service.

- 🎨 **Neumorphic UI Design** — The entire interface is designed using the **Neumorphism** design paradigm — soft shadows, subtle depth, and a cohesive color palette that is easy on the eyes and delightful to interact with.

- 📱 **Highly Mobile Responsive** — MyNews is built to look and feel great on every screen size — from large desktop monitors to tablets and smartphones. The layout gracefully adapts to any viewport without compromising usability or aesthetics.

- ⚡ **Fast & Lightweight** — Powered by **Vite** and **React**, the application loads blazing fast and delivers a smooth, snappy user experience.

<br><br>

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| ⚛️ Frontend Framework | React (JSX) |
| ⚡ Build Tool | Vite |
| 🎨 Styling | TailwindCSS |
| 🌐 Translation | Custom Translation Service (`translateservices.js`) |
| 🚀 Deployment | Vercel |

<br><br>

## 📁 Folder Structure

```
MyNews/
├── public/                     # Static assets (favicon, images, etc.)
├── src/
│   ├── components/
│   │   ├── body.jsx            # Main news feed and article card rendering
│   │   ├── footer.jsx          # Footer section of the application
│   │   ├── header.jsx          # Navigation bar with category links and search
│   │   └── layout.jsx          # Overall page layout wrapper
│   ├── services/
│   │   └── translateservices.js # Language translation logic (English ↔ Hindi)
│   ├── App.jsx                 # Root application component
│   ├── index.css               # Global styles and neumorphic design tokens
│   └── main.jsx                # Application entry point
├── .env                        # Environment variables (API keys, etc.)
├── .gitignore                  # Git ignored files
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Locked dependency tree
├── vercel.json                 # Vercel deployment configuration
├── vite.config.js              # Vite build configuration
└── README.md                   # Project documentation
```

<br><br>

## 🚀 Getting Started

Follow these steps to set up and run MyNews locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

<br>

### Installation & Running Locally

**1. Clone the repository**

```bash
git clone https://github.com/your-username/mynews.git
cd mynews
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory and add your news API key:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

**4. Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

**5. Build for production**

```bash
npm run build
```

**6. Preview the production build locally**

```bash
npm run preview
```

<br><br>

## ☁️ Deployment

MyNews is deployed on **[Vercel](https://vercel.com/)** for fast, reliable, and zero-configuration hosting.

To deploy your own version:

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and import your repository.
3. Add your environment variables (e.g., `VITE_NEWS_API_KEY`) in the Vercel project settings.
4. Click **Deploy** — Vercel will handle the rest! 🎉

<br><br>

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! If you would like to improve MyNews or add new features, feel free to fork the repository and submit a pull request.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

<br><br>

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

<br><br>
