function Prompts() {
  const prompts = [
    {
      numero: '01',
      titulo: 'Inyección SQL',
      herramienta: 'Claude',
      seccion: 'Archivo 02',
      prompt: "En el sistema auditado de Aguas Claras encontré una vulnerabilidad de inyección SQL usando el payload ' OR '1'='1 en DVWA con nivel de seguridad Low. Explícame por qué funciona técnicamente, qué hace exactamente la comilla simple, y qué política de prevención debería aplicar considerando que es una empresa sanitaria que maneja datos personales de clientes.",
      uso: 'Entender el mecanismo técnico de la vulnerabilidad antes de redactar el análisis.',
      acepto: 'La explicación de cómo la comilla cierra el campo y la condición OR devuelve todo.',
      corrigio: 'La aplicación del impacto al contexto de Aguas Claras, enfocándome en los datos de facturación y la Ley 19.628.'
    },
    {
      numero: '02',
      titulo: 'XSS Reflejado',
      herramienta: 'Claude',
      seccion: 'Archivo 03',
      prompt: 'Ejecuté el ataque XSS reflejado en DVWA con el payload script alert XSS y el navegador ejecutó el popup. Entiendo que el script se ejecutó, pero no entiendo por qué el navegador no lo trata como texto plano. Explícame qué pasa internamente y cómo htmlspecialchars previene esto.',
      uso: 'Entender por qué el navegador ejecuta el script en lugar de mostrarlo como texto.',
      acepto: 'La explicación de que el navegador no distingue entre el código de la página y la entrada del usuario.',
      corrigio: 'El escenario de robo de sesión aplicado al contexto específico de Aguas Claras.'
    },
    {
      numero: '03',
      titulo: 'Inyección de comandos',
      herramienta: 'Claude',
      seccion: 'Archivo 04',
      prompt: 'Usé el payload 127.0.0.1; cat /etc/passwd en DVWA Command Injection y el servidor mostró el contenido del archivo de cuentas del sistema. ¿Por qué el punto y coma permite ejecutar un segundo comando? ¿Y qué tan grave es esto para una empresa como Aguas Claras que opera infraestructura crítica?',
      uso: 'Entender el rol del punto y coma en Linux y dimensionar el impacto para una empresa sanitaria.',
      acepto: 'La explicación del encadenamiento de comandos con punto y coma.',
      corrigio: 'La conexión con los sistemas SCADA de Aguas Claras, porque ese contexto no estaba en la respuesta.'
    },
    {
      numero: '04',
      titulo: 'Activos de información',
      herramienta: 'Claude',
      seccion: 'Archivo 05',
      prompt: 'Para Aguas Claras Sanitaria, empresa que provee agua potable y gestiona alcantarillado, ¿qué activos de información debería incluir en mi análisis? Necesito identificarlos según su criticidad, considerando que opera infraestructura crítica.',
      uso: 'Asegurarme de no olvidar activos relevantes para una empresa sanitaria específicamente.',
      acepto: 'La sugerencia de incluir los sistemas SCADA como activo diferenciador.',
      corrigio: 'Eliminé activos genéricos que no aplicaban al contexto de Aguas Claras y ajusté la criticidad según mi criterio.'
    },
    {
      numero: '05',
      titulo: 'Matriz de riesgo',
      herramienta: 'Claude',
      seccion: 'Archivo 06',
      prompt: 'Necesito construir una matriz de riesgo para las tres vulnerabilidades encontradas en Aguas Claras: inyección SQL, XSS reflejado e inyección de comandos. ¿Cómo asigno los valores de probabilidad e impacto? ¿Qué criterios uso para justificar cada valor?',
      uso: 'Entender la metodología de la matriz de riesgo antes de aplicarla.',
      acepto: 'Los criterios de evaluación como referencia.',
      corrigio: 'Los valores finales los asigné yo considerando el contexto de Aguas Claras.'
    },
    {
      numero: '06',
      titulo: 'Diseño visual y estética',
      herramienta: 'ChatGPT',
      seccion: 'Sitio web',
      prompt: 'Necesito diseñar una página web para una auditoría de seguridad de una empresa sanitaria llamada Aguas Claras. Quiero que transmita confianza, profesionalismo y que tenga relación con el agua y la ciberseguridad. Sugiéreme una paleta de colores, tipografías y estética general.',
      uso: 'Definir la identidad visual del sitio antes de empezar a codificar.',
      acepto: 'La paleta de colores: azul oscuro #0F172A, azul agua #0284C7, celeste #38BDF8, rojo #EF4444 y verde #22C55E. Las tipografías Poppins e Inter.',
      corrigio: 'La implementación en CSS y la adaptación al contexto de la evaluación.'
    },
    {
      numero: '07',
      titulo: 'Mapa de calor en React',
      herramienta: 'Claude',
      seccion: 'Componente Matriz',
      prompt: 'Necesito un componente React para mostrar el mapa de calor de la matriz de riesgo. Las vulnerabilidades son: SQLi con probabilidad 5 e impacto 5, XSS con probabilidad 4 e impacto 4, y Command Injection con probabilidad 3 e impacto 5. Los colores deben ser rojo para crítico (20+), naranja para alto (12-19), amarillo para medio (6-11) y verde para bajo (1-5).',
      uso: 'Construir el componente visual del mapa de calor con lógica de colores dinámicos.',
      acepto: 'La estructura de la tabla con colores dinámicos según el valor de riesgo.',
      corrigio: 'Ajusté los colores para que coincidieran con la paleta del sitio y modifiqué las etiquetas de las celdas.'
    },
  ]

  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderLeft: '4px solid #0284C7', padding: '32px 40px'}}>
      <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
        // 09 — Bitácora de IA
      </p>
      <h2 className="text-2xl font-bold mb-8" style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif'}}>
        Uso de Inteligencia Artificial
      </h2>

      <div className="space-y-10">
        {prompts.map((p, i) => (
          <div key={i} className="p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0', marginBottom: '24px'}}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-bold text-lg" style={{color: '#0284C7'}}>{p.numero}</span>
              <div>
                <p className="font-semibold text-sm" style={{color: '#0F172A'}}>{p.titulo}</p>
                <p className="text-xs" style={{color: '#64748b'}}>{p.herramienta} · {p.seccion}</p>
              </div>
            </div>
            <div className="text-sm" style={{color: '#334155', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <div className="p-3 rounded" style={{backgroundColor: '#F1F5F9', fontStyle: 'italic'}}>
                "{p.prompt}"
              </div>
              <p><strong style={{color: '#0F172A'}}>Para qué se usó:</strong> {p.uso}</p>
              <p><strong style={{color: '#22C55E'}}>Qué acepté:</strong> {p.acepto}</p>
              <p><strong style={{color: '#0284C7'}}>Qué corregí:</strong> {p.corrigio}</p>
            </div>
          </div>
        ))}

        <div className="p-4 rounded-md" style={{backgroundColor: '#EFF6FF', border: '1px solid #bfdbfe'}}>
          <h3 className="font-semibold text-base mb-3" style={{color: '#0F172A'}}>Reflexión final</h3>
          <p className="text-sm mb-3" style={{color: '#334155'}}>
            Usar Claude en esta evaluación me ayudó principalmente a entender el "por qué" detrás de cada vulnerabilidad, no solo el "cómo". Ejecutar el ataque en DVWA es fácil — escribir el payload y ver el resultado toma dos minutos. Lo difícil es explicar qué pasa internamente y por qué eso es un problema para una empresa específica.
          </p>
          <p className="text-sm mb-3" style={{color: '#334155'}}>
            Los prompts que funcionaron mejor fueron los que incluían el contexto de Aguas Claras, la vulnerabilidad concreta y lo que ya había observado en el ataque. Los prompts genéricos no sirven.
          </p>
          <p className="text-sm" style={{color: '#334155'}}>
            La responsabilidad técnica sigue siendo mía: la IA puede explicar conceptos, pero no sabe qué sistemas tiene Aguas Claras ni qué impacto tendría un ataque en su operación. Eso lo tuve que razonar yo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prompts