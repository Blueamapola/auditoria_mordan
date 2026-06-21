function XSS() {
  return (
    <section className="bg-white rounded-lg shadow-md mb-8" style={{borderTop: '4px solid #F97316'}}>
      <div className="p-8">
        <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{color: '#0284C7'}}>
          // 03 — XSS Reflejado
        </p>
        <h2 className="text-2xl font-bold mb-8" style={{color: '#0F172A', fontFamily: 'Poppins, sans-serif'}}>
          Cross-Site Scripting
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-base mb-3 pb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0'}}>
              Evidencia del ataque
            </h3>
            <p className="mb-4" style={{color: '#334155'}}>
              Payload utilizado: <code className="bg-slate-100 text-red-600 px-2 py-1 rounded text-sm">&lt;script&gt;alert('XSS')&lt;/script&gt;</code>
            </p>
            <img src="/img_mordan/xss_mordan.png" alt="XSS" className="border border-slate-200 rounded-md w-full mb-4 shadow-sm" />
            <p style={{color: '#334155'}}>
              El navegador ejecutó el script y mostró un popup con el mensaje "XSS", demostrando que el código fue interpretado como instrucción y no como texto.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 pb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0'}}>
              Por qué funciona
            </h3>
            <p style={{color: '#334155'}}>
              La página inserta la entrada del usuario directamente en el HTML de respuesta sin sanitizarla. El navegador no distingue qué vino del usuario y qué es código propio de la página, por lo que ejecuta el script malicioso.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 pb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0'}}>
              Impacto en Aguas Claras
            </h3>
            <p style={{color: '#334155'}}>
              Un atacante podría enviar un enlace manipulado a un cliente. Al abrirlo, el script roba la cookie de sesión y le da acceso completo a la cuenta. También podría redirigir al usuario a una página falsa para robar credenciales o datos de pago.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 pb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0'}}>
              CVSS v3.1
            </h3>
            <div className="flex items-center gap-4 p-4 rounded-md" style={{backgroundColor: '#FFF7ED', border: '1px solid #fed7aa'}}>
              <span className="font-bold text-2xl" style={{color: '#ea580c'}}>8.2</span>
              <span className="font-bold text-xs px-2 py-1 rounded" style={{color: '#ea580c', backgroundColor: '#ffedd5'}}>ALTO</span>
              <span className="text-sm" style={{color: '#64748b'}}>Vector de red · Interacción de usuario requerida</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 pb-2" style={{color: '#0F172A', borderBottom: '1px solid #e2e8f0'}}>
              Prevención y mitigación
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
                <span style={{color: '#334155'}}>Escapar la salida con htmlspecialchars para que el navegador muestre el texto sin ejecutarlo</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
                <span style={{color: '#334155'}}>Implementar política CSP (Content Security Policy) que restrinja qué scripts pueden ejecutarse</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
                <span style={{color: '#334155'}}>Usar el atributo HttpOnly en las cookies de sesión para que no sean accesibles desde JavaScript</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-md" style={{backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0'}}>
                <span className="font-bold shrink-0" style={{color: '#0284C7'}}>→</span>
                <span style={{color: '#334155'}}>Validar y sanitizar toda entrada del usuario en el servidor</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default XSS