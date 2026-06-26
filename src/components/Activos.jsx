function Activos() {
  const activos = [
    { nombre: 'Base de datos de clientes', criticidad: 'Alta', color: '#EF4444', bg: '#FEF2F2', impacto: 'Filtración masiva de datos personales' },
    { nombre: 'Sistema de facturación', criticidad: 'Alta', color: '#EF4444', bg: '#FEF2F2', impacto: 'Pérdidas económicas y conflictos legales' },
    { nombre: 'Portal web de clientes', criticidad: 'Alta', color: '#EF4444', bg: '#FEF2F2', impacto: 'Pérdida de confianza, robo de sesiones' },
    { nombre: 'Servidor web', criticidad: 'Alta', color: '#EF4444', bg: '#FEF2F2', impacto: 'Control total del sistema' },
    { nombre: 'Sistemas SCADA', criticidad: 'Crítica', color: '#7C3AED', bg: '#F5F3FF', impacto: 'Interrupción del suministro de agua' },
    { nombre: 'Credenciales de acceso', criticidad: 'Alta', color: '#EF4444', bg: '#FEF2F2', impacto: 'Acceso no autorizado a sistemas internos' },
  ]

  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderLeft: '4px solid #0284C7', padding: '32px 40px'}}>
      <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
        // 05 — Activos de Información
      </p>
      <h2 style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '12px'}}>
  Activos Críticos — Aguas Claras Sanitaria
</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Identificación y clasificación
          </h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {activos.map((activo, i) => (
              <div key={i} className="p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold" style={{color: '#0F172A'}}>{activo.nombre}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{color: activo.color, backgroundColor: activo.bg}}>
                    {activo.criticidad}
                  </span>
                </div>
                <p className="text-sm" style={{color: '#64748b'}}>{activo.impacto}</p>
              </div>
            ))}
          </div>
        </div>
            <div style={{marginTop: '24px'}}>
  <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
    Vulnerabilidades por activo
  </h3>
  <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
    <div className="p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
      <p className="font-semibold text-sm mb-1" style={{color: '#0F172A'}}>Base de datos de clientes</p>
      <p className="text-sm" style={{color: '#334155'}}>En riesgo por: <span className="font-semibold" style={{color: '#EF4444'}}>Inyección SQL</span> — exposición total de registros de clientes.</p>
    </div>
    <div className="p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
      <p className="font-semibold text-sm mb-1" style={{color: '#0F172A'}}>Portal web de clientes</p>
      <p className="text-sm" style={{color: '#334155'}}>En riesgo por: <span className="font-semibold" style={{color: '#F97316'}}>XSS Reflejado</span> — robo de sesiones y suplantación de identidad.</p>
    </div>
    <div className="p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
      <p className="font-semibold text-sm mb-1" style={{color: '#0F172A'}}>Servidor web</p>
      <p className="text-sm" style={{color: '#334155'}}>En riesgo por: <span className="font-semibold" style={{color: '#EF4444'}}>Inyección de comandos</span> — control total del servidor.</p>
    </div>
    <div className="p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
      <p className="font-semibold text-sm mb-1" style={{color: '#0F172A'}}>Sistema de facturación y Credenciales</p>
      <p className="text-sm" style={{color: '#334155'}}>En riesgo por: <span className="font-semibold" style={{color: '#EF4444'}}>Inyección SQL</span> e <span className="font-semibold" style={{color: '#EF4444'}}>Inyección de comandos</span> — modificación de registros y acceso no autorizado.</p>
    </div>
  </div>
</div>
        <div style={{marginTop: '24px'}}>
  <h3 className="font-semibold text-base mb-4" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
    Activo más crítico
  </h3>
          <div className="p-4 rounded-md" style={{backgroundColor: '#F5F3FF', border: '1px solid #ddd6fe'}}>
            <p style={{color: '#334155'}}>
              Los sistemas SCADA representan el activo de mayor criticidad para Aguas Claras Sanitaria. Su compromiso no solo afectaría la operación interna, sino que podría interrumpir el suministro de agua potable para toda la comunidad, constituyendo un impacto en infraestructura crítica nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activos