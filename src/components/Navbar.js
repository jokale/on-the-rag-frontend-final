import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#D7E1F6',
  textDecoration: 'underline overline',
  textDecorationColor: 'white',
  color: 'black',
 
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
            background: '#375595'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >About</NavLink>
        <NavLink
          to="/quiz"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >Period Finder</NavLink>
        
             <NavLink
          to="/light"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >Light Flow</NavLink>

        <NavLink
          to="/mid"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >Mid Flow</NavLink>
         <NavLink
          to="/heavy"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >Heavy Flow</NavLink>
     
     <NavLink
          to="/extra"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >Resources</NavLink>
         <NavLink
          to="/help"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >Help</NavLink>
         
      </div>
    )
  }
}

export default Navbar;