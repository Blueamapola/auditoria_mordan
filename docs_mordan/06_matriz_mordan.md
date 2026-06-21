# Matriz de Riesgo — Aguas Claras Sanitaria

## Metodología

La matriz de riesgo se construye evaluando cada vulnerabilidad según dos dimensiones:

- **Probabilidad:** qué tan likely es que el ataque ocurra (1 = muy baja, 5 = muy alta)
- **Impacto:** qué tan grave sería el daño si ocurre (1 = mínimo, 5 = catastrófico)

El nivel de riesgo se calcula multiplicando ambos valores: Riesgo = Probabilidad × Impacto

## Evaluación de vulnerabilidades


| Vulnerabilidad         | Probabilidad | Impacto | Riesgo | Nivel       |
| ---------------------- | ------------ | ------- | ------ | ----------- |
| Inyección SQL         | 5            | 5       | 25     | 🔴 Crítico |
| XSS Reflejado          | 4            | 4       | 16     | 🔴 Alto     |
| Inyección de comandos | 3            | 5       | 15     | 🔴 Alto     |

## Justificación

### Inyección SQL (Riesgo: 25 — Crítico)

La probabilidad es máxima porque el payload es trivial y está ampliamente documentado. El impacto es máximo porque expone toda la base de datos de clientes, incluyendo datos personales protegidos por ley.

### XSS Reflejado (Riesgo: 16 — Alto)

La probabilidad es alta porque el ataque requiere que la víctima haga clic en un enlace manipulado, lo que es alcanzable mediante phishing. El impacto es alto porque permite robar sesiones activas y suplantar identidades.

### Inyección de comandos (Riesgo: 15 — Alto)

La probabilidad es media-alta porque requiere encontrar el formulario vulnerable. El impacto es máximo porque da control total del servidor, incluyendo acceso potencial a sistemas SCADA.

## Mapa de calor

El mapa de calor se representa visualmente en el componente React correspondiente.


|             | Impacto 1 | Impacto 2 | Impacto 3 | Impacto 4  | Impacto 5   |
| ----------- | --------- | --------- | --------- | ---------- | ----------- |
| **Prob. 5** | 5         | 10        | 15        | 20         | **25 SQLi** |
| **Prob. 4** | 4         | 8         | 12        | **16 XSS** | 20          |
| **Prob. 3** | 3         | 6         | 9         | 12         | **15 Cmd**  |
| **Prob. 2** | 2         | 4         | 6         | 8          | 10          |
| **Prob. 1** | 1         | 2         | 3         | 4          | 5           |
