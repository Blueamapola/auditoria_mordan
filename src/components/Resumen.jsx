function Resumen() {
  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderLeft: '4px solid #0284C7', padding: '32px 40px'}}>
      <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
        // 01 — Resumen Ejecutivo
      </p>
      <h2 className="text-2xl font-bold mb-8" style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif'}}>
        Aguas Claras Sanitaria
      </h2>

      <div style={{display: 'flex', flexDirection: 'column', gap: '28px'}}>
        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Descripción de la empresa
          </h3>
          <p style={{color: '#334155'}}>
            Aguas Claras Sanitaria es una empresa de servicios sanitarios que provee agua potable y gestiona el alcantarillado para su comunidad. Opera infraestructura crítica, lo que la convierte en un objetivo atractivo para atacantes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Portal de clientes
          </h3>
          <p style={{color: '#334155'}}>
            El portal web permite a los clientes revisar su consumo, pagar cuentas, solicitar servicios y actualizar datos personales. Maneja información sensible: nombres, RUT, direcciones, historial de pagos y datos de facturación.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-3" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Ataques realizados
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold text-xs px-2 py-1 rounded shrink-0" style={{color: '#dc2626', backgroundColor: '#FEF2F2'}}>CRÍTICO</span>
              <span style={{color: '#334155'}}>Inyección SQL — acceso no autorizado a la base de datos de clientes</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold text-xs px-2 py-1 rounded shrink-0" style={{color: '#ea580c', backgroundColor: '#FFF7ED'}}>ALTO</span>
              <span style={{color: '#334155'}}>XSS Reflejado — ejecución de código malicioso en el navegador</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold text-xs px-2 py-1 rounded shrink-0" style={{color: '#dc2626', backgroundColor: '#FEF2F2'}}>CRÍTICO</span>
              <span style={{color: '#334155'}}>Inyección de comandos — toma de control del servidor</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Metodología
          </h3>
          <p style={{color: '#334155'}}>
            Auditoría realizada en ambiente controlado DVWA con nivel de seguridad Low, con fines académicos y defensivos. Entorno autorizado por el docente en el marco de TI3034 — INACAP Valparaíso.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resumen