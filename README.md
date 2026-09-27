# GiftLink Backend

## Structure
```
/                       <- repo root (this folder's contents go here)
├── app.js              <- main server, mounts all routes, listens on PORT
├── db.js               <- MongoDB connection (Task 4)
├── logger.js            <- shared logger
├── package.json
├── .env.example         <- copy to .env and fill in real values
├── routes/
│   ├── giftRoutes.js    <- /api/gifts, /api/gifts/:id (Task 5)
│   ├── searchRoutes.js  <- /api/search, filters by category (Task 6)
│   └── authRoutes.js    <- /api/auth/register, /login, /update (Task 11)
├── sentiment/
│   ├── index.js         <- sentiment microservice using `natural` (Task 8)
│   └── package.json
└── util/import-mongo/
    └── gifts.json       <- 16 seed items for MongoDB import (Task 3)
```

## Prerequisites
- Node.js installed
- MongoDB running somewhere reachable (local install, Docker container, or a free MongoDB Atlas cluster)
- `mongoimport` available on your PATH (comes with MongoDB Database Tools)

## Setup

1. **Copy these files into the root of your repo** (`fullstack-capstone-project/`), alongside your existing `frontend/` folder. Merge, don't overwrite, if you already have some of these files.

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env`:
   - `MONGO_URL` — your MongoDB connection string
   - `JWT_SECRET` — any long random string
   - `PORT` — defaults to 3060, change if needed

4. **Import the seed data into MongoDB (Task 3):**
   ```bash
   mongoimport --uri "$MONGO_URL/giftdb" --collection gifts --file util/import-mongo/gifts.json --jsonArray
   ```
   You should see output ending in:
   ```
   16 document(s) imported successfully. 0 document(s) failed to import.
   ```
   Save that terminal output as `inserted_items` for Task 3.

5. **Start the backend:**
   ```bash
   npm start
   ```
   You should see:
   ```
   Server is running on port 3060
   ```

6. **Test it's working (Task 13 — mainpage):**
   In a separate terminal:
   ```bash
   curl -X GET http://localhost:3060/api/gifts
   ```
   This should return your 16 imported items as JSON.

7. **(Optional) Start the sentiment microservice:**
   ```bash
   cd sentiment
   npm install
   npm start
   ```
   Runs separately on port 3050.

## Connecting the frontend
In your `frontend/src/config.js` (or a `.env` in `frontend/`), make sure `REACT_APP_BACKEND_URL` points to `http://localhost:3060` (or wherever this backend ends up deployed).

## Push to GitHub
```bash
git add app.js db.js logger.js package.json .env.example .gitignore routes/ sentiment/ util/
git commit -m "Add backend: routes, db connection, sentiment service, seed data"
git push
```

**Important:** never commit your real `.env` file — it's already in `.gitignore`.
