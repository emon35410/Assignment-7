import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import CustomerTicket from './component/CustomerTicket/CustomerTicket'

const fechTickects = async () => {
  const res = await fetch('./Tickects.json')
  return res.json();
}
const tickectPromise = fechTickects()
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <CustomerTicket tickectPromise={tickectPromise}></CustomerTicket>
      <ToastContainer />
    </>
  )
}

export default App
