# Mejora Tecnológica y Plan de Recuperación

## Introducción

El plan de recuperación ante desastres (DR) define las acciones que debe tomar Aguas Claras Sanitaria en caso de que un ataque de seguridad logre comprometer sus sistemas. El objetivo es minimizar el tiempo de inactividad y restaurar la operación normal lo antes posible.

## Mejoras tecnológicas recomendadas

### Corto plazo (0-3 meses)

- **Actualizar el stack tecnológico:** migrar a frameworks modernos que implementen protección contra SQLi y XSS por defecto, como Laravel o Django.
- **Implementar HTTPS:** asegurar que todo el tráfico del portal esté cifrado con TLS.
- **Autenticación de dos factores (2FA):** agregar una capa adicional de seguridad para el acceso de administradores.
- **Gestión de sesiones segura:** implementar tokens CSRF, expiración de sesión y cookies seguras.

### Mediano plazo (3-6 meses)

- **WAF (Web Application Firewall):** implementar un firewall de aplicaciones web que filtre tráfico malicioso antes de que llegue al servidor.
- **Sistema de detección de intrusiones (IDS):** monitorear el tráfico en tiempo real para detectar patrones de ataque.
- **Auditorías de seguridad periódicas:** realizar pruebas de penetración al menos una vez al año.
- **Segmentación de red:** aislar los sistemas SCADA de la red del portal web.

### Largo plazo (6-12 meses)

- **Programa de capacitación continua:** formar al equipo de desarrollo en seguridad web (OWASP Top 10).
- **Política de gestión de vulnerabilidades:** establecer un proceso formal para identificar, priorizar y remediar vulnerabilidades.
- **Centro de operaciones de seguridad (SOC):** considerar la implementación de un SOC o la contratación de un servicio externo de monitoreo.

## Plan de recuperación ante desastres (DR)

### Fase 1 — Detección y contención (0-4 horas)

1. Detectar el incidente mediante alertas del IDS o reportes de usuarios.
2. Aislar los sistemas afectados de la red para evitar propagación.
3. Notificar al equipo de respuesta a incidentes y a la dirección.
4. Preservar evidencia forense (logs, capturas de tráfico).

### Fase 2 — Análisis y erradicación (4-24 horas)

1. Identificar el vector de ataque y los sistemas comprometidos.
2. Eliminar el malware o acceso no autorizado.
3. Aplicar los parches y correcciones necesarias.
4. Verificar la integridad de los datos y sistemas.

### Fase 3 — Recuperación (24-72 horas)

1. Restaurar los sistemas desde los respaldos más recientes verificados.
2. Realizar pruebas de funcionamiento antes de volver a producción.
3. Monitorear intensivamente durante las primeras 48 horas post-recuperación.
4. Comunicar el incidente a los clientes afectados si corresponde (obligatorio según Ley 19.628).

### Fase 4 — Lecciones aprendidas (1-2 semanas)

1. Elaborar un informe post-incidente con causa raíz, impacto y medidas tomadas.
2. Actualizar los procedimientos de seguridad según lo aprendido.
3. Implementar controles adicionales para evitar recurrencia.

## Objetivos de recuperación


| Métrica                       | Objetivo                                         |
| ------------------------------ | ------------------------------------------------ |
| RTO (Recovery Time Objective)  | Máximo 24 horas para sistemas críticos         |
| RPO (Recovery Point Objective) | Máximo 4 horas de pérdida de datos             |
| Frecuencia de respaldos        | Diaria para base de datos, semanal para sistemas |
