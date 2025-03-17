# Git Workflow and Best Practices

## 1. Overview
This document outlines the Git workflow and best practices for managing code efficiently across different environments.

## 2. Git Branching Strategy
### Main Branches
- **master** → Stable branch for production deployments.
- **qa** → Active development branch where new features, bug fixes, and test changes are merged.
- **pre-production** → Staging branch for final testing before deployment.
- **release** → Branch containing production-ready code.

### Branching Rules
#### Feature Branches
- **Naming:** `feature/{ISSUE-KEY}-{DESCRIPTION}`
- **Created From:** `qa`
- **Merged Into:** `qa`
- **Purpose:** For new feature development.

#### Bugfix Branches
- **Naming:** `bugfix/{ISSUE-KEY}-{DESCRIPTION}`
- **Created From:** `qa`
- **Merged Into:** `qa`
- **Purpose:** To fix bugs found in the `qa` environment.

#### Hotfix Branches
- **Naming:** `hotfix/{ISSUE-KEY}-{DESCRIPTION}`
- **Created From:** `master`
- **Merged Into:** `pre-production`
- **Purpose:** To fix critical production issues that require immediate attention.

#### CI Branches
- **Naming:** `ci/{ISSUE-KEY}-{DESCRIPTION}`
- **Created From:** `qa`
- **Merged Into:** `qa`
- **Purpose:** For CI/CD pipeline changes and automation.

#### Test Branches
- **Naming:** `test/{ISSUE-KEY}-{DESCRIPTION}`
- **Created From:** `qa`
- **Merged Into:** `qa`
- **Purpose:** For test cases.

## 3. Commit Message Guidelines
**Format:** `{ISSUE-KEY} #time {TIME-SPENT} [{BRANCH-PREFIX}]: {COMMIT-MESSAGE}`

### Examples
- **Feature:** `INDY-11 #time 2h 3m feature: proper commit message format`
- **Bugfix:** `INDY-11 #time 3m bugfix: proper commit message format`
- **CI:** `INDY-11 #time 1h 10m ci: proper commit message format`
- **Test:** `INDY-11 #time 1h test: proper commit message format`
- **Hotfix:** `INDY-11 #time 1h hotfix: proper commit message format`

## 4. Pull Request (PR) Guidelines
- Ensure your branch is up to date with `qa`.
- Add clear descriptions of changes.
- Take approval from reviewers.
- Uncheck all Post-completion options.
- Merge PRs to `qa`.

## 5. Jira Card Movement
### Prioritization & Readiness
1. A few selected cards will be moved to **Ready**.
2. In **Ready**, refinement happens.
3. If design work is needed, the design team will pull the card to **In Design**.
4. If no design is required, the analyst will move the card to **Queue**.

### Development Process
1. Developers pull cards to the **In Progress** column based on priority and assign them to themselves.
2. Once Developers have moved the changes to the **QA** branch, they will add a comment for the tester.
3. The tester pulls the card, assigns it to themselves, and tests.
4. After a successful **SBT**, testers run automation scripts.
5. Merge to **release** and comment for the analyst to validate.
6. If a bug is found, the tester comments, and developers create a new **bugfix** branch and fix the bug without pulling the card back.
7. The analyst validates and checks living documentation and test coverage, then moves the card to **Done**.
8. Analyst comments instructing the **DevOps Engineer** to merge into **pre-production**.
9. **DevOps** merges `release` to `pre-production`.
10. Once the pipeline is successful, **DevOps** comments for **Himal** and the tester validate in **pre-production**.
11. If validated, the card is pulled to **Deployed**.
12. Merged to `master` during scheduled downtime.
13. Once the pipeline passes, the feature is tested in production, and the release is marked **complete** in **Jira**.

### Hotfix Process
1. Developers pull cards to the **In Progress** column based on priority and assign them to themselves.
2. Once Developers have moved the changes to the **pre-production** branch, they will add a comment for the tester.
3. After a successful **SBT**, comment for the analyst to validate.
4. The analyst validates and moves the card to **Done**.
5. Analyst comments instructing the **DevOps Engineer** to merge into the `master` branch.
6. **DevOps** merges the hotfix branch to `master`.
7. Once the pipeline is successful, **DevOps** comments for **Himal**, and the tester validates in `master`.
8. If validated, the card is pulled to **Deployed**, and **DevOps** will merge the changes to **QA** branch.
9. The release is marked **complete** in **Jira** by the **Analyst**.
