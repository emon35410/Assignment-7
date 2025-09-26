import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import CustomerTicket from './component/CustomerTicket/CustomerTicket'
import { Suspense } from 'react'

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
    <Suspense fallback={<div className="flex items-center justify-center pt-6">
            <span className="loading loading-spinner text-info"></span>
          </div>
          }>
<CustomerTicket  tickectPromise={tickectPromise}></CustomerTicket>
    </Suspense>
    
      
      <ToastContainer /> 
    </>
  )
}

export default App
