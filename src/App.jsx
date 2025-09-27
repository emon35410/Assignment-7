import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import CustomerTicket from './component/CustomerTicket/CustomerTicket'
import { Suspense, useState } from 'react'

const fechTickects = async () => {
  const res = await fetch('./Tickects.json')
  return res.json();
}
const tickectPromise = fechTickects()
function App() {
   const [selectedTicket, setSelectedTicket]= useState([])
   const[selectedComplete, setSelectedComplete] =useState([])
   
   
  // const [inProgress, setinProgress] = useState(0)

  return (
    <>
    <Navbar ></Navbar>
    <Banner selectedComplete={selectedComplete} selectedTicket={selectedTicket} ></Banner>
    <Suspense fallback={<div className="flex items-center justify-center pt-6">
            <span className="loading loading-spinner text-info"></span>
          </div>
          }>
<CustomerTicket  selectedComplete={selectedComplete} setSelectedComplete={setSelectedComplete}   selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}  tickectPromise={tickectPromise}></CustomerTicket>
    </Suspense>
    
      
      <ToastContainer /> 
    </>
  )
}

export default App
