# Next_RSC — User Management System

A modern **User Management System** built with **Next.js 16 App Router**, **React Server Components (RSC)**, and **Prisma ORM**. This project follows the "Sweetmoria Pattern" — all sensitive data is fetched and processed **entirely on the server**, ensuring nothing leaks to the browser's DevTools.

---

## ✨ Features

- 🔒 **Server-first architecture** — data fetching via React Server Components, no `/api` routes for sensitive operations
- ⚡ **Next.js Server Actions** — form submissions handled securely on the server
- 🗃️ **Prisma ORM** with **PostgreSQL** — full CRUD operations
- 🧩 **TypeScript** — fully typed codebase with strict mode
- 🔄 **Automatic cache revalidation** — UI stays in sync after mutations

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | App Router + React Server Components |
| [Prisma ORM](https://www.prisma.io) | Database access & migrations |
| [PostgreSQL](https://www.postgresql.org) | Relational database |
| [TypeScript](https://www.typescriptlang.org) | Type safety |

---

## 📁 Project Structure

```
Next_RSC/
├── app/
│   ├── actions/
│   │   └── user.ts          # Server Actions (CRUD)
│   ├── users/
│   │   ├── page.tsx         # Users list page (RSC)
│   │   ├── new/page.tsx     # Create user page
│   │   └── [id]/page.tsx    # User detail/edit page
│   ├── page.tsx             # Home page
│   └── layout.tsx
├── components/
│   ├── UserCard.tsx         # User display component
│   └── UserForm.tsx         # Reusable user form
├── lib/
│   └── prisma.ts            # Prisma client singleton
├── prisma/
│   └── schema.prisma        # Database schema
└── .env                     # Environment variables (not committed)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:JazzsCo/Next_RSC.git
cd Next_RSC
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME"
```

### 4. Run Prisma migrations

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗃️ Database Schema

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  bio       String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npx prisma studio` | Open Prisma database GUI |
| `npx prisma migrate dev` | Run database migrations |

---

## 🔐 Security Notes

- All data mutations go through **Next.js Server Actions** — never exposed to the client
- Database credentials are stored in `.env` (excluded from Git)
- No sensitive data is returned in client-visible responses

---

## 📄 License

MIT
