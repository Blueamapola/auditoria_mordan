function Matriz() {
  const vulnerabilidades = [
    { 
      nombre: 'Inyección SQL', probabilidad: 5, impacto: 5, riesgo: 25, nivel: 'Crítico', color: '#EF4444', bg: '#FEF2F2',
      justificacion: 'Probabilidad máxima: el payload es trivial, está ampliamente documentado y no requiere autenticación. Impacto máximo: expone toda la base de datos de clientes de Aguas Claras, incluyendo datos personales protegidos por la Ley 19.628.'
    },
    { 
      nombre: 'XSS Reflejado', probabilidad: 4, impacto: 4, riesgo: 16, nivel: 'Alto', color: '#F97316', bg: '#FFF7ED',
      justificacion: 'Probabilidad alta: el ataque requiere que la víctima haga clic en un enlace manipulado, alcanzable mediante phishing dirigido a clientes. Impacto alto: permite robar sesiones activas y suplantar identidades en el portal.'
    },
    { 
      nombre: 'Inyección de comandos', probabilidad: 3, impacto: 5, riesgo: 15, nivel: 'Alto', color: '#F97316', bg: '#FFF7ED',
      justificacion: 'Probabilidad media: requiere encontrar el formulario vulnerable, lo que implica reconocimiento previo. Impacto máximo: da control total del servidor y acceso potencial a sistemas SCADA de distribución de agua.'
    },
  ]

  const getCeldaColor = (valor) => {
    if (valor >= 20) return '#EF4444'
    if (valor >= 12) return '#F97316'
    if (valor >= 6) return '#EAB308'
    return '#22C55E'
  }

  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderLeft: '4px solid #0284C7', padding: '32px 40px'}}>
      <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
        // 06 — Matriz de Riesgo
      </p>
      <h2 className="text-2xl font-bold mb-8" style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif'}}>
        Matriz de Riesgo
      </h2>

      <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Evaluación de vulnerabilidades
          </h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {vulnerabilidades.map((v, i) => (
              <div key={i} className="p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px'}}>
                  <span className="font-semibold" style={{color: '#0F172A'}}>{v.nombre}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{color: v.color, backgroundColor: v.bg}}>
                    {v.nivel} — {v.riesgo}
                  </span>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#64748b', marginBottom: '8px'}}>
                  <span>Probabilidad: <strong style={{color: '#0F172A'}}>{v.probabilidad}/5</strong></span>
                  <span>Impacto: <strong style={{color: '#0F172A'}}>{v.impacto}/5</strong></span>
                  <span>Riesgo: <strong style={{color: v.color}}>{v.probabilidad} × {v.impacto} = {v.riesgo}</strong></span>
                </div>
                <p className="text-sm" style={{color: '#334155'}}>{v.justificacion}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Priorización de atención
          </h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <div className="p-3 rounded-md" style={{backgroundColor: '#FEF2F2', border: '1px solid #fecaca'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
                <span style={{backgroundColor: '#EF4444', color: 'white', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px'}}>1° ATENDER</span>
                <span className="font-semibold text-sm" style={{color: '#0F172A'}}>Inyección SQL — CVSS 9.8</span>
              </div>
              <p className="text-sm" style={{color: '#334155'}}>Riesgo máximo (25/25). Expone toda la base de datos de clientes sin autenticación. Debe corregirse de forma inmediata.</p>
            </div>
            <div className="p-3 rounded-md" style={{backgroundColor: '#FEF2F2', border: '1px solid #fecaca'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
                <span style={{backgroundColor: '#EF4444', color: 'white', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px'}}>2° ATENDER</span>
                <span className="font-semibold text-sm" style={{color: '#0F172A'}}>Inyección de comandos — CVSS 9.8</span>
              </div>
              <p className="text-sm" style={{color: '#334155'}}>Riesgo alto (15/25). Permite control total del servidor. Impacto crítico en infraestructura sanitaria.</p>
            </div>
            <div className="p-3 rounded-md" style={{backgroundColor: '#FFF7ED', border: '1px solid #fed7aa'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
                <span style={{backgroundColor: '#F97316', color: 'white', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px'}}>3° ATENDER</span>
                <span className="font-semibold text-sm" style={{color: '#0F172A'}}>XSS Reflejado — CVSS 8.2</span>
              </div>
              <p className="text-sm" style={{color: '#334155'}}>Riesgo alto (16/25). Requiere interacción del usuario para explotar. Igualmente urgente por el riesgo de robo de sesiones.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Mapa de calor
          </h3>
          <table style={{borderCollapse: 'collapse', width: '100%', fontSize: '11px', tableLayout: 'fixed'}}>
            <thead>
              <tr>
                <th style={{padding: '6px 4px', textAlign: 'left', color: '#64748b', fontWeight: '600', width: '20%'}}>Prob / Imp</th>
                {[1,2,3,4,5].map(i => (
                  <th key={i} style={{padding: '6px 4px', textAlign: 'center', color: '#64748b', fontWeight: '600', width: '16%'}}>
                    Imp {i}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[5,4,3,2,1].map(prob => (
                <tr key={prob}>
                  <td style={{padding: '6px 4px', fontWeight: '600', color: '#64748b'}}>Prob. {prob}</td>
                  {[1,2,3,4,5].map(imp => {
                    const valor = prob * imp
                    const sqli = prob === 5 && imp === 5
                    const xss = prob === 4 && imp === 4
                    const cmd = prob === 3 && imp === 5
                    const etiqueta = sqli ? 'SQLi' : xss ? 'XSS' : cmd ? 'Cmd' : ''
                    return (
                      <td key={imp} style={{
                        padding: '6px 4px',
                        textAlign: 'center',
                        backgroundColor: getCeldaColor(valor),
                        color: 'white',
                        fontWeight: etiqueta ? '700' : '400',
                        border: etiqueta ? '2px solid #0F172A' : '1px solid white',
                        borderRadius: '2px',
                        fontSize: etiqueta ? '10px' : '11px'
                      }}>
                        {valor}{etiqueta ? ` ${etiqueta}` : ''}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px', fontSize: '12px', color: '#64748b'}}>
            <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
              <span style={{width: '12px', height: '12px', borderRadius: '2px', backgroundColor: '#EF4444', display: 'inline-block'}}></span> Crítico (≥20)
            </span>
            <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
              <span style={{width: '12px', height: '12px', borderRadius: '2px', backgroundColor: '#F97316', display: 'inline-block'}}></span> Alto (12-19)
            </span>
            <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
              <span style={{width: '12px', height: '12px', borderRadius: '2px', backgroundColor: '#EAB308', display: 'inline-block'}}></span> Medio (6-11)
            </span>
            <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
              <span style={{width: '12px', height: '12px', borderRadius: '2px', backgroundColor: '#22C55E', display: 'inline-block'}}></span> Bajo (1-5)
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Matriz