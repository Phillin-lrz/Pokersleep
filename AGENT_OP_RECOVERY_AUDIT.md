# Recovery and audit operation

Use this route for rollback analysis, regression tracing, history lookup, state reconstruction, and audits.

## Covers

- Explaining or reconstructing an older state.
- Comparing current behavior with prior records.
- Finding the cause and safe rollback path for a regression.
- Explicit requests to inspect deeper or archived project history.

## Default read set

Read the low-token state entry, this file, Git status/stat/relevant diff, and the current target files. Do not default-read deeper state.

## Deep read gate

After naming the exact file and reason, request confirmation to read:

- `AGENT_CHANGELOG.md` for recent durable changes or rollback notes.
- A future `AGENT_CONTEXT.md` for unresolved durable architecture or rules.
- A future `AGENT_CHANGELOG_ARCHIVE.md` for older history.

An explicit user request to inspect a named file counts as confirmation for that file only.

## Common targets

- Any file directly involved in the requested audit or rollback.
- Read-only Git history, status, and diff output.
- Deeper state only after the gate is satisfied.

## Verification

- Prefer read-only checks and compare current files, diff, and history evidence.
- Run syntax or browser checks only when the affected source files require them.
- Never use destructive Git commands unless the user explicitly requests the exact action.
- Separate confirmed facts, uncertainty, assumptions, risks, and the next safe action.

## State logging

Add one concise changelog entry only if files changed or a durable audit conclusion must persist. Do not create or update an archive during routine recovery.
