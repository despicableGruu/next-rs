#  CyberNexus

## Core Components

- **Foundation:** Next.js
- **Style Weaver:** Tailwind CSS
- **Content Engine:** MDX

## Data & Interactions

- **Data Vault:** Supabase
- **Motion Choreographer:** Framer Motion
- **Deployment Hub:** Vercel
- **Visual Lexicon:** React Icons

## Auxiliary Tools

- **Content Processor:** rehype
- **Visitor Tracker:** Google Analytics
- **Data Fetcher:** SWR
- **Mailman:** Email.js
- **Toast Notifier:** React Toastify


## Local Launchpad

1.  **Gather Supplies:**
    ```bash
    yarn 
    # or
    npm install
    ```
2.  **Ignite the Engine:**
    ```bash
    yarn dev
    # or
    npm run dev
    ```
3.  **Access Point:** `localhost:3000`

>  **Yarn Recommendation:** We suggest `yarn`, but feel free to use `pnpm` or `npm`.

>  **Environmental Setup:** Ensure `.env.local` is configured with the correct values.


## Environment Configuration

Rename `.env.example` to `.env.local` and populate it with the necessary values.

-  **Mail Service ID:**  
    -  `NEXT_PUBLIC_YOUR_SERVICE_ID`
    -  Find it on [emailjs.com](https://emailjs.com) via its admin panel. 
-  **Mail Template ID:** 
    -  `NEXT_PUBLIC_YOUR_TEMPLATE_ID`
    -  Retrieve it from [Email Templates](https://dashboard.emailjs.com/admin/templates) after creating a new template.
-  **Mail User ID:** 
    -  `NEXT_PUBLIC_YOUR_USER_ID`
    -  Located on the [Account](https://dashboard.emailjs.com/admin/account) page.
-  **Blog Feed:**
    -  `NEXT_PUBLIC_BLOGS_API`
    -  Fetch from [Dev.to](https://developers.forem.com/api) through the Extensions settings.
-  **Google Analytics ID:** 
    -  `NEXT_PUBLIC_GA_MEASUREMENT_ID`
    -  Instructions provided at [Google Support](https://support.google.com/analytics/answer/9539598?hl=en).
-  **Spotify Credentials:**
    -  `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` 
    -  Follow instructions in [this blog](https://j471n.in/blogs/spotify-api-nextjs).
-  **Google Analytics Data API:**
    -  `GA_PROPERTY_ID`, `GA_CLIENT_EMAIL`, `GA_PRIVATE_KEY`
    -  Consult [this blog](https://j471n.in/blogs/google-analytics-data-api) for details.
-  **Supabase Keys:**
    -  `SUPABASE_URL`, `SUPABASE_KEY`
    -  Obtain from the [Supabase dashboard](https://app.supabase.com/sign-in).
    -  Configure database access policies in [Policies](https://app.supabase.com/project/_/auth/policies) for proper access.
-  **Supabase Revalidate Secret:**
    -  `REVALIDATE_SECRET`
    -  Set up webhooks in [Supabase webhooks](https://app.supabase.com/project/_/database/hooks) and configure the secret for revalidation.
-  **GitHub Token:**
    -  `GITHUB_TOKEN`
    -  Create a Personal Access Token in your [GitHub Developer Settings](https://github.com/settings/tokens).
-  **Email Validator Key:** 
    -  `EMAIL_VALIDATION_API`
    -  Obtain from [RapidAPI](https://rapidapi.com/) by subscribing to the `E-mail Check Invalid or Disposable Domain` service.
-  **Sanity Project ID:**
    -  `SANITY_PROJECT_ID`
    -  Extract from the URL in your [Sanity.io](https://www.sanity.io/) dashboard.
-  **TMDB Keys:**
    -  `TMDB_ACCOUNT_ID`, `TMDB_ACCESS_TOKEN`
    -  Generate API keys and access tokens through [TMDB's API section](https://developers.themoviedb.org/3/getting-started/introduction). 