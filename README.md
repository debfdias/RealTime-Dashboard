# DebBaskHealth

A simple real time dashboard, with layout changer and time switcher.

## :rocket: Technologies

This project was made using the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Prisma](https://prisma.io/)

## :computer: How to run

```bash
# Clone repository
$ git clone https://github.com/debfdias/baskhealth

# Access folder
$ cd baskhealth
```

```bash
# Install dependencies
$ yarn install
```


- Create an .env.local file in project's root.
- Create a supabase db and copy the DATABASE_URL and ANON_KEY
- Generate a NEXT_AUTH_SECRET >> https://generate-secret.vercel.app/32


```bash
# Fill the .env.local file

DATABASE_URL='psql_url'
NEXT_PUBLIC_SUPABASE_URL='supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY='xxx'
NEXTAUTH_SECRET='xxx'

```

```bash
# Generate DB
$ yarn prisma generate

# Run DB migrations
$ yarn prisma migrate dev

# Run aplication
$ yarn dev

# Run Prisma Studio
$ npx prisma studio

```

