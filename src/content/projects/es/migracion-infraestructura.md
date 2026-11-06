---
order: 2
code: S—02
title: Migración a infraestructura propia
summary: Una credencial expuesta obligó a repensar dónde vivía el sistema. Migré de un backend gestionado a infraestructura self-hosted sin detener la operación.
status: live
period: '[ AÑO ]'
role: Desarrollador principal
users: Todo el sistema interno
context: Migración en caliente, con la planta trabajando.
problem:
  - 'Una credencial quedó expuesta. Eso abrió una pregunta más grande que el incidente: el sistema completo dependía de un backend gestionado cuyas decisiones de acceso, costos y límites no controlaba.'
  - '[ AJUSTAR SEGÚN LO QUE QUIERAS CONTAR PÚBLICAMENTE DEL INCIDENTE. ]'
built:
  - Migré la base de datos, la autenticación y el almacenamiento a infraestructura propia sobre VPS, con Docker, backups y gestión de secretos fuera del código. La operación no se detuvo durante la migración.
decisions:
  - title: Rotar primero, migrar después
    body: Contener antes que rediseñar. Primero credenciales nuevas y superficie cerrada; recién después el movimiento de infraestructura, con la cabeza fría.
  - title: Los secretos salen del repositorio
    body: Variables de entorno gestionadas fuera del código y fuera del control de versiones. Una credencial en un commit vive para siempre en el historial.
  - title: Migración por partes, no big bang
    body: Base de datos, auth y archivos se movieron por separado, cada uno con vuelta atrás. Un corte total no era una opción con la planta trabajando.
broke:
  - '[ CONTAR QUÉ SALIÓ MAL DURANTE LA MIGRACIÓN: qué no previste, qué se rompió al cortar, cuánto tardó en volver. ]'
learned:
  - Que "no controlo esta pieza" es una decisión de arquitectura aunque nadie la haya tomado explícitamente. Delegar infraestructura está bien; no saber qué delegaste, no.
stack: [Supabase, PostgreSQL, Docker, Linux, DNS, Backups]
stackSummary: [Supabase · Postgres, Linux · DNS, Secretos · Backups]
---
