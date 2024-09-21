# Vite + React + TypeScript Chrome Extension

This project is a Chrome extension built with **Vite**, **React**, and **TypeScript**. It uses Vite for fast builds and efficient development, enabling a seamless workflow for modern web app and extension development.

## Getting Started

Before you start, ensure you have **Node.js** installed. Then, follow these steps to install dependencies and run the project.

### Installation

Navigate to the `/server` directory and install the project dependencies by running:

```bash
npm install
```

### Development

To start the project in a development environment, run:

```bash
npm run dev
```

This will spin up a development server at [http://localhost:5173](http://localhost:5173). Here, you can view the React app and make live updates. This mode allows you to quickly iterate and test your components locally.

### Building for Production

To build the project for production as a Chrome extension, run:

```bash
npm run build
```

This will output the compiled and minified files to the `/extension` folder at the root of the project. The `/extension` folder contains everything needed to load the extension into Chrome, including:

- `index.html`: The main popup for the Chrome extension (configured in `manifest.json`).
- `assets/`: This folder contains the bundled JavaScript files (`popup.js`) and any other assets like CSS, images, etc.
- `manifest.json` and other static assets from the `public/` folder.

You can then load the unpacked extension from the `/extension` folder in **Chrome** or **Edge**.

### Loading the Extension into Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer Mode** (toggle in the top-right corner).
3. Click the **"Load unpacked"** button.
4. Select the `extension/` folder from this project.
5. The extension will now be loaded and ready to use for testing.

### Project Structure

```bash
├── extension/               # Output folder after running `npm run build`
│   ├── assets/              # Contains built JS and CSS
│   ├── index.html           # Main popup for the Chrome extension
│   ├── manifest.json        # Chrome extension manifest
│   └── icon.png             # Extension icon
└── server/                  # Contains source code and configurations
    ├── public/              # Static files (manifest.json, icons, etc.)
    ├── src/                 # Source code (React components, etc.)
    ├── index.html           # Entry HTML file used during development
    ├── package.json         # Project dependencies and scripts
    └── vite.config.ts       # Vite configuration file
```

### Scripts

- **`npm run dev`**: Start the development server on `localhost:5173`.
- **`npm run build`**: Build the extension for production, outputting to the `/extension` folder.
- **`npm run preview`**: Preview the production build locally.

### License

This project is licensed under the MIT License.
