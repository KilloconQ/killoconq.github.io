---
order: 1
code: S—01
title: Internal productivity system — Intratta
summary: The warehouse knew what it had. Nobody knew where it was. At Intratta I built a system that ties together quoting, project planning, real-time inventory and internal logistics, and cut failures in manufacturing project staging by 60%.
status: live
period: 'Oct 2025 — present'
role: Lead developer
users: Plant floor, warehouse, admin
context: 'A real physical operation: people, machines, racks.'
problem:
  - The warehouse knew what it had. Nobody knew where it was. Inventory lived in spreadsheets, production on paper, and orders in three people's heads. Every "has this been made yet?" meant a walk across the plant.
  - The cost was not the paper. It was that nobody could answer a question without interrupting someone else.
built:
  - 'At Intratta I built an internal productivity system covering: quoting, area tracking, project planning, CRM, kardex, real-time inventory, labelling and internal logistics.'
  - It made staging manufacturing projects and loading them correctly much easier, which cut failures by 60%. Separate roles for plant, warehouse and admin; each person sees the screen they need and nothing else.
decisions:
  - title: Postgres, not documents
    body: Inventory is relational by nature. I was hand-rolling joins on a document store; I stopped fighting the tool.
  - title: Useful without the internet
    body: Connectivity on the plant floor is poor and outside my control. The interface keeps working when the link drops and reconciles afterwards.
  - title: Roles from day one
    body: An operator should not be able to delete an order. Permissions are not bolted on later — they change the data model.
broke:
  - '[ TELL A REAL FAILURE HERE: what went down, what stopped on the plant floor, how you fixed it, and what you changed so it would not happen again. ]'
learned:
  - The system competes against paper, and paper never goes down. If a screen takes longer than writing the number by hand, the operator writes it by hand — and the inventory stops being true.
stack: [TypeScript, Node.js, PostgreSQL, Prisma, Docker, Linux]
stackSummary: [TypeScript · Node, Postgres · Prisma, Docker · Linux]
---
