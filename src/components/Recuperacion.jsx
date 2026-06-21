function Recuperacion() {
  const fases = [
    {
      numero: '01',
      titulo: 'Detección y contención',
      tiempo: '0-4 horas',
      color: '#EF4444',
      bg: '#FEF2F2',
      pasos: [
        'Detectar el incidente mediante alertas del IDS o reportes de usuarios',
        'Aislar los sistemas afectados de la red para evitar propagación',
        'Notificar al equipo de respuesta a incidentes y a la dirección',
        'Preservar evidencia forense (logs, capturas de tráfico)'
      ]
    },
    {
      numero: '02',
      titulo: 'Análisis y erradicación',
      tiempo: '4-24 horas',
      color: '#F97316',
      bg: '#FFF7ED',
      pasos: [
        'Identificar el vector de ataque y los sistemas comprometidos',
        'Eliminar el malware o acceso no autorizado',
        'Aplicar los parches y correcciones necesarias',
        'Verificar la integridad de los datos y sistemas'
      ]
    },
    {
      numero: '03',
      titulo: 'Recuperación',
      tiempo: '24-72 horas',
      color: '#EAB308',
      bg: '#FEFCE8',
      pasos: [
        'Restaurar los sistemas desde los respaldos más recientes verificados',
        'Realizar pruebas de funcionamiento antes de volver a producción',
        'Monitorear intensivamente durante las primeras 48 horas post-recuperación',
        'Comunicar el incidente a los clientes afectados si corresponde (Ley 19.628)'
      ]
    },
    {
      numero: '04',
      titulo: 'Lecciones aprendidas',
      tiempo: '1-2 semanas',
      color: '#22C55E',
      bg: '#F0FDF4',
      pasos: [
        'Elaborar un informe post-incidente con causa raíz, impacto y medidas tomadas',
        'Actualizar los procedimientos de seguridad según lo aprendido',
        'Implementar controles adicionales para evitar recurrencia'
      ]
    }
  ]

  const mejoras = [
    { plazo: 'Corto plazo (0-3 meses)', items: ['Migrar a frameworks modernos con protección nativa', 'Implementar HTTPS con TLS', 'Autenticación de dos factores (2FA)', 'Gestión de sesiones segura con tokens CSRF'] },
    { plazo: 'Mediano plazo (3-6 meses)', items: ['Implementar WAF', 'Sistema de detección de intrusiones (IDS)', 'Auditorías de seguridad periódicas', 'Segmentación de red'] },
    { plazo: 'Largo plazo (6-12 meses)', items: ['Programa de capacitación continua (OWASP Top 10)', 'Política de gestión de vulnerabilidades', 'Centro de operaciones de seguridad (SOC)'] },
  ]

  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderLeft: '4px solid #0284C7', padding: '32px 40px'}}>
      <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
        // 08 — Recuperación
      </p>
      <h2 className="text-2xl font-bold mb-8" style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif'}}>
        Mejora Tecnológica y Plan de Recuperación
      </h2>

      <div className="space-y-8">

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Mejoras tecnológicas recomendadas
          </h3>
          <div className="space-y-3">
            {mejoras.map((m, i) => (
              <div key={i} className="p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <p className="font-semibold mb-2 text-sm" style={{color: '#0284C7'}}>{m.plazo}</p>
                <ul className="space-y-1">
                  {m.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{color: '#334155'}}>
                      <span style={{color: '#0284C7', fontWeight: 'bold'}}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Plan de recuperación ante desastres
          </h3>
          <div className="space-y-3">
            {fases.map((fase, i) => (
              <div key={i} className="p-4 rounded-md" style={{backgroundColor: fase.bg, border: `1px solid ${fase.color}30`}}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-bold text-lg" style={{color: fase.color}}>{fase.numero}</span>
                  <div>
                    <p className="font-semibold text-sm" style={{color: '#0F172A'}}>{fase.titulo}</p>
                    <p className="text-xs" style={{color: '#64748b'}}>{fase.tiempo}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {fase.pasos.map((paso, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{color: '#334155'}}>
                      <span style={{color: fase.color, fontWeight: 'bold'}}>→</span> {paso}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Objetivos de recuperación
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold text-sm" style={{color: '#0284C7'}}>RTO</span>
              <span className="text-sm" style={{color: '#334155'}}>Máximo 24 horas para sistemas críticos</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold text-sm" style={{color: '#0284C7'}}>RPO</span>
              <span className="text-sm" style={{color: '#334155'}}>Máximo 4 horas de pérdida de datos</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold text-sm" style={{color: '#0284C7'}}>Respaldos</span>
              <span className="text-sm" style={{color: '#334155'}}>Diaria para base de datos, semanal para sistemas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Recuperacion