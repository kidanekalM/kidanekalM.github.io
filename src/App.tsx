import {Routes,Route} from 'react-router-dom'
import logo from './pics/logo.png'
import Header from './components/header/header'
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import AdminSignIn from './Pages/Admin/AdminSignIn/AdminSignIn';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import ManageProjects from './Pages/Admin/AdminHome/ManageProjects/ManageProjects';
import Qualificaition from './Pages/Qualification/Qualification'
import './App.css'
import AddProjects from './Pages/Admin/AdminHome/ManageProjects/AddProjects/AddProjects';
import EditProjects from './Pages/Admin/AdminHome/ManageProjects/EditProjects/EditProjects';
import CvWrapper from './Pages/CvWrapper/CvWrapper';
function App() {
  return (
    <>
    {
      location.href.includes('cv')?<></>:
      <Header logo ={logo} />
    }
      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/Projects' element={<Projects/>}>
          <Route path='/Projects/:title' element={<Projects/>}></Route>
        </Route>
        <Route path='/Qualification' element={<Qualificaition/>}>
        <Route path='/Qualification/:title' element={<Qualificaition/>}></Route>
        </Route>
        <Route path='/AdminSignIn' element={<AdminSignIn/>}></Route>
        <Route path='/AdminHome' element={<AdminHome/>}></Route>
        <Route path='AdminHome/ManageProjects' element={<ManageProjects/>}></Route>
        <Route path='/cvwrapper' element={<CvWrapper/>}></Route>
        <Route path='AdminHome/ManageProjects/AddProjects' element={<AddProjects/>}></Route>
        <Route path='AdminHome/ManageProjects/EditProjects/:id' element={<EditProjects/>}>
          {/* <Route path="/:id"></Route> */}
        </Route>
      </Routes>
          {
      location.href.includes('cv')?<></>:
      <Footer />
    }
    </>
  )
}

export default App
