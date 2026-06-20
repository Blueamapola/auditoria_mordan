# Resumen Ejecutivo — Auditoría de Seguridad Web

## Empresa: Aguas Claras Sanitaria

### Descripción de la empresa

Aguas Claras Sanitaria es una empresa de servicios sanitarios que se encarga de proveer agua potable y gestionar el alcantarillado para una comunidad. Como empresa de servicios básicos, opera infraestructura crítica: sin agua potable no funciona nada, desde hogares hasta hospitales. Eso la convierte en un objetivo atractivo para atacantes.

### Portal de clientes

El portal web de Aguas Claras permite a los clientes revisar su consumo, pagar sus cuentas, solicitar servicios y actualizar sus datos personales. Este portal maneja información sensible: nombres, RUT, direcciones, historial de pagos y datos de facturación.

### Objetivo de la auditoría

Esta auditoría evalúa la seguridad del portal de clientes de Aguas Claras Sanitaria en un entorno controlado, usando la aplicación DVWA (Damn Vulnerable Web Application). Se realizaron tres ataques para demostrar vulnerabilidades reales que podrían afectar al sistema:

- **Inyección SQL** — acceso no autorizado a la base de datos de clientes
- **XSS Reflejado** — ejecución de código malicioso en el navegador de los usuarios
- **Inyección de comandos** — toma de control del servidor

### Impacto potencial en el negocio

Una brecha de seguridad en Aguas Claras no es solo un problema técnico. Si un atacante accede a la base de datos de clientes, puede robar datos personales de miles de personas. Si toma control del servidor, podría interrumpir el servicio o manipular los sistemas de distribución de agua. El impacto va desde multas regulatorias hasta una crisis de confianza pública.

### Metodología

La auditoría se realizó en un ambiente controlado con nivel de seguridad Low en DVWA, con fines exclusivamente académicos y defensivos. Todos los ataques se ejecutaron sobre el entorno autorizado por el docente, en el marco de la asignatura TI3034 de INACAP Valparaíso.
