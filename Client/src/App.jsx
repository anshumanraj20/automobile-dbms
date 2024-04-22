import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard'
import AddCustomers from './components/AddCustomers'
import AddSuppliers from './components/AddSuppliers'
import AddVehicles from './components/AddVehicles'
import Home from './components/Home'
import AddModels from './components/AddModels'
import AddPlants from './components/AddPlants'
import AddBrands from './components/AddBrands'
import AddSales from './components/AddSales'
import Ermodel from './components/Ermodel'
import OurTeam from './components/OurTeam'
import LandingP from './components/LandingP'
import Contact from './components/Contact'
import AddDealers from './components/AddDealer'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/landingpage' element={<LandingP/>}></Route>
    <Route path='/' element={<Dashboard/>}>  
    <Route path='/' element={<Home/>}></Route>
    <Route path='/ermodel' element={<Ermodel/>}></Route>
    <Route path='/addcustomers' element={<AddCustomers/>}></Route>
    <Route path='/adddealers' element={<AddDealers/>}></Route>
    <Route path='/addsuppliers' element={ <AddSuppliers/>}></Route>
    <Route path='/addvehicles' element={<AddVehicles/>}></Route>
    <Route path='/addmodels' element={<AddModels/>}></Route>
    <Route path='/addplants' element={<AddPlants/>}></Route>
    <Route path='/addbrands' element={<AddBrands/>}></Route>
    <Route path='/addsales' element={<AddSales/>}></Route>
    <Route path='/ourteam' element={<OurTeam/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
