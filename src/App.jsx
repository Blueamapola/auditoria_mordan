import { useState } from 'react'
import Resumen from './components/Resumen'
import InyeccionSQL from './components/InyeccionSQL'
import XSS from './components/XSS'
import Comandos from './components/Comandos'
import Activos from './components/Activos'
import Matriz from './components/Matriz'
import Controles from './components/Controles'
import Recuperacion from './components/Recuperacion'

const secciones = [
  { id: 'resumen', label: '01 — Resumen', componente: Resumen },
  { id: 'sqli', label: '02 — SQL Injection', componente: InyeccionSQL },
{ id: 'xss', label: '03 — XSS', componente: XSS },
{ id: 'comandos', label: '04 — Comandos', componente: Comandos },
{ id: 'activos', label: '05 — Activos', componente: Activos },
{ id: 'matriz', label: '06 — Matriz', componente: Matriz },
{ id: 'controles', label: '07 — Controles', componente: Controles },
{ id: 'recuperacion', label: '08 — Recuperación', componente: Recuperacion },
]

function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen')
  const SeccionActual = secciones.find(s => s.id === seccionActiva)?.componente

  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: '#F1F5F9'}}>

      <header style={{backgroundColor: '#0F172A'}} className="text-white py-16 px-4 shadow-xl">
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div style={{backgroundColor: '#0284C7', width: '4px', height: '40px', borderRadius: '2px'}}></div>
            <p style={{color: '#38BDF8'}} className="text-sm uppercase tracking-[0.3em] font-semibold">
              Auditoría de Ciberseguridad · TI3034 · INACAP Valparaíso
            </p>
            <div style={{backgroundColor: '#0284C7', width: '4px', height: '40px', borderRadius: '2px'}}></div>
          </div>
          <h1 className="font-bold mb-3 tracking-tight" style={{color: 'white', fontSize: '2.8rem'}}>
            Aguas Claras Sanitaria
          </h1>
          <p style={{color: '#38BDF8'}} className="text-lg mb-2">
            Evaluación de activos críticos, vulnerabilidades e impacto operacional
          </p>
          <p className="text-slate-400 text-sm mt-4">
            Daniela Morales · Otoño 2026
          </p>
        </div>
      </header>

      <div className="flex flex-1" style={{maxWidth: '1100px', margin: '0 auto', width: '100%'}}>

        <nav className="shrink-0 py-8 pr-6" style={{width: '220px'}}>
          <div className="sticky top-8 flex flex-col gap-2">
            {secciones.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setSeccionActiva(id)}
                className="text-left px-4 py-3 text-sm font-medium rounded transition-colors"
                style={seccionActiva === id
                  ? {backgroundColor: '#0284C7', color: 'white'}
                  : {backgroundColor: 'white', color: '#334155', border: '1px solid #e2e8f0'}
                }
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        <main className="flex-1 py-8 pb-16" style={{paddingLeft: '24px', paddingRight: '24px'}}>
          {SeccionActual && <SeccionActual />}
        </main>

      </div>

      <footer style={{backgroundColor: '#0F172A', color: '#64748b', fontSize: '14px', padding: '20px 16px', marginTop: '60px'}}>
  <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px'}}>
    <span>Estudiante: <a href="https://github.com/Blueamapola" target="_blank" rel="noreferrer" style={{color: '#38BDF8', textDecoration: 'none'}}>Daniela Morales</a> · auditoria_mordan</span>
    </div>
</footer>

    </div>
  )
}

export default App