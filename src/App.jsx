import { useState } from 'react'
import Resumen from './components/Resumen'
import InyeccionSQL from './components/InyeccionSQL'
import XSS from './components/XSS'
import Comandos from './components/Comandos'
import Activos from './components/Activos'
import Matriz from './components/Matriz'
import Controles from './components/Controles'
import Recuperacion from './components/Recuperacion'
import Prompts from './components/Prompts'

const secciones = [
  { id: 'resumen', label: '01 — Resumen', componente: Resumen },
  { id: 'sqli', label: '02 — SQL Injection', componente: InyeccionSQL },
  { id: 'xss', label: '03 — XSS', componente: XSS },
  { id: 'comandos', label: '04 — Comandos', componente: Comandos },
  { id: 'activos', label: '05 — Activos', componente: Activos },
  { id: 'matriz', label: '06 — Matriz', componente: Matriz },
  { id: 'controles', label: '07 — Controles', componente: Controles },
  { id: 'recuperacion', label: '08 — Recuperación', componente: Recuperacion },
  { id: 'prompts', label: '09 — Bitácora IA', componente: Prompts },
]

function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen')
  const [menuAbierto, setMenuAbierto] = useState(false)
  const SeccionActual = secciones.find(s => s.id === seccionActiva)?.componente

  const handleSeccion = (id) => {
    setSeccionActiva(id)
    setMenuAbierto(false)
  }

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F1F5F9'}}>

      <header style={{backgroundColor: '#0F172A', color: 'white', padding: '40px 16px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', textAlign: 'center'}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
            <div style={{backgroundColor: '#0284C7', width: '4px', height: '40px', borderRadius: '2px'}}></div>
            <p style={{color: '#38BDF8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: '600'}}>
              Auditoría de Ciberseguridad · TI3034 · INACAP Valparaíso
            </p>
            <div style={{backgroundColor: '#0284C7', width: '4px', height: '40px', borderRadius: '2px'}}></div>
          </div>
          <h1 style={{color: 'white', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 'bold', marginBottom: '8px'}}>
            Aguas Claras Sanitaria
          </h1>
          <p style={{color: '#38BDF8', fontSize: 'clamp(14px, 2.5vw, 18px)', marginBottom: '8px'}}>
            Evaluación de activos críticos, vulnerabilidades e impacto operacional
          </p>
          <p style={{color: '#64748b', fontSize: '13px', marginTop: '16px'}}>
            Daniela Morales · Otoño 2026
          </p>
        </div>
      </header>

      {/* Botón menú móvil */}
      <div className="mobile-menu-btn" style={{backgroundColor: '#0284C7', padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span style={{color: 'white', fontSize: '13px', fontWeight: '600'}}>
          {secciones.find(s => s.id === seccionActiva)?.label}
        </span>
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: '6px 14px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px',
          }}
        >
          {menuAbierto ? '✕ Cerrar' : '☰ Menú'}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <div className="mobile-menu-dropdown" style={{backgroundColor: '#0F172A', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: '4px'}}>
          {secciones.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleSeccion(id)}
              style={{
                textAlign: 'left',
                padding: '10px 12px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: seccionActiva === id ? '#0284C7' : 'transparent',
                color: seccionActiva === id ? 'white' : '#94a3b8',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div style={{display: 'flex', flex: 1, maxWidth: '1100px', margin: '0 auto', width: '100%'}}>

        <nav className="desktop-nav" style={{width: '220px', flexShrink: 0, padding: '32px 24px 32px 0'}}>
          <div style={{position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            {secciones.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleSeccion(id)}
                style={{
                  textAlign: 'left',
                  padding: '10px 14px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  border: seccionActiva === id ? 'none' : '1px solid #e2e8f0',
                  backgroundColor: seccionActiva === id ? '#0284C7' : 'white',
                  color: seccionActiva === id ? 'white' : '#334155',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        <main style={{flex: 1, padding: '32px 0px 80px 0px'}}>
          {SeccionActual && <SeccionActual />}
        </main>

      </div>

      <footer style={{backgroundColor: '#0F172A', color: '#64748b', fontSize: '13px', padding: '20px 16px', marginTop: '40px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px'}}>
          <span>Estudiante: <a href="https://github.com/Blueamapola" target="_blank" rel="noreferrer" style={{color: '#38BDF8', textDecoration: 'none'}}>Daniela Morales</a> · auditoria_mordan</span>
          <span>Docente: Rubén Schnettler — INACAP Valparaíso</span>
        </div>
      </footer>

    </div>
  )
}

export default App