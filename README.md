# Innovexa Studio

A premium agency website built with React, Vite, and Tailwind CSS.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm run dev`

## Contact Form Backend

The inquiry form sends to a Supabase Edge Function. That function emails the inquiry to `innovexa7@gmail.com` and does not store it in a database.

1. Set these frontend values:
   `VITE_SUPABASE_FUNCTION_URL`
2. Set these Supabase function secrets:
   `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`
3. Deploy the frontend and the Supabase function.

When it is live, each inquiry will be forwarded to your inbox only.
