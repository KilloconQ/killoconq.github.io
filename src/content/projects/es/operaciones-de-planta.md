---
order: 1
code: S—01
title: Sistema interno de productividad — Intratta
summary: El almacén sabía qué tenía. Nadie sabía dónde estaba. En Intratta construí un sistema que une cotizaciones, planificación, inventario en tiempo real y logística interna, y redujo los fallos en el acopio de proyectos de manufactura en un 60%.
status: live
period: 'Oct 2025 — hoy'
role: Desarrollador principal
users: Planta, almacén, administración
context: 'Operación física real: gente, máquinas, racks.'
problem:
  - El almacén sabía qué tenía. Nadie sabía dónde estaba. El inventario vivía en hojas de cálculo, la producción en papel y las órdenes en la cabeza de tres personas. Cada consulta de "¿esto ya se fabricó?" era una caminata por la planta.
  - El costo no era el papel. Era que nadie podía responder una pregunta sin interrumpir a otro.
built:
  - 'En Intratta construí un sistema interno de productividad que cubre: cotizador, seguimiento de áreas, planificación de proyectos, CRM, kardex, inventario en tiempo real, etiquetado y logística interna.'
  - Facilitó el acopio de proyectos de manufactura y su correcta carga, y con eso los fallos bajaron un 60%. Roles distintos para planta, almacén y administración; cada quien ve la pantalla que necesita y nada más.
decisions:
  - title: Postgres, no documentos
    body: El inventario es relacional por naturaleza. Estaba simulando joins a mano en una base de documentos; dejé de pelearme con la herramienta.
  - title: Útil sin internet
    body: La conectividad en planta es mala y no la controlo. La interfaz sigue sirviendo cuando el enlace se cae y reconcilia después.
  - title: Roles desde el día uno
    body: 'Un operador no debería poder borrar una orden. Los permisos no se agregan después: cambian el modelo de datos.'
broke:
  - '[ CONTAR AQUÍ UN FALLO REAL: qué se cayó, qué paró en la planta, cómo lo resolviste y qué cambiaste para que no volviera a pasar. ]'
learned:
  - Que el sistema compite contra el papel, y el papel nunca se cae. Si una pantalla tarda más que anotar el dato a mano, el operador anota a mano — y el inventario deja de ser cierto.
stack: [TypeScript, Node.js, PostgreSQL, Prisma, Docker, Linux]
stackSummary: [TypeScript · Node, Postgres · Prisma, Docker · Linux]
---
