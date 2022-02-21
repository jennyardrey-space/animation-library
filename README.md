# README

This repository hosts the holding page for the Derenzy website.

### How do I get set up?

- Make sure you have a reasonably modern `node` and `npm` installed. We recommend the latest LTS version.
- Run `make setup` to pull in the dependencies.
- To start development, run `make start`. The development server will serve on `http://127.0.0.1:8080` by default.
- To produce a final production-ready build, run `make build`.

### Deploying changes

This site is hosted with [Vercel](https://vercel.com/space48/derenzy-holding-page).

Some notes:

- All commits to `master` will be deployed to production automatically.
- Any other branches - including feature branches - will get their own preview domains, which can be used to review and test your changes. You'll be able to see these in the comments Vercel will leave on your commits and pull requests.
