import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import CustomerTicket from './component/CustomerTicket/CustomerTicket'
import { Suspense, useState } from 'react'
import Footer from './component/Footer/Footer'

const fechTickects = async () => {
  const res = await fetch('/Tickects.json')
  return res.json();
}
const tickectPromise = fechTickects()
function App() {
  const [selectedTicket, setSelectedTicket] = useState([])
  const [selectedComplete, setSelectedComplete] = useState([])
  const [solved, setSolved] = useState([])

  return (
    <>
      <Navbar ></Navbar>
      <Banner setSelectedComplete={setSelectedComplete} selectedComplete={selectedComplete} selectedTicket={selectedTicket} ></Banner>
      <Suspense fallback={<div className="flex items-center justify-center pt-6">
        <span className="loading loading-spinner text-info"></span>
      </div>
      }>
        <CustomerTicket solved={solved} setSolved={setSolved} selectedComplete={selectedComplete} setSelectedComplete={setSelectedComplete} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} tickectPromise={tickectPromise}></CustomerTicket>
      </Suspense>
      <Footer></Footer>


      <ToastContainer />
    </>
  )
}

export default App
