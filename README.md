# AuraStream: A Visually Stunning On-Demand Streaming Platform

[cloudflarebutton]

AuraStream is a minimalist, high-performance, and visually breathtaking on-demand video streaming application. Built entirely on the Cloudflare ecosystem, it leverages Cloudflare Stream for video hosting and delivery, ensuring a seamless, buffer-free viewing experience for users worldwide. The application features a clean, intuitive interface designed with a 'less is more' philosophy, focusing on content discovery and an immersive playback experience.

The design prioritizes aesthetic excellence, with a sophisticated dark theme, subtle animations, and a spacious, grid-based layout that beautifully showcases video content.

## Key Features

- **High-Performance Streaming**: Built on Cloudflare Stream for fast, reliable, and global video delivery.
- **Elegant & Minimalist UI**: A clean, modern, and intuitive interface with a sophisticated dark theme.
- **Dynamic Video Gallery**: A responsive grid-based homepage to browse and discover content.
- **Immersive Player Experience**: A dedicated, distraction-free page for video playback.
- **Interactive Polish**: Smooth animations, hover states, and micro-interactions for a delightful user experience.
- **Fully Responsive**: Flawless layouts across all device sizes, from mobile to desktop.
- **Built on the Edge**: Powered by Cloudflare Workers and Durable Objects for a scalable and performant backend.

## Technology Stack

- **Frontend**: React, Vite, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router
- **Animation**: Framer Motion
- **Video Playback**: `@cloudflare/stream-react`
- **Backend**: Hono on Cloudflare Workers
- **Persistence**: Cloudflare Durable Objects

## Project Structure

The project is a monorepo with a clear separation of concerns:

- `src/`: Contains the React frontend application code.
  - `pages/`: Page components for different routes.
  - `components/`: Reusable UI components.
  - `lib/`: Utility functions and API client.
- `worker/`: Contains the Hono backend API running on Cloudflare Workers.
- `shared/`: Contains TypeScript types shared between the frontend and the worker.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Bun](https://bun.sh/)
- A [Cloudflare account](https://dash.cloudflare.com/sign-up)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated:
  ```bash
  bun install -g wrangler
  wrangler login
  ```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd aurastream
    ```

2.  **Install dependencies:**
    This project uses Bun for package management.
    ```bash
    bun install
    ```

### Running in Development Mode

To start the development server for both the frontend and the backend worker simultaneously, run:

```bash
bun run dev
```

This will:
- Start the Vite development server for the React frontend, typically on `http://localhost:3000`.
- Start the Wrangler development server for the Hono backend.
- The Vite server is configured to proxy API requests from `/api/*` to the worker, so you can interact with the full application seamlessly.

## Deployment

This application is designed to be deployed to the Cloudflare ecosystem.

1.  **Build the application:**
    This command bundles the frontend and prepares the worker for deployment.
    ```bash
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    Run the deploy script. This will deploy your application assets to Cloudflare Pages and the backend logic to Cloudflare Workers.
    ```bash
    bun run deploy
    ```

Alternatively, you can deploy your own version of AuraStream with a single click.

[cloudflarebutton]

## Implementation Roadmap

-   **Phase 1: Frontend Foundation & Visual Excellence**
    -   Build the complete, visually stunning frontend for the application, including the video gallery and player pages. The application will be fully styled, responsive, and interactive, using mock data for the video catalog.

-   **Phase 2: Backend API & Data Persistence**
    -   Replace the mock data with a dynamic backend. Implement Hono API endpoints on a Cloudflare Worker to fetch video metadata from a persistent store like Durable Objects or D1.

-   **Phase 3: Video Upload & Management**
    -   Implement functionality for administrators to upload new videos using direct creator uploads to Cloudflare Stream and handle webhooks to update video metadata.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.