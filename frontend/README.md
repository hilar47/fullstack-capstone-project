# GiftLink Frontend

## What's in this scaffold
- `src/App.js` — routes: `/` and `/app` (landing page), `/app/register`, `/app/login`
- `src/components/MainPage/MainPage.js` — landing page with title, tagline, and Get Started button (Task 12 requirement)
- `src/components/RegisterPage/RegisterPage.js` — register form, fetch with `method` + `Content-Type` header (Task 9)
- `src/components/LoginPage/LoginPage.js` — login form, fetch with `Content-Type` + `Authorization` headers (Task 10)
- `src/config.js` — backend URL config, reads `REACT_APP_BACKEND_URL` env var, falls back to `http://localhost:3060`

## Setup

1. Copy this `frontend/` folder into the root of your `fullstack-capstone-project` repo
   (so you end up with `fullstack-capstone-project/frontend/...`)

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Point the frontend at your backend. Either:
   - Edit `src/config.js` directly, or
   - Create a `.env` file in `frontend/` with:
     ```
     REACT_APP_BACKEND_URL=http://localhost:3060
     ```

4. Make sure your backend (the `app.js` we built) is running on that URL first.

5. Start the frontend:
   ```bash
   npm start
   ```
   This opens `http://localhost:3000` — you should see the GiftLink landing page.

## Push to GitHub

```bash
git add frontend/
git commit -m "Add React frontend scaffold"
git push
```

## Notes
- `node_modules/` should NOT be committed — add a `.gitignore` with `node_modules` in it if you don't have one.
- For deployment (Task 12), the `REACT_APP_BACKEND_URL` env var should point to your deployed backend's public URL, not localhost.
