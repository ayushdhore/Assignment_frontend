
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { RiLockPasswordFill } from "react-icons/ri";
import {  FaUserTie } from "react-icons/fa";


const Login=()=> {
  return(
         
    <div className='bg'>
    
    <div style ={styles.container} >
            
          
    <h3 style={{color:'white'}}>Login Page</h3>
    <div className="col-12 mt-5 mb-4">
    <div className="input-group">
    <div className="input-group-text">
    <FaUserTie />
    </div>
    <input
    className="form-control" type='email' placeholder="Username"/>
    </div>
    </div>
    
    <div className="col-12 mt-4 mb-4">
    <div className="input-group">
    <div className="input-group-text">
    <RiLockPasswordFill />
    </div>
    <input 
    type="password" className="form-control"  placeholder="Password"/>
    </div>
    </div>
             
    <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <div className="form-check row" >
    <div  className="col auto">
    <Form.Check type="radio" aria-label="radio 1" />
    <label style={{color:'white'}}>User</label>
    </div>
    <div  className="col auto">
    <Form.Check type="radio" aria-label="radio 2" />
    <label style={{color:'white'}}>Admin</label> 
    </div>
    <div className="col auto">
    <Form.Check type="radio" aria-label="radio 3" />
    <label style={{color:'white'}}>Client</label>
    </div> 
    </div>
    
    <div className="col">
    <div>
    
    </div>  
    </div>
    </div>
    </div>
    
    <div className="d-grid gap-2 col-6 mx-auto">
    <button style={styles.loginbutton} className="btn btn-primary" type="button">Login</button>
    </div>
    
    <div className="col-12 mt-3 mb-2">
    <label style={{color:'white'}}>Don't have account?</label>
    <br></br><Link to="/signup">Signup</Link>
    </div>
    
    
    </div> 
    </div> 
  )
}

const styles ={
  loginbutton: {
    position: 'relative',
    width: '200%',
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
    border: 'none',
    marginTop: 10,
    right:88,
  },

  container:{

    padding:20,
    width:400,
    height:400,
    position:'absolute',
    top:5,
    left:750,
    bottom:0,
    marginTop:50,
    // borderColor: '',
    borderRadius: 10,
    broderWidth: 1,
    // boxShadow: '1px 1px 1px 3px #C9C9C9'
    },

}


export default Login;
