function Comandos() {
  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderLeft: '4px solid #EF4444', padding: '32px 40px'}}>
      <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
        // 04 — Inyección de Comandos
      </p>
      <h2 className="text-2xl font-bold mb-8" style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif'}}>
        Command Injection
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Evidencia del ataque
          </h3>
          <p className="mb-4" style={{color: '#334155'}}>
            Payload utilizado: <code className="bg-slate-100 text-red-600 px-2 py-1 rounded text-sm">127.0.0.1; cat /etc/passwd</code>
          </p>
          <img src="/img_mordan/comandos_mordan.png" alt="Comandos" className="border border-slate-200 rounded-md w-full shadow-sm" />
<p className="text-xs text-center mt-2 mb-4 italic" style={{color: '#64748b'}}>
  La imagen muestra el resultado del payload 127.0.0.1; cat /etc/passwd ejecutado en el módulo Command Injection de DVWA. El servidor ejecutó ambos comandos y devolvió el contenido del archivo de cuentas del sistema.
</p>
          <p style={{color: '#334155'}}>
            El servidor ejecutó el ping y además mostró el contenido completo del archivo /etc/passwd, que lista todas las cuentas de usuario del sistema operativo.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Por qué funciona
          </h3>
          <p style={{color: '#334155'}}>
            La página pasa la entrada del usuario directamente al sistema operativo sin validarla. El carácter punto y coma encadena dos comandos en Linux: primero ejecuta el ping y después ejecuta el segundo comando. El servidor no distingue que esa segunda parte vino del usuario.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px'}}>
            Impacto en Aguas Claras
          </h3>
          <p style={{color: '#334155'}}>
            Esta es la vulnerabilidad más crítica de las tres. Un atacante con acceso al servidor podría leer archivos internos, eliminar registros, instalar software malicioso o interrumpir el servicio de facturación y control de distribución. Para una empresa de infraestructura crítica como Aguas Claras, esto podría traducirse en una interrupción del suministro de agua o una fuga masiva de datos personales.
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
              <span style={{color: '#334155'}}>Nunca pasar la entrada del usuario directamente al sistema operativo</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
              <span style={{color: '#334155'}}>Usar listas blancas que solo acepten valores con formato de IP válida</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
              <span style={{color: '#334155'}}>Aplicar el principio de mínimo privilegio: el servidor web no debería poder leer archivos del sistema</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
              <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
              <span style={{color: '#334155'}}>Implementar un IDS que alerte sobre comandos sospechosos y aislar el servidor mediante segmentación de red</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comandos