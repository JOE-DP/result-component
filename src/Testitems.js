import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components'

function Testitems(props){
    return(
          <Container>
            {/* style={{background: props.color, color: props.fontColor}} include above for independant styling */}
            
            <p className='subject'>{props.name}</p>
      
            <p className='score'><input onChange={props.changeScore} class={props.name} value={props.testScore}></input>/100</p>
            
          </Container>
        
    )
}


export default Testitems




const Container = styled.div`
width: 80%;
height: 15%;
font-size: 0.7em;
border-radius: 15px;
display: flex;
background-color: #45ADA8;
color: white;
jusitfy-content: space-between;
align-items: center;

.subject{
 
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  margin-left: 5%;
  color: #E5FCC2;
}
 input, .score{
  
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  color: #4d4c4d;
  margin-right: 5%;
 }

  .score{
    text-align: right;
    color: #E5FCC2;
  }
}
input{
  width: 20%;
  border-radius: 18px;
  margin: 10px;
  color: #594F4F;
}
`