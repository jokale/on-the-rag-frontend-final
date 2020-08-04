import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 0px 1px',
  background: '#DB5985',
  fontFamily: 'Galada, cursive',
  color: 'white',
 
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: '#690618',
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: '#690618'
          }}
        >About</NavLink>
        <NavLink
          to="/periodquiz"
          exact
          style={link}
          activeStyle={{
            background: '#690618'
          }}
        >Period Quiz</NavLink>
        
             <NavLink
          to="/light"
          exact
          style={link}
          activeStyle={{
            background: '#690618'
          }}
        >Light Flow</NavLink>

        <NavLink
          to="/mid"
          exact
          style={link}
          activeStyle={{
            background: '#690618'
          }}
        >Mid Flow</NavLink>
         <NavLink
          to="/heavy"
          exact
          style={link}
          activeStyle={{
            background: '#690618'
          }}
        >Heavy Flow</NavLink>
     
     <NavLink
          to="/extra"
          exact
          style={link}
          activeStyle={{
            background: '#690618'
          }}
        >Resources</NavLink>
         
      </div>
    )
  }
}

export default Navbar;