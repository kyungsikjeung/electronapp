import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h1 className="text-lg">Hello ttworld</h1>
      <h1>Hello ttworld</h1>
    </>
  )
}

export default App
