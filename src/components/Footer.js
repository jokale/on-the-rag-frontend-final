import React from 'react'

class Footer extends React.Component{
    render() {
        return (
            <footer> <center>
                <big  style={{color: "#55025e", fontFamily: 'Abril Fatface'}}>Joanna E Kalema Applications &copy;</big>
                <br></br>
                <small style={{color: "#55025e", fontFamily: 'Abril Fatface'}}>To see more check out more of my other <a href="https://joannathedeveloper.netlify.app/">projects</a></small>
                <br></br>
                <small style={{color: "#55025e", fontFamily: 'Abril Fatface'}}>
                    You can find the code repo on <a href="https://github.com/jokale/on-the-rag-frontend-final" target="_blank">Github</a>. Feel free to make any pull requests to improve the aplication.
                </small>
                
           </center>
           </footer>
        )
    }
}

export default Footer