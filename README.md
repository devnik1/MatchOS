MatchOS — Static pre-match briefings

This repo contains a static preview site (HTML/CSS/JS) for MatchOS — a compact pre-match briefing experience.

Publish to GitHub + Cloudflare Pages

1) Initialize git and push to a new GitHub repo (uses `gh` CLI if available):

```bash
# create local repo, commit
git init
git add .
git commit -m "Initial MatchOS site"

# create remote (option A: gh CLI)
gh repo create <YOUR_GITHUB_USERNAME>/matchos --public --source=. --remote=origin --push

# OR option B: create repo on github.com manually then push
# git remote add origin git@github.com:<YOUR_GITHUB_USERNAME>/matchos.git
# git push -u origin main
```

2) Deploy to Cloudflare Pages (connect your GitHub repo):

- Go to the Cloudflare dashboard > Pages > Create a project
- Connect your GitHub account and select the `matchos` repository
- Build settings: Framework preset: None (Static). Build command: (leave blank). Build output directory: `/` or `.`
- Save and deploy — Cloudflare Pages will publish the site.

Alternative: use Wrangler (Cloudflare CLI) for direct upload:

```bash
# install wrangler if needed
npm install -g @cloudflare/wrangler
# then run (see Wrangler docs for Pages deploy)
wrangler pages publish . --project-name=matchos --branch=main
```

If you want I can:
- Create a ready `.gitignore` and `LICENSE`.
- Generate a `package.json` and small deploy script.
- Attempt to create the GitHub repo for you if you provide access or run the commands locally and paste results here.
