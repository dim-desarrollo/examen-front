
import './App.css'
import imgHeader from "../public/Dim-2.png"
function App() {


  return (
    <div className='grid-container'>
      <header className="header">
        <img src={imgHeader} className='img-logo' />
        {/* <p>dasdasdsad</p> */}
      </header>
      <main className="body">
        <div className='section-tramites'>
          <div className='content-title'>
            <h3 className='title-web'>Tramites Web</h3>
          </div>
          <div className='seccion-cuit'>
            <p className='p-cuit'>Trabajando con la C.U.I.T N° <b>20-05496076-0</b> </p>
          </div>
          <div>
            <button className='btn-nuevo-tramite'>
              Nuevo Tramite
            </button>
          </div>
        </div>
      </main>
      <footer class="footer">

      </footer>
    </div>
  )
}

export default App
