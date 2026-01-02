# Recipe Finder App

A Node.js/Express web application for searching recipes using the Spoonacular API.

## Features

- Search for recipes by ingredients or keywords
- Beautiful Material Design Bootstrap UI
- Recipe API integration with Spoonacular

## Prerequisites

- Node.js 18+ or later
- pnpm (or npm/yarn)
- Spoonacular API key (free tier available at https://spoonacular.com/food-api)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd recipeFinder
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Set up environment variables:
```bash
# Create a .env file in the root directory
cp .env.example .env
# Edit .env and add your Spoonacular API key
```

Example `.env` file:
```
SPOONACULAR_API_KEY=your_api_key_here
PORT=3000
```

## Usage

### Development Mode (with auto-reload and debugging)
```bash
pnpm run dev
# or
npm run dev
```
This starts the app with:
- Auto-reload on file changes
- Debug logging enabled
- Development environment

### Production Mode
```bash
pnpm start
# or
npm start
```
This starts the app with production settings.

### Build & Check (before deployment)
```bash
pnpm run build
# or
npm run build
```
This runs code quality checks (linting, formatting) to ensure code is deployment-ready.

The app will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - Home page
- `GET /homepage` - Recipe finder page
- `GET /receipesearch?query=<search_term>` - Search for recipes

Example:
```bash
curl "http://localhost:3000/receipesearch?query=pizza"
```

## Code Quality

This project uses Biome for linting and formatting:

```bash
# Format code (auto-fix)
pnpm run format

# Check formatting only (no changes)
pnpm run format:check

# Lint code (auto-fix)
pnpm run lint

# Check linting only (no changes)
pnpm run lint:check

# Check and fix everything (format + lint)
pnpm run check

# Check everything without fixing (for CI/CD)
pnpm run check:ci

# Clean install (remove node_modules and reinstall)
pnpm run clean
```

## Project Structure

```
recipeFinder/
├── app.js              # Express app configuration
├── bin/
│   └── www            # Server startup script
├── routes/            # Route handlers
│   ├── index.js       # Main routes including recipe search
│   └── homePage.js    # Homepage route
├── views/             # Pug templates
├── public/            # Static assets (CSS, JS, images)
└── package.json       # Dependencies and scripts
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express 5** - Web framework
- **Pug** - Template engine
- **Axios** - HTTP client for API requests
- **Material Design Bootstrap** - UI framework
- **Spoonacular API** - Recipe data
- **dotenv** - Environment variable management
- **Biome** - Code formatting and linting

## Notes

- The app includes a fallback API key for development, but you should use your own API key in production
- The Spoonacular free tier has rate limits - check their documentation for details

## License

Private