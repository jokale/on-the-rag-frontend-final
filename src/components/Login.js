import React from 'react'
import Footer from './Footer'


class Login extends  React.Component {
    render(){
    return (
               <div>
                   <form>
                       <input type='text'  id='email' name='email'></input>
                        <label for ='email'>Email</label>
                   </form>
                   <Footer/>
               </div> 
            )

    }
        
}

export default Login