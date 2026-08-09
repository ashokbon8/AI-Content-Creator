<p align="center">
    <img  src="https://readme-typing-svg.herokuapp.com/?color=0d9488&size=40&width=900&height=80&lines=Welcome%20to%20AI%20Content%20Generator"/>
</p>
<p align="center">

<a href="https://github.com/omharde42/ai-content-generator"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a> <a href="https://github.com/omharde42/ai-content-generator/blob/master/LICENSE"><img src="https://img.shields.io/badge/MIT-Licence-teal.svg?v=103"></a>

![GitHub issues](https://img.shields.io/github/issues/omharde42/ai-content-generator)
![GitHub pull requests](https://img.shields.io/github/issues-pr/omharde42/ai-content-generator)
![GitHub forks](https://img.shields.io/github/forks/omharde42/ai-content-generator)
![GitHub Repo stars](https://img.shields.io/github/stars/omharde42/ai-content-generator?style=social)
![GitHub contributors](https://img.shields.io/github/contributors/omharde42/ai-content-generator)
<br/>
![Repo Size](https://img.shields.io/github/repo-size/omharde42/ai-content-generator)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github?af=5236ad)
<br/>
</p>

## Project Structure ✨

Check the project structure here [Project Structure](PROJECT_STRUCTURE.md)

## Table of Contents
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Installation Guide](#installation-guide)
5. [Contributing Guide](#contributing-guide)
6. [Project Admin](#project-admin)
7. [Code of Conduct](#code-of-conduct)
8. [Learn More](#learn-more)
9. [Deploy on Vercel](#deploy-on-vercel)
10. [License](#license)
11. [Support](#support)

## ✨🎈Introduction

AI Content Generator is a web-based application built using **Next.js** and **TypeScript**. It is designed to create AI-driven content generation tools with modern development frameworks. The project aims to provide efficient and scalable content workflows to improve productivity, and it is deployable via **Vercel** for quick and easy hosting.

## ⌨️Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Gemini / Google Generative AI**: Powered with modern AI templates for lightning fast, rich content generation.
- **Clerk**: Authentication and user management made simple.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A typed superset of JavaScript that adds static typing.

## 💻Features

- AI-driven content generation.
- Scalable and efficient automated content workflows.
- Server-side rendering and static site generation using Next.js.
- Integrated user management and authentication via Clerk.
- Stylish, responsive design using TailwindCSS with modern Electric Teal gradients.
- Easy deployment through Vercel.

  ## 🧑🏻‍💻Installation Guide

1. *Clone this repository to your local machine:*

   ```
   git clone https://github.com/omharde42/ai-content-generator.git
   cd ai-content-generator
   ```
2. *Install the required dependencies:*
   ```
   npm install
   ```

3. *Setup environment variables*
Create a `.env.local` file in the root directory and add the following values:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
   CLERK_SECRET_KEY="your-clerk-secret-key"
   DATABASE_URL="your-neondb-url"
   ```
4. *Run the application*
For development:
```
npm run dev
```
For production:
```
npm run build
npm start
```

## 📦 Settingup NeonDB and Clerk

1. Go to [Neon](https://neon.tech/) and sign up for a new account or log in.
2. In your Neon dashboard, click on **Create Database**.
3. Update your `.env.local` file to include the connection string (`DATABASE_URL`).

## Creating Clerk
1. Create an application in [Clerk](https://clerk.com/)
2. Choose next.js and retrieve your publishable and secret keys.
3. Paste these in `.env.local`.

## 🛠️ Contributing Guide

We welcome contributions to the **AI Content Generator** project! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new Pull Request


## 📑Code Of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 📚 Learn More

To deepen your understanding of Next.js, check out these valuable resources:

- **[Next.js Documentation](https://nextjs.org/docs)** - Explore Next.js features and API.
- **[Learn Next.js](https://nextjs.org/learn)** - Engage with an interactive tutorial to enhance your skills.

## 🌐 Deploy on Vercel

The simplest way to deploy your Next.js app is through the **Vercel Platform**, created by the team behind Next.js. For more deployment options, refer to our [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 📝License

AI Content Generator is licensed under the terms of the MIT License. Check out <a href="./LICENSE">LICENSE</a> for details.

<a name="support"></a>

## ⭐Support

- 💰 Become our Sponsor!
- ⭐ Star our Repo
