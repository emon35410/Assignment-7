import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import CustomerTicket from './component/CustomerTicket/CustomerTicket'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <CustomerTicket></CustomerTicket>
      <ToastContainer />
    </>
  )
}

export default App
