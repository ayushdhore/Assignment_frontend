import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import { FaUser,FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri"

const Signup=()=>{
    return(
      <div className='bg'>

      <div style={styles.container2}>
         
        <h3 style={{color:'white'}}>Signup</h3>
    
        <div className="col-12 mt-5 mb-4">
        <div className="input-group">
        <div className="input-group-text">
        <FaUser />
        </div>
        <input
        className="form-control" type='text' placeholder="Name"/>
        </div>
        </div>
        
        <div className="col-12 mt-4 mb-4">
        <div className="input-group">
        <div className="input-group-text">
        <FaMobile />
        </div>
        <input 
        type="number" className="form-control"  placeholder="Mobile no."/>
        </div>
    
        <div className="col-12 mt-4 mb-4">
        <div className="input-group">
        <div className="input-group-text">
        <MdEmail />
        </div>
        <input 
        type="email" className="form-control"  placeholder="Email Id"/>
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
    
      </div>
    
      <div className="d-grid gap-2 col-6 mx-auto">
        <button style={styles.signupbutton} className="btn btn-primary" type="button">Login</button>
        </div>
      
       <div className="col-12 mt-3 mb-2">
      <label style={{color:'white'}}>Already have account?</label>
      <br></br><Link to="/login">back to login</Link>
      </div>
      
      </div>
    
        </div> 
    )
}

const styles = {


  container2:{
    padding:20,
    width:400,
    height:400,
    position:'absolute',
    top:5,
    left:750,
    bottom:0,
    marginTop:50,
    // backgroundColor:'#182232',
    // borderColor: '',
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: '',
    // boxShadow: '1px 1px 1px 3px #C9C9C9'
    },

  signupbutton: {
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

}

export default Signup;