# Getting Started

Follow these steps to set up the project locally on your machine.

**Requirements**

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (recommended version: v20)
- [npm](https://npm.io/) (recommended to install via Corepack)

**Setting up the Repository**

```bash
npx create-next-app -e https://github.com/ayazhankadessova/nextjs-shadcn-portfolio.git
cd nextjs-shadcn-portfolio
```

**Configuring the Project**

1. Change the configuration data:

- `@/app/config/site.ts`

2. Update the template with your data, you can run the app.

- `@/data/contact.ts`
- `@/data/experience.ts`
- `@/data/hobbies.ts`
- `@/data/projects.ts`
- `@/data/skills.ts`

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.