---
order: 3
code: S—03
title: SGI — Sistema de gestión de inventarios
summary: '[ EL PROBLEMA QUE RESOLVÍA — CONTÁMELO ]. Hoy está en migración de Angular 21 a 22: mantener un sistema vivo mientras cambia de versión mayor también es el trabajo.'
status: building
statusNote: Migrando a Angular 22
period: '[ AÑO ] — hoy'
role: Desarrollador principal
users: '[ QUIÉN LO USA ]'
context: Sistema en producción, migrando de versión mayor.
problem:
  - '[ EL PROBLEMA DE NEGOCIO QUE RESOLVÍA ESTE SISTEMA. Qué se hacía antes, con qué herramienta, y por qué dejó de alcanzar. ]'
built:
  - Un sistema de gestión de inventarios sobre Angular con backend en NestJS.
  - '[ QUÉ HACE EXACTAMENTE: qué se registra, quién lo captura, qué reportes salen. ]'
decisions:
  - title: NestJS en el backend
    body: '[ POR QUÉ NEST Y NO OTRA COSA. Estructura impuesta, inyección de dependencias, algo del equipo. ]'
  - title: Migrar en producción, no reescribir
    body: El sistema está en uso. Una reescritura habría significado congelar features durante meses; la migración de versión mayor se hace por partes, con el sistema funcionando.
broke:
  - '[ QUÉ SE ROMPIÓ EN LA MIGRACIÓN DE ANGULAR 21 A 22. Aunque sea una dependencia que quedó atrás o un cambio de API que te costó un día. ]'
learned:
  - '[ QUÉ APRENDISTE. ]'
stack: [Angular, TypeScript, NestJS, PostgreSQL]
stackSummary: [Angular 21 → 22, NestJS, TypeScript]
---
