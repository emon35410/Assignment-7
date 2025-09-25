import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './component/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar></Navbar>
    
      <ToastContainer />
    </>
  )
}

export default App
