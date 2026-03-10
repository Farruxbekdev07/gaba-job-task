# Users Catalog

A simple React application that displays a catalog of users using a public API.

The project implements user listing, search, and pagination using React and TypeScript.

## 🚀 Features

- Display list of users with basic information
  - Avatar
  - Name
  - Email
  - Phone
  - Company
  - Location

- Search users by name
- Pagination
- Responsive layout
- Loading skeleton
- Error handling
- Debounced search input

## 🛠 Tech Stack

- React
- TypeScript
- Material UI
- Fetch API

## 📦 API

This project uses the public API from:

https://dummyjson.com/docs/users

Main endpoints used:

- `GET /users?limit=10&skip=0` – fetch users with pagination
- `GET /users/search?q=Emily` – search users

The API response contains:

- `users`
- `total`
- `skip`
- `limit`

These values are used to implement pagination logic.

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/Farruxbekdev07/gaba-job-task.git
```

Go to the project folder:

```
cd users-catalog
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Then open:

```
http://localhost:5173
```

## 📂 Project Structure

```
src
 ├── api
 │    └── users.ts
 ├── components
 │    ├── UserCard.tsx
 │    └── SearchInput.tsx
 ├── hooks
 │    ├── useUsers.ts
 │    └── useDebounce.ts
 ├── pages
 │    └── Users.tsx
 ├── types
 │    └── user.ts
```

## ✨ Notes

The design is intentionally simple but clean and responsive.
The main goal of this project is to demonstrate working with:

- API integration
- React hooks
- TypeScript typing
- Pagination and search logic
