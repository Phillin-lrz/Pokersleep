# Frontend logic operation

Use this route for JavaScript rendering, content-data behavior, and progressive enhancement.

## Covers

- List, card, empty-state, gripe-rail, and detail rendering.
- Filters, navigation behavior, data compatibility, and JS-created markup.
- Problems involving `data-*` render targets or fields in `assets/content.js`.

## Default read set

Read the low-token state entry, this file, `assets/site.js`, `assets/content.js`, and only the relevant HTML containers. Read `SITE_BRIEF.md` if behavior changes public structure, wording, content boundaries, or privacy. Do not default-read deeper state.

## Deep read gate

Request confirmation naming the exact file and reason only when current code cannot explain an architectural decision, behavior regression, rollback target, or state conflict.

## Common targets

- `assets/site.js`.
- `assets/content.js`.
- Pages containing affected `data-*` render targets.

## Verification

- Run `node --check assets/site.js` and/or `node --check assets/content.js` for changed files.
- Search all affected render targets, CSS hooks, and data-field names.
- Exercise the affected behavior in a browser when syntax and static checks cannot prove the result.
- Do not use a Node REPL as a routine substitute for `node --check`.

## State logging

Add one concise changelog entry for durable behavior changes. Update handoff only with behavior constraints or unfinished follow-up that future work must preserve.
