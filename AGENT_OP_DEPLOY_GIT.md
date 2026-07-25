# Deployment and Git operation

Use this route for repository history, GitHub Pages, GitHub Actions, and publication status.

## Covers

- Status, diff, staging, commits, branches, pushes, pull requests, and rollback planning.
- `.github/workflows/`, `.nojekyll`, Pages configuration, and stale online assets.
- Comparing local, repository, workflow, and published state.

## Default read set

Read the low-token state entry, this file, Git status/stat/relevant diff, and only the deployment files involved. Do not default-read deeper state or site files unrelated to deployment freshness.

## Deep read gate

Request confirmation naming the exact file and reason only for an older deployment incident, rollback, regression, workflow rationale, or unresolved state conflict.

## Common targets

- `.github/workflows/`.
- `.nojekyll`, `.gitignore`, and public static files whose references affect freshness.

The source PSD stays excluded from deployment. Do not stage, commit, push, open a pull request, change Pages settings, or deploy unless the user requests that action.

## Verification

- Inspect `git status --short`, `git diff --stat`, and the relevant diff; inspect workflow syntax/content when it changes.
- Check cache-version references when public assets or data changed.
- Never report commit, push, workflow, Pages, or live-site success without direct evidence from the corresponding local or remote check.

## State logging

Add one concise changelog entry for durable workflow, commit, publication, or rollback changes. Update handoff when deployment status or a follow-up must survive the session.
