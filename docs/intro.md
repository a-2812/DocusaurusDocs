---
sidebar_position: 1
slug: /
---

# Welance Documentaion
Let's discover **The Components of this Website Builder**.

## Getting Started

Get started by **creating a new site**.

So lets take take a look on a sample site using prebuilt  **Components** **[here](https://p007-16.dev.welance.com/)**.

### What you'll need

- [Welance Buttler OS](https://p007-19.dev.welance.com/admin/login) Open Source Software:
  - comments
## Generate a new site

Generate a new custom site using the given **components*.

The website will automatically update your changes in builder on the builder after you run this command in shell:

```bash
Invoke-WebRequest -Uri "https://p007-19.dev.welance.com/utils/cache/clear?access_token=_bxhfFhm-ZDKQpdsIKxjR1jhQfw6EvpZ" -Method POST
```

:::tip[My tip]

Use this only when site is not loading the changes

:::



You can type this command only in Powershell.

For linux users, use this instead :

```bash
curl --location --request POST 'https://p007-19.dev.welance.com/utils/cache/clear?access_token=SaS461YgyEw5Ez7xju8Txyn8HMAfih0-'
```
**Reload** the site to show changes.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
