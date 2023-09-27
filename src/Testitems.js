import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components'

function Testitems(props){
  
    return(
        
          <Container style={{background: props.color, color: props.fontColor}}>
            <p className='subject'>{props.name}</p>
            <p className='score'>10/100</p>
            
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

.subject{
  margin: auto;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
}
.score{
  margin: auto;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  color: #4d4c4d;
}
`