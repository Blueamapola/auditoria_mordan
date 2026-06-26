# Bitácora de Uso de Inteligencia Artificial

Para esta evaluación usé Claude (claude.ai) como herramienta principal de apoyo. Lo usé en dos etapas: primero para entender los conceptos técnicos de cada vulnerabilidad antes de ejecutar los ataques, y después para guiarme en la construcción de los componentes React. Los ataques los ejecuté yo en DVWA, las capturas son mías, y el análisis lo fui desarrollando a medida que entendía cada vulnerabilidad.

---

## Uso de IA en el análisis de vulnerabilidades

### Prompt 1: Inyección SQL (archivo 02)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "En el sistema auditado de Aguas Claras encontré una vulnerabilidad de inyección SQL usando el payload ' OR '1'='1 en DVWA con nivel de seguridad Low. Explícame por qué funciona técnicamente, qué hace exactamente la comilla simple, y qué política de prevención debería aplicar considerando que es una empresa sanitaria que maneja datos personales de clientes."

**Para qué se usó:** Entender el mecanismo técnico de la vulnerabilidad antes de redactar el análisis. Necesitaba entender qué hace la comilla simple en la consulta SQL, no solo saber que "el ataque funciona".

**Qué se usó y qué no:** Usé la explicación de cómo la comilla cierra el campo y la condición OR hace que la consulta devuelva todo. La aplicación del impacto al contexto de Aguas Claras la desarrollé yo, enfocándome en los datos de facturación y la Ley 19.628.

---

### Prompt 2: XSS Reflejado (archivo 03)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Ejecuté el ataque XSS reflejado en DVWA con el payload script alert XSS y el navegador ejecutó el popup. Entiendo que el script se ejecutó, pero no entiendo por qué el navegador no lo trata como texto plano. Explícame qué pasa internamente y cómo htmlspecialchars previene esto."

**Para qué se usó:** Entender por qué el navegador ejecuta el script en lugar de mostrarlo como texto. Eso no me quedaba claro solo con ver el resultado del ataque.

**Qué se usó y qué no:** Usé la explicación de que el navegador no distingue entre el código de la página y la entrada del usuario. El escenario de robo de sesión aplicado al portal de Aguas Claras lo construí yo, pensando en qué datos podría robar un atacante en ese contexto específico.

---

### Prompt 3: Inyección de comandos (archivo 04)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Usé el payload 127.0.0.1; cat /etc/passwd en DVWA Command Injection y el servidor mostró el contenido del archivo de cuentas del sistema. ¿Por qué el punto y coma permite ejecutar un segundo comando? ¿Y qué tan grave es esto para una empresa como Aguas Claras que opera infraestructura crítica de distribución de agua?"

**Para qué se usó:** Entender el rol del punto y coma en Linux y dimensionar el impacto real de esta vulnerabilidad para una empresa sanitaria.

**Qué se usó y qué no:** Usé la explicación del encadenamiento de comandos con punto y coma. La conexión con los sistemas SCADA de Aguas Claras y el impacto en infraestructura crítica lo desarrollé yo, porque ese contexto específico no estaba en la respuesta.

---

### Prompt 4: Activos e Informe B (archivo 05)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Para Aguas Claras Sanitaria, empresa que provee agua potable y gestiona alcantarillado, ¿qué activos de información debería incluir en mi análisis? Necesito identificarlos según su criticidad, considerando que opera infraestructura crítica y maneja datos personales de clientes."

**Para qué se usó:** Asegurarme de no olvidar activos relevantes para una empresa sanitaria específicamente, ya que el análisis de activos depende mucho del rubro.

**Qué se usó y qué no:** Tomé la sugerencia de incluir los sistemas SCADA como activo diferenciador. Eliminé activos genéricos que no aplicaban al contexto de Aguas Claras y ajusté el nivel de criticidad de cada uno según mi propio criterio.

---

### Prompt 5: Matriz de riesgo (archivo 06)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Necesito construir una matriz de riesgo para las tres vulnerabilidades encontradas en Aguas Claras Sanitaria: inyección SQL, XSS reflejado e inyección de comandos. ¿Cómo asigno los valores de probabilidad e impacto? ¿Qué criterios uso para justificar cada valor?"

**Para qué se usó:** Entender la metodología de la matriz de riesgo antes de aplicarla, especialmente cómo justificar los valores y no asignarlos al azar.

**Qué se usó y qué no:** Usé los criterios de evaluación como referencia. Los valores finales los asigné yo considerando el contexto de Aguas Claras, por ejemplo, la probabilidad de SQLi es máxima porque el payload es trivial y está ampliamente documentado.

---

## Uso de IA en la construcción de la página web

### Prompt 6: Diseño visual y estética del sitio

**Herramienta:** ChatGPT

**Prompt:**

> "Necesito diseñar una página web para una auditoría de seguridad de una empresa sanitaria llamada Aguas Claras. Quiero que transmita confianza, profesionalismo y que tenga relación con el agua y la ciberseguridad. Sugiereme una paleta de colores, tipografías y estética general."

**Para qué se usó:** Definir la identidad visual del sitio antes de empezar a codificar. No quería usar colores genéricos y necesitaba que la estética tuviera relación con el rubro de la empresa.

**Qué se usó y qué no:** Usé la paleta sugerida: azul oscuro #0F172A, azul agua #0284C7, celeste #38BDF8, con rojo #EF4444 para vulnerabilidades críticas y verde #22C55E para indicadores seguros. También usé las tipografías sugeridas: Poppins para títulos e Inter para el contenido. La implementación en CSS y la adaptación al contexto de la evaluación la hice yo.

### Prompt 7: Componentes React y mapa de calor

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Necesito un componente React para mostrar el mapa de calor de la matriz de riesgo. Las vulnerabilidades son: SQLi con probabilidad 5 e impacto 5, XSS con probabilidad 4 e impacto 4, y Command Injection con probabilidad 3 e impacto 5. Los colores deben ser: rojo para valores críticos (20+), naranja para alto (12-19), amarillo para medio (6-11) y verde para bajo (1-5). El estilo debe coincidir con el resto del sitio que usa la paleta azul oscuro #0F172A y azul agua #0284C7."

**Para qué se usó:** Construir el componente visual del mapa de calor, que requería lógica de colores dinámicos que no sabía implementar sola.

**Qué se usó y qué no:** Usé la estructura de la tabla con colores dinámicos. Ajusté los colores para que coincidieran exactamente con la paleta del sitio y modifiqué las etiquetas de las celdas para que fueran más claras.

**Errores relevantes que se corrigieron:**

- El archivo XSS.jsx no subía a GitHub porque Windows no distingue mayúsculas de minúsculas en nombres de archivo. Lo resolví eliminando el archivo y creándolo de nuevo con el nombre correcto.
- Tailwind no aplicaba clases nuevas que no estaban en el código original, así que tuve que usar `style={{}}` inline para los ajustes de espaciado.
- El `@import` de Google Fonts debe ir antes del `@import "tailwindcss"` en el CSS, o Vercel falla el build.

---

## Reflexión final

Usar Claude en esta evaluación me ayudó principalmente a entender el "por qué" detrás de cada vulnerabilidad, no solo el "cómo". Ejecutar el ataque en DVWA es fácil, escribir el payload y ver el resultado toma dos minutos. Lo difícil es explicar qué pasa internamente y por qué eso es un problema para una empresa específica.

Los prompts que funcionaron mejor fueron los que incluían el contexto de Aguas Claras, la vulnerabilidad concreta y lo que ya había observado en el ataque. Los prompts genéricos no sirven, si pregunto "explícame SQLi" obtengo una respuesta genérica que no me ayuda a conectarlo con el sistema auditado de una empresa sanitaria.

La responsabilidad técnica sigue siendo mía: la IA puede explicar conceptos, pero no sabe qué sistemas tiene Aguas Claras ni qué impacto tendría un ataque en su operación. Eso lo tuve que razonar yo.
