function InyeccionSQL() {
  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderLeft: '4px solid #EF4444', padding: '32px 40px'}}>
      <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
        // 02 — Inyección SQL
      </p>
      <h2 className="text-2xl font-bold mb-8" style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif'}}>
        SQL Injection
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Evidencia del ataque
          </h3>
          <p className="mb-4" style={{color: '#334155'}}>
            Payload utilizado: <code className="bg-slate-100 text-red-600 px-2 py-1 rounded text-sm">' OR '1'='1</code>
          </p>
          <img src="/img_mordan/sqli_mordan.png" alt="SQLi" className="border border-slate-200 rounded-md w-full shadow-sm" />
<p className="text-xs text-center mt-2 mb-4 italic" style={{color: '#64748b'}}>
  La imagen muestra el resultado del payload ' OR '1'='1 ejecutado en el módulo SQL Injection de DVWA con nivel de seguridad Low. Se observa que la aplicación devolvió todos los registros de la base de datos sin autenticación.
</p>
          <p style={{color: '#334155'}}>
            La aplicación devolvió todos los registros de usuarios de la base de datos sin ningún tipo de restricción.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Por qué funciona
          </h3>
          <p style={{color: '#334155'}}>
            La aplicación concatena la entrada del usuario directamente en la consulta SQL. La comilla simple cierra el campo antes de tiempo y la condición OR '1'='1' es siempre verdadera, por lo que el motor de base de datos devuelve todos los registros.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Impacto en Aguas Claras
          </h3>
          <p style={{color: '#334155'}}>
            Un atacante podría extraer la tabla completa de clientes: nombres, RUT, direcciones y datos de facturación. También podría modificar o eliminar registros afectando la facturación y el historial de consumo.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            CVSS v3.1
          </h3>
          <div className="flex items-center gap-4 p-4 rounded-md" style={{backgroundColor: '#FEF2F2', border: '1px solid #fecaca'}}>
            <span className="font-bold text-2xl" style={{color: '#dc2626'}}>9.8</span>
            <span className="font-bold text-xs px-2 py-1 rounded" style={{color: '#dc2626', backgroundColor: '#FEE2E2'}}>CRÍTICO</span>
            <span className="text-sm" style={{color: '#64748b'}}>Vector de red · Sin autenticación · Impacto total</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-3" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Prevención y mitigación
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
              <span style={{color: '#334155'}}>Usar consultas parametrizadas (prepared statements)</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
              <span style={{color: '#334155'}}>Validar que el campo ID solo acepte enteros</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
              <span style={{color: '#334155'}}>Limitar permisos del usuario de base de datos</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
              <span style={{color: '#334155'}}>Implementar WAF para detectar patrones de inyección</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InyeccionSQL