import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard'
import AddCustomers from './components/AddCustomers'
import AddSuppliers from './components/AddSuppliers'
import AddVehicles from './components/AddVehicles'
import Home from './components/Home'



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dashboard/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/addcustomers' element={<AddCustomers/>}></Route>
    <Route path='/addsuppliers' element={ <AddSuppliers/>}></Route>
    <Route path='/addvehicles' element={<AddVehicles/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
