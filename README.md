# Next.js React Supabase Starter With Auth

Use this repo to start a new Next.js, React, Tailwind project with a Supabase backend and basic design system.

__Features__
- Boilerplate web app with authentication -- home, signup/login, and dashboard routes
- Protected routes on serverside -- user can only access `/dashboard` while logged in; only access `/`, `/signup`, and `/login` while logged out (video below)
  - [Define protected/unprotected routes](https://github.com/cooljasonmelton/next-react-supabase-starter-with-auth/blob/a260c2bbc91528bdb4bd1e61ad8dedd5de0384d3/middleware.ts#L37)
- Some basic [components](https://github.com/cooljasonmelton/next-react-supabase-starter-with-auth/blob/main/components): Navbar, AuthForm, LogoutButton
- Basic design system -- [color/spacing primitives](https://github.com/cooljasonmelton/next-react-supabase-starter-with-auth/blob/main/app/variables.css), [component classes](https://github.com/cooljasonmelton/next-react-supabase-starter-with-auth/blob/main/app/components.css)

https://github.com/user-attachments/assets/75a9f5df-8e1b-4052-b54c-2df09959ad28

__Built With__
- TypeScript
- Next.js
- React
- Tailwind
- Supabase

## Set-up

### 1. Fork this repo

Clone repo
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

🌈IMAGINATION IS THE LIMIT🚀  
---
