# Project-state operation

Use this route for project instructions, state organization, reading policy, and durable task memory.

## Covers

- `AGENTS.md`, `SITE_BRIEF.md`, `AGENT_BRIEF.md`, `AGENT_HANDOFF.md`, `AGENT_TODO.md`, `AGENT_CHANGELOG.md`, and `AGENT_OP_*.md`.
- Reading routes, context recovery, logging rules, verification policy, and state-file responsibility.

## Default read set

Read the low-token state entry, this file, and only the project-state files being edited. Read `SITE_BRIEF.md` when product truth or content boundaries are in scope. Do not default-read the changelog or any future deeper state.

## Deep read gate

Request confirmation naming the exact file and reason when recent history, an older rule, rollback, regression, or unresolved conflict cannot be handled from current state files. An explicit user request to inspect that file is sufficient confirmation.

## Common targets

- `AGENTS.md`, `SITE_BRIEF.md`.
- `AGENT_BRIEF.md`, `AGENT_HANDOFF.md`, `AGENT_TODO.md`, `AGENT_CHANGELOG.md`.
- `AGENT_OP_*.md`.

Keep responsibilities separate: product truth belongs in the site brief, durable technical facts in the agent brief, current phase in handoff, and only live actions in todo.

## Verification

- Search all operation filenames and cross-references; inspect headings and conflicting rules.
- Run `git diff --check`, `git diff --stat`, inspect the relevant diff, and finish with `git status --short`.
- Do not run JavaScript or browser checks when only governance documents changed.

## State logging

At the end of the whole operation, add one concise changelog entry if durable governance changed. Synchronize brief, handoff, and todo only where their own responsibilities require it.
