# Pokersleep project instructions

This repository is the public static GitHub Pages site for “扑克睡不醒的猫窝”. Use this file as the primary Codex instruction entry.

## Product boundary

- Use semantic HTML, shared CSS, and vanilla JavaScript. Do not add a framework, package manager, backend, database, CMS, login, analytics, or runtime dependency without explicit approval.
- Publish as a GitHub Pages project site at `https://phillin-lrz.github.io/Pokersleep/`; keep public page and asset links relative.
- Treat `SITE_BRIEF.md` as the source of truth for identity, persona, narrative voice, information architecture, visual direction, and content boundaries.
- Do not invent diary entries, photographs, friendships, drinking records, intimate experiences, or source attribution. Use honest empty states until the owner supplies content.
- Any intimate material must involve consenting adults approved for public use. The public site provides no access control.

## State-file responsibilities

- `AGENTS.md`: primary reading order, safety, verification, and completion rules.
- `SITE_BRIEF.md`: durable product, persona, brand, and content-boundary truth.
- `AGENT_BRIEF.md`: compact technical snapshot and long-term risks.
- `AGENT_HANDOFF.md`: current phase, latest verified state, and next safe step.
- `AGENT_TODO.md`: live actionable work only; remove obsolete items.
- `AGENT_CHANGELOG.md`: concise durable changes and rollback-relevant notes, not a work diary.
- `AGENT_OP_*.md`: task-specific reading and verification routes.

## Layered startup procedure

Before non-trivial work or edits:

1. Read `AGENTS.md`, `AGENT_BRIEF.md`, `AGENT_HANDOFF.md`, and `AGENT_TODO.md`.
2. Inspect `git status --short`, `git diff --stat`, and the current relevant diff. Untracked files require direct inspection because ordinary `git diff` does not show them.
3. Select and read only the matching operation file(s):
   - `AGENT_OP_CONTENT_PUBLISH.md`
   - `AGENT_OP_PAGE_VISUAL.md`
   - `AGENT_OP_FRONTEND_LOGIC.md`
   - `AGENT_OP_DEPLOY_GIT.md`
   - `AGENT_OP_PROJECT_STATE.md`
   - `AGENT_OP_RECOVERY_AUDIT.md`
4. Read `SITE_BRIEF.md` when the task affects identity, persona, voice, navigation, visual direction, brand, public content, or privacy/adult boundaries.
5. Read only the task-specific source files required by the selected route.
6. Run verification proportionate to the files and risk involved.

Operation files route work; they do not grant broad permission to inspect deeper history.

## Deep-state read gate

Do not default-read `AGENT_CHANGELOG.md`. Read it only for a requested rollback, regression, audit, or recent-history question, after telling the user the exact file and reason and receiving confirmation. An explicit user request to inspect it counts as confirmation for that file.

If `AGENT_CONTEXT.md` or `AGENT_CHANGELOG_ARCHIVE.md` is created later, apply the same gate. Use the former only for architecture or unresolved durable rules and the latter only for older rollback/audit history.

## Context recovery

If conversation context appears compacted, truncated, contradictory, or uncertain, stop new edits and recover from:

1. `AGENTS.md`, `AGENT_BRIEF.md`, `AGENT_HANDOFF.md`, and `AGENT_TODO.md`;
2. `git status --short`, `git diff --stat`, and the relevant diff;
3. the matching `AGENT_OP_*.md` file;
4. the smallest set of current source files needed to resolve uncertainty.

Request confirmation before any gated deeper-state read. After recovery, distinguish confirmed facts, uncertain facts, assumptions, risks, and the next safe action. Do not treat a chat summary as the sole source of truth.

## Implementation and safety rules

- Keep metadata in `assets/content.js`; keep substantial prose in standalone HTML pages.
- Keep core navigation and primary page content available without JavaScript. Treat JavaScript as progressive enhancement.
- Escape data before writing it into the DOM.
- Respect `prefers-reduced-motion`, keyboard focus, touch input, and small screens.
- Preserve stable lowercase English slugs and relative links. Search all references before deleting or renaming a published file.
- After a public asset or data-file change, search for stale cache-version query strings.
- Do not modify unrelated files, broaden scope, add dependencies, delete assets, rewrite large sections, or start a new phase without authorization.
- Do not continue layering changes over unexplained verification failures.
- Do not stage, commit, push, deploy, or use destructive Git commands unless the user requests the corresponding action.
- Do not claim a check, publication, or remote state that was not actually inspected.

## Proportional verification

- Content/data changes: syntax-check changed JavaScript; verify IDs, links, media paths, sources, and cache versions.
- Page/visual changes: inspect relevant HTML/CSS; use browser checks for global navigation, brand assets, galleries, adult warnings, responsive layout, high-risk visual changes, or when the user asks.
- Frontend logic: syntax-check changed JavaScript and search every affected render target and data-field name. Do not use a Node REPL as a routine substitute for `node --check`.
- Deployment/Git: inspect status, stat, relevant diff, workflow, and remote evidence as applicable.
- Governance-only changes: run document/reference checks plus Git diff checks; JavaScript and browser checks are unnecessary unless site files changed.
- Recovery/audit: prefer read-only inspection; destructive Git requires an explicit request.

Always run `git diff --check`, inspect the relevant final diff, and finish with `git status --short` when files change.

## State logging and completion

- Add at most one concise `AGENT_CHANGELOG.md` entry at the end of a completed operation, and only when durable project state changed.
- Update `AGENT_HANDOFF.md` only with facts needed by the next session, `AGENT_BRIEF.md` only with durable workflow facts, and `AGENT_TODO.md` only with current actionable work.
- Do not automatically begin the next phase after completing the requested one.
- Keep progress commentary concise but sufficient for the user to follow tool work.
- Final reports must state which instruction/state files were used or updated, what changed, which checks actually ran, remaining risks or gaps, and a practical rollback path.
