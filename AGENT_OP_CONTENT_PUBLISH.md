# Content publishing operation

Use this route for adding or revising public entries, media, metadata, gripes, and friend links.

## Covers

- “扑克碎碎念” notes and short updates.
- Photo entries in “扑克の生活” and “猫猫床上”.
- “猫猫酒桌”, “猫猫吐槽”, and friend-link entries.
- Owner-provided text/media and related metadata in `assets/content.js`.

## Default read set

Read the low-token state entry, this file, `SITE_BRIEF.md`, `assets/content.js`, the target page/detail file, and only the involved media paths. Do not default-read deeper state.

## Deep read gate

Request confirmation naming the exact file and reason only when an older publishing rule, rollback, regression, or unresolved state conflict must be inspected. Archived history is not relevant to normal publishing.

## Common targets

- `assets/content.js`, `assets/site.js` when rendering must change.
- `thoughts.html`, `life.html`, `drinks.html`, `bedroom.html`, `gripes.html`, `friends.html`.
- Owner-supplied media under `assets/` and any standalone detail page.

Never fabricate text, images, relationships, events, attribution, or consent. Public intimate content must be owner-approved, adult, consensual, and unambiguous about age; preserve honest empty states otherwise.

## Verification

- Run `node --check assets/content.js` when it changes and `node --check assets/site.js` when rendering changes.
- Verify unique IDs, required fields, local URLs, media paths, source/credit fields, and relevant cache-version references.
- Use a focused browser check when added media, navigation, an adult warning, or responsive layout could render differently.

## State logging

At the end of the complete operation, add one concise changelog entry if durable public content changed. Update handoff only for a future-relevant publishing follow-up; do not put individual posts in the brief.
