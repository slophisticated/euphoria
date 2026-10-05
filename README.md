# Euphoria Runtime Detector

A small React page that shows how long Euphoria has been running since July 28, 2025 at 21:11 GMT+7. The counter updates every second and the **Copy Runtime** button copies its current value.

## Run locally

Requires Node.js and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`.

## How the counter works

The start time is defined in `src/App.jsx` as an ISO timestamp with a `+07:00` offset. The page calculates elapsed time from that timestamp using the visitor's current clock. The displayed value is therefore only as accurate as that clock.
