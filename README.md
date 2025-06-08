# next-react-supabase-starter-with-auth

Use this repo to start a new Next.js, React, Tailwind project with a Supabase backend and basic design system.

## Set-up

### 1. Fork this repo

Clone this repo

```
git clone git@github.com:cooljasonmelton/next-react-supabase-starter-with-auth.git
```

Create a [new repo on GitHub](https://github.com/new)
Change the remote URL to your new repo

```
git remote remove origin
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-NEW-REPO>.git
git push -u origin main
```

Create an `.env` file based on the `.env.example`

### 2. Supabase Backend (basic)

#### Create a new Supabase project

- visit https://supabase.com -> signup/login -> click "New Project"
- Fill out organization, name, database password
- Wait for it to process (~2 minutes)

#### Configure Authentication

- From the Supabase dashboard, go to Authentication in the sidebar, click on URL Configuration tab
- Under "Site URL" - add your local dev URL (probably http://localhost:3000)

#### Save your project credentials

- Go to Settings, click API Keys
- Copy "Project URL" and "anon public" key to corresponding variables in `.env`

### 3. Install and Run project

Make sure you've added your Supabase secrets to the `.env`

```
npm install && npm run dev
```

In the future, you can just run `npm run dev` for development.

### BUILD YOUR APP

You can add any needed models to Supabase backend and build pages and components in this forked Next.js app.

---

TODO:

- add to readme more explanation of cool features of this e.g. protected vs public routes and auth based redirects
- create gif(s) to show off this app and add to readme
- go thru files and cleanup
- write blog about
