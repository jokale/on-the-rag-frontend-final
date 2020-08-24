import React from 'react'
import Footer from './Footer'


class Login extends  React.Component {
    render(){
    return (
               <div>
                   <center><form>
                       <label for ='email'>Email</label> <br></br>
                       <input type='text'  id='email' name='email' placeholder='Email'></input> <br></br>
                       <label for ='password'>Password</label> <br></br>
                       <input type='password'  id='password' name='password' placeholder='Password'></input><br></br>
                       <br></br><button id='login-button'>Login</button><br></br>
                        
                   </form></center>
                   <Footer/>
               </div> 
            )

    }
        
}

export default Login