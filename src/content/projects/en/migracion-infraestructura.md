---
order: 2
code: S—02
title: Migration to self-hosted infrastructure
summary: An exposed credential forced a rethink of where the system lived. I migrated from a managed backend to self-hosted infrastructure without stopping the operation.
status: live
period: '[ YEAR ]'
role: Lead developer
users: The whole internal system
context: A live migration, with the plant still working.
problem:
  - 'A credential was exposed. That opened a bigger question than the incident itself: the entire system depended on a managed backend whose access, cost and limit decisions were not mine to make.'
  - '[ ADJUST TO WHAT YOU WANT TO SAY PUBLICLY ABOUT THE INCIDENT. ]'
built:
  - I moved the database, authentication and storage onto my own infrastructure on a VPS, with Docker, backups and secrets managed outside the codebase. The operation never stopped during the migration.
decisions:
  - title: Rotate first, migrate second
    body: Contain before redesigning. New credentials and a closed surface first; the infrastructure move came afterwards, with a cool head.
  - title: Secrets leave the repository
    body: Environment variables managed outside the code and outside version control. A credential in a commit lives forever in the history.
  - title: Piece by piece, not big bang
    body: Database, auth and files moved separately, each with a way back. A full cutover was not an option with the plant running.
broke:
  - '[ TELL WHAT WENT WRONG DURING THE MIGRATION: what you did not anticipate, what broke at cutover, how long it took to come back. ]'
learned:
  - '"I do not control this piece" is an architecture decision even when nobody made it on purpose. Delegating infrastructure is fine; not knowing what you delegated is not.'
stack: [Supabase, PostgreSQL, Docker, Linux, DNS, Backups]
stackSummary: [Supabase · Postgres, Linux · DNS, Secrets · Backups]
---
