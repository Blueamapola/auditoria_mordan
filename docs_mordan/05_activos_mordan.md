# Activos de Información — Aguas Claras Sanitaria

## Identificación de activos

Los activos de información son todos los recursos que tienen valor para la organización y que deben ser protegidos. En el caso de Aguas Claras Sanitaria, se identifican los siguientes activos críticos:

## Activos críticos

### 1. Base de datos de clientes

Contiene información personal de todos los usuarios del servicio: nombres, RUT, direcciones, datos de contacto, historial de consumo y datos de facturación. Es el activo más sensible desde el punto de vista de privacidad y cumplimiento legal (Ley 19.628 de Protección de Datos Personales).

**Riesgo asociado:** Exposición masiva de datos personales mediante inyección SQL.

### 2. Sistema de facturación

Gestiona los cobros, pagos y deudas de los clientes. Una alteración en este sistema podría generar pérdidas económicas directas o conflictos con los usuarios.

**Riesgo asociado:** Modificación o eliminación de registros mediante inyección SQL o inyección de comandos.

### 3. Portal web de clientes

Es la interfaz principal de atención al cliente. Permite el acceso a información personal y la realización de trámites. Su compromiso afecta directamente la confianza de los usuarios.

**Riesgo asociado:** Robo de sesiones mediante XSS, suplantación de identidad.

### 4. Servidor web

Aloja el portal de clientes y ejecuta los procesos del sistema. Es el punto de entrada para los ataques de inyección de comandos.

**Riesgo asociado:** Toma de control total del servidor mediante inyección de comandos.

### 5. Sistemas de control operacional (SCADA)

Controlan la distribución de agua potable y el funcionamiento de las estaciones de bombeo. Aunque no fueron parte de esta auditoría, una brecha en el servidor web podría ser el primer paso para acceder a estos sistemas.

**Riesgo asociado:** Interrupción del suministro de agua potable, impacto en infraestructura crítica.

### 6. Credenciales de acceso

Nombres de usuario y contraseñas del personal administrativo y técnico. Si son comprometidas, el atacante puede operar como un usuario legítimo.

**Riesgo asociado:** Escalada de privilegios, acceso no autorizado a sistemas internos.

## Clasificación por criticidad


| Activo                    | Criticidad | Impacto en caso de compromiso              |
| ------------------------- | ---------- | ------------------------------------------ |
| Base de datos de clientes | Alta       | Filtración masiva de datos personales     |
| Sistema de facturación   | Alta       | Pérdidas económicas y conflictos legales |
| Portal web de clientes    | Alta       | Pérdida de confianza, robo de sesiones    |
| Servidor web              | Alta       | Control total del sistema                  |
| Sistemas SCADA            | Crítica   | Interrupción del suministro de agua       |
| Credenciales de acceso    | Alta       | Acceso no autorizado a sistemas internos   |
