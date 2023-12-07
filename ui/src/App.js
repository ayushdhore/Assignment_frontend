import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Login from './Pages/login';
import Signup from './Pages/signup';



function App() {
  return(
       <div>

<BrowserRouter>
     
     
   
     <Routes>
       <Route path ='/' element={<Login />}/>
       <Route path ='/login' element={<Login/>}/>
       <Route path ='/signup' element={<Signup />}/>
      
     </Routes>
    
     </BrowserRouter>



       </div>

          
  )
}




export default App;
