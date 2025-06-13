# GitHub Explorer

A modern web application to discover trending open source projects, analyze repository statistics, and manage your collection of bookmarked repositories.

## Features

- Explore trending GitHub repositories
- Filter and search repositories
- View repository statistics and charts
- Bookmark your favorite repositories
- Responsive UI with dark mode support
- Built with React, Vite, Tailwind CSS, and Radix UI

## Project Structure
hadcn/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── ui/
│ │ ├── BookmarkedReposProps.jsx
│ │ ├── FilterPanel.jsx
│ │ ├── RepositoryCard.jsx
│ │ └── StatsChart.jsx
│ ├── hooks/
│ ├── lib/
│ ├── pages/
│ │ ├── Index.jsx
│ │ └── NotFound.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── package.json
├── vite.config.js
└── jsconfig.json


## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd shadcn

2. Install dependencies:
    npm install
    # or
    yarn install
    # or
    pnpm install

## Development
    Start the development server:
    npm run dev
    Open http://localhost:5173 in your browser.

    npm run preview
## Tech Stack
React
Vite
Tailwind CSS
Radix UI
Lucide Icons
TanStack React Query
Recharts
