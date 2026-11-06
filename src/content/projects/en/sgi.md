---
order: 3
code: S—03
title: SGI — Inventory management system
summary: '[ THE PROBLEM IT SOLVED — TELL ME ]. It is currently migrating from Angular 21 to 22: keeping a live system running through a major version change is part of the job.'
status: building
statusNote: Migrating to Angular 22
period: '[ YEAR ] — present'
role: Lead developer
users: '[ WHO USES IT ]'
context: A production system, mid major-version migration.
problem:
  - '[ THE BUSINESS PROBLEM THIS SYSTEM SOLVED. What was done before, with what tool, and why it stopped being enough. ]'
built:
  - An inventory management system built on Angular with a NestJS backend.
  - '[ WHAT IT ACTUALLY DOES: what gets recorded, who captures it, what reports come out. ]'
decisions:
  - title: NestJS on the backend
    body: '[ WHY NEST AND NOT SOMETHING ELSE. Imposed structure, dependency injection, something about the team. ]'
  - title: Migrate in production, do not rewrite
    body: The system is in use. A rewrite would have meant freezing features for months; the major version migration happens piece by piece, with the system running.
broke:
  - '[ WHAT BROKE MIGRATING FROM ANGULAR 21 TO 22. Even a dependency left behind or an API change that cost you a day. ]'
learned:
  - '[ WHAT YOU LEARNED. ]'
stack: [Angular, TypeScript, NestJS, PostgreSQL]
stackSummary: [Angular 21 → 22, NestJS, TypeScript]
---
