# Page and visual operation

Use this route for page copy, markup, shared visual design, brand assets, layout, and responsive behavior.

## Covers

- Page copy, titles, navigation labels, and accessible descriptions.
- HTML structure, `assets/styles.css`, responsive layout, gallery presentation, and visual polish.
- Signature, icon, and other brand exports.

## Default read set

Read the low-token state entry, this file, `SITE_BRIEF.md`, the target HTML files, `assets/styles.css`, and `assets/site.js` only when JavaScript creates relevant markup. Inspect only the involved files under `assets/brand/`. Do not default-read deeper state.

## Deep read gate

Request confirmation naming the exact file and reason only for an older design decision, rollback, regression, or unresolved conflict not explained by current files.

## Common targets

- Root `*.html` pages.
- `assets/styles.css`.
- `assets/brand/` and references to its files.

Preserve the identity and narrative hierarchy in `SITE_BRIEF.md`; public social-profile cues remain secondary to owner-provided characterization.

## Verification

- Inspect affected HTML/CSS and search all references when a shared class, navigation item, or brand asset changes.
- Syntax-check JavaScript only if JavaScript changed.
- Use focused browser checks for global navigation, shared CSS, brand assets, galleries, adult warnings, responsive changes, or other high-risk visual work. Record residual visual risk when a browser check is not warranted or possible.

## State logging

Add one concise changelog entry only for durable or cross-page changes. Update handoff only when a visual follow-up remains; do not log tiny copy fixes unless they alter a durable rule.
