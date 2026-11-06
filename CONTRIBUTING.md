# Contributing to SFU CS Course Planner

Thanks for contributing! This guide covers how we pick up work, branch, commit, and review.
For installing and running the project, see [docs/setup.md](docs/setup.md).

## Picking up an issue

1. Open the [Issues](https://github.com/sfuosdev/sfu-cs-course-planner/issues) page or the project board.
2. Look for an issue assigned to you, or comment "I'd like to take this issue" and the lead will assign it.
3. Read the description, acceptance criteria and dependencies before you start.
4. If you finish early, ask the lead before taking a high-priority issue or one that depends on other work.
5. If you're stuck for more than one work session, post the error and what you tried in the team chat.

## Branches

Always start from an up-to-date `main`, with one branch per issue:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git checkout -b feature/issue-12-short-description
```

- Format: `type/issue-<number>-short-description`, lowercase with hyphens, no spaces
- Types: `feature/` for new work, `fix/` for bug fixes, `docs/` for documentation only
- Never push directly to `main`

## Commits

Start each commit message with a type, and reference the issue:

| Type     | Use for                     |
| -------- | --------------------------- |
| `feat:`  | A new feature               |
| `fix:`   | A bug fix                   |
| `docs:`  | Documentation only          |
| `test:`  | Adding or updating tests    |
| `chore:` | Setup, config, dependencies |

Example: `feat: add course search endpoint (#14)`

## Pull requests

1. Push your branch to your fork: `git push -u origin feature/issue-12-short-description`
2. Open a PR from your fork into `sfuosdev:main`.
3. Fill in the PR template, including `Closes #<issue number>` so the issue closes when the PR merges.
4. Keep PRs focused on one issue.
5. Update docs in the same PR when your change affects them (for example, `docs/setup.md`).

A PR can be merged when:

- CI passes
- At least one person other than the author has approved it
- Review comments are resolved

## Code review

Reviewers check more than whether the feature looks done:

- The code does what the issue's acceptance criteria ask
- Input validation and error handling
- No secrets or `.env` files committed
- Tests for new logic
- Database migrations included when tables change
- Docs updated where needed

Be kind and specific in reviews. Everyone here is learning.
