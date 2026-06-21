function Matriz() {
  const vulnerabilidades = [
    { nombre: 'Inyección SQL', probabilidad: 5, impacto: 5, riesgo: 25, nivel: 'Crítico', color: '#EF4444', bg: '#FEF2F2' },
    { nombre: 'XSS Reflejado', probabilidad: 4, impacto: 4, riesgo: 16, nivel: 'Alto', color: '#F97316', bg: '#FFF7ED' },
    { nombre: 'Inyección de comandos', probabilidad: 3, impacto: 5, riesgo: 15, nivel: 'Alto', color: '#F97316', bg: '#FFF7ED' },
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

      <div className="space-y-8">

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Evaluación de vulnerabilidades
          </h3>
          <div className="space-y-3">
            {vulnerabilidades.map((v, i) => (
              <div key={i} className="p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold" style={{color: '#0F172A'}}>{v.nombre}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{color: v.color, backgroundColor: v.bg}}>
                    {v.nivel} — {v.riesgo}
                  </span>
                </div>
                <div className="flex gap-6 text-sm" style={{color: '#64748b'}}>
                  <span>Probabilidad: <strong style={{color: '#0F172A'}}>{v.probabilidad}/5</strong></span>
                  <span>Impacto: <strong style={{color: '#0F172A'}}>{v.impacto}/5</strong></span>
                  <span>Riesgo: <strong style={{color: v.color}}>{v.probabilidad} × {v.impacto} = {v.riesgo}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Mapa de calor
          </h3>
          <div style={{overflowX: 'auto'}}>
            <table style={{borderCollapse: 'collapse', width: '100%', fontSize: '13px'}}>
              <thead>
                <tr>
                  <th style={{padding: '8px 12px', textAlign: 'left', color: '#64748b', fontWeight: '600'}}>Prob / Impacto</th>
                  {[1,2,3,4,5].map(i => (
                    <th key={i} style={{padding: '8px 12px', textAlign: 'center', color: '#64748b', fontWeight: '600'}}>
                      Impacto {i}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[5,4,3,2,1].map(prob => (
                  <tr key={prob}>
                    <td style={{padding: '8px 12px', fontWeight: '600', color: '#64748b'}}>Prob. {prob}</td>
                    {[1,2,3,4,5].map(imp => {
                      const valor = prob * imp
                      const sqli = prob === 5 && imp === 5
                      const xss = prob === 4 && imp === 4
                      const cmd = prob === 3 && imp === 5
                      const etiqueta = sqli ? 'SQLi' : xss ? 'XSS' : cmd ? 'Cmd' : ''
                      return (
                        <td key={imp} style={{
                          padding: '8px 12px',
                          textAlign: 'center',
                          backgroundColor: getCeldaColor(valor),
                          color: 'white',
                          fontWeight: etiqueta ? '700' : '400',
                          border: etiqueta ? '2px solid #0F172A' : '1px solid white',
                          borderRadius: '4px'
                        }}>
                          {valor}{etiqueta ? ` ${etiqueta}` : ''}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 mt-4 text-xs" style={{color: '#64748b'}}>
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