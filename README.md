# Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` branch.

## Steps

1. Make sure the `base` option in `vite.config.ts` is set to your repo name (already set to `/buildWeb/`).
2. Run the following command to deploy:

```bash
npm run deploy
```

This will build the project and publish the `dist` folder to the `gh-pages` branch using the `gh-pages` package.

## Scripts
- `npm run predeploy`: Builds the project.
- `npm run deploy`: Builds and deploys to GitHub Pages.

## Notes
- Ensure your repository is public and the `gh-pages` branch is enabled in your GitHub Pages settings.
- The site will be available at `https://<username>.github.io/buildWeb/` after deployment. 