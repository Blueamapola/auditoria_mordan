function Controles() {
  const controles = [
    { control: 'Consultas parametrizadas', vulnerabilidad: 'SQL Injection', prioridad: 'Inmediata', color: '#EF4444', bg: '#FEF2F2' },
    { control: 'Escapar salida HTML', vulnerabilidad: 'XSS', prioridad: 'Inmediata', color: '#EF4444', bg: '#FEF2F2' },
    { control: 'Validación de entrada', vulnerabilidad: 'Command Injection', prioridad: 'Inmediata', color: '#EF4444', bg: '#FEF2F2' },
    { control: 'Implementar WAF', vulnerabilidad: 'Todas', prioridad: 'Alta', color: '#F97316', bg: '#FFF7ED' },
    { control: 'Política CSP', vulnerabilidad: 'XSS', prioridad: 'Alta', color: '#F97316', bg: '#FFF7ED' },
    { control: 'IDS/IPS', vulnerabilidad: 'Todas', prioridad: 'Alta', color: '#F97316', bg: '#FFF7ED' },
    { control: 'Segmentación de red', vulnerabilidad: 'Command Injection', prioridad: 'Media', color: '#EAB308', bg: '#FEFCE8' },
    { control: 'Capacitación del equipo', vulnerabilidad: 'Todas', prioridad: 'Media', color: '#EAB308', bg: '#FEFCE8' },
  ]

  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderLeft: '4px solid #0284C7', padding: '32px 40px'}}>
      <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
        // 07 — Controles
      </p>
      <h2 className="text-2xl font-bold mb-8" style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif'}}>
        Políticas de Prevención y Controles de Mitigación
      </h2>

      <div className="space-y-8">

        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Prevención por vulnerabilidad
          </h3>
          <div className="p-4 rounded-md mb-6" style={{backgroundColor: '#EFF6FF', border: '1px solid #bfdbfe'}}>
  <p className="text-sm font-semibold mb-1" style={{color: '#0284C7'}}>Marco de referencia</p>
  <p className="text-sm" style={{color: '#334155'}}>
    Los controles propuestos se basan en el estándar <strong>OWASP (Open Web Application Security Project)</strong>, 
    específicamente en el OWASP Top 10, que identifica las vulnerabilidades web más críticas y sus contramedidas. 
    Para la priorización se complementa con el marco <strong>NIST Cybersecurity Framework</strong>.
  </p>
</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            {['SQL Injection', 'XSS Reflejado', 'Command Injection'].map((vuln, i) => (
              <div key={i} className="p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <p className="font-semibold mb-2" style={{color: '#0F172A'}}>{vuln}</p>
                <ul className="space-y-1">
                  {vuln === 'SQL Injection' && [
                    'Implementar consultas parametrizadas en todas las consultas a la base de datos',
                    'Validar el tipo de dato de cada campo antes de procesarlo',
                    'Aplicar mínimo privilegio al usuario de base de datos',
                    'Capacitar al equipo de desarrollo en codificación segura'
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{color: '#334155'}}>
                      <span style={{color: '#0284C7', fontWeight: 'bold'}}>→</span> {item}
                    </li>
                  ))}
                  {vuln === 'XSS Reflejado' && [
                    'Escapar toda salida de datos con htmlspecialchars',
                    'Implementar política CSP que restrinja los scripts ejecutables',
                    'Validar y sanitizar toda entrada del usuario en el servidor',
                    'Usar el atributo HttpOnly en las cookies de sesión'
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{color: '#334155'}}>
                      <span style={{color: '#0284C7', fontWeight: 'bold'}}>→</span> {item}
                    </li>
                  ))}
                  {vuln === 'Command Injection' && [
                    'No pasar la entrada del usuario directamente al sistema operativo',
                    'Implementar listas blancas que validen el formato de los datos',
                    'Usar APIs seguras que no invoquen la terminal del sistema',
                    'Aplicar mínimo privilegio al proceso del servidor web'
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{color: '#334155'}}>
                      <span style={{color: '#0284C7', fontWeight: 'bold'}}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: '18px'}}>
  <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
    Priorización de controles
  </h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
            {controles.map((c, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <span className="text-xs font-bold px-2 py-1 rounded shrink-0" style={{color: c.color, backgroundColor: c.bg}}>
                  {c.prioridad}
                </span>
                <span className="font-medium text-sm" style={{color: '#0F172A'}}>{c.control}</span>
                <span className="text-xs ml-auto" style={{color: '#64748b'}}>{c.vulnerabilidad}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Controles