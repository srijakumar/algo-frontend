import React from 'react';
import { Link } from 'react-router-dom'


const eitherOrButton = (props) => {
    
    let allAlgos = props.allAlgos
    let algosLimited = props.algosLimited

    return (
      <div className="ui inverted segment" style={ { marginTop: '5px', marginLeft: '85px', marginRight: '85px'} }>
        
      <center>
      <Link to="/about">ABOUT</Link> | <Link to="/rules">RULES</Link> | <Link to="/">APP</Link> 
      </center>


        <div className="circular ui center green compact segment" style={{backgroundColor: "ivory"}} >
        <div className="circular ui raised green segment">
              <strong>EXPLORE OR CREATE</strong>
            </div>
            <br />
          <div className="ui fitted slider checkbox">
            <input type="checkbox"
              id="myCheck" 
              onClick={() => {
                if (document.getElementById("myCheck").checked === true) {
                  allAlgos() // this would be where a thunk action is dispatched
                } else {
                  console.log("this is the else")
                  algosLimited() // this would be where a thunk action is dispatched
                } 

              }}
             />
            <label></label>
          </div>
            
        </div>
      </div>
    );
}

export default eitherOrButton;