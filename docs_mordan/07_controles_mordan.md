# Políticas de Prevención y Controles de Mitigación


## Marco de referencia

Los controles propuestos se basan en el estándar **OWASP (Open Web Application Security Project)**, específicamente en el OWASP Top 10, que identifica las vulnerabilidades web más críticas y sus contramedidas. Para la priorización se complementa con el marco **NIST Cybersecurity Framework**.

## Introducción

Una vez identificadas las vulnerabilidades y evaluado su riesgo, el siguiente paso es definir las medidas para reducir la probabilidad de que ocurran y minimizar el daño en caso de que sí ocurran. Se distinguen dos tipos de medidas:

- **Prevención (3.1.4):** acciones para evitar que la vulnerabilidad sea explotada.
- **Mitigación (3.1.5):** controles para reducir el impacto si el ataque ocurre igual.

## Políticas de prevención

### Inyección SQL

- Implementar consultas parametrizadas (prepared statements) en todas las consultas a la base de datos.
- Validar el tipo de dato de cada campo antes de procesarlo (por ejemplo, forzar que el campo ID sea un entero).
- Aplicar el principio de mínimo privilegio al usuario de base de datos: solo debe tener permisos de lectura en las tablas que necesita.
- Capacitar al equipo de desarrollo en prácticas de codificación segura.

### XSS Reflejado

- Escapar toda salida de datos con funciones como htmlspecialchars antes de mostrarla en el HTML.
- Implementar una política CSP (Content Security Policy) que restrinja los scripts que pueden ejecutarse en el portal.
- Validar y sanitizar toda entrada del usuario en el servidor, no solo en el cliente.
- Usar el atributo HttpOnly en las cookies de sesión.

### Inyección de comandos

- No pasar la entrada del usuario directamente al sistema operativo bajo ninguna circunstancia.
- Implementar listas blancas que validen el formato de los datos antes de procesarlos.
- Usar APIs seguras que no invoquen la terminal del sistema.
- Aplicar el principio de mínimo privilegio al proceso del servidor web.

## Controles de mitigación

### Monitoreo y detección

- Implementar un sistema de detección de intrusiones (IDS/IPS) que identifique patrones de ataque conocidos.
- Registrar y monitorear todos los accesos y consultas inusuales a la base de datos.
- Configurar alertas automáticas ante comportamientos anómalos.

### Respuesta ante incidentes

- Definir un protocolo de respuesta ante incidentes que incluya aislamiento, análisis y notificación.
- Mantener respaldos actualizados de la base de datos y los sistemas críticos.
- Establecer un equipo responsable de la respuesta a incidentes de seguridad.

### Segmentación de red

- Aislar el servidor web del resto de la infraestructura interna mediante segmentación de red.
- Implementar un WAF (Web Application Firewall) entre los usuarios y el portal de clientes.
- Restringir el acceso a los sistemas SCADA desde la red del portal web.

## Priorización de controles


| Control                  | Vulnerabilidad    | Prioridad    |
| ------------------------ | ----------------- | ------------ |
| Consultas parametrizadas | SQL Injection     | 🔴 Inmediata |
| Escapar salida HTML      | XSS               | 🔴 Inmediata |
| Validación de entrada   | Command Injection | 🔴 Inmediata |
| Implementar WAF          | Todas             | 🟠 Alta      |
| Política CSP            | XSS               | 🟠 Alta      |
| IDS/IPS                  | Todas             | 🟠 Alta      |
| Segmentación de red     | Command Injection | 🟡 Media     |
| Capacitación del equipo | Todas             | 🟡 Media     |
