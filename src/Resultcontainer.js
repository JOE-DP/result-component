import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components'
import Resultoutput from './Resultoutput';
import Testitems from './Testitems';

function Resultcontainer(){
  
    return(
        
          <Container>
            <div className='halfDivideContainer'>
            <Resultoutput />
            </div>
            <div className='halfDivideContainer'>
            <p className='summary'>English Language results</p>
            <Itemscontainer>
            {/* blue */}
              <Testitems color='#c3d7f7' fontColor='#3e87fa' name='Speaking' /> 
            {/* red */}
              <Testitems color='#fab6af' fontColor='#fa513e' name='Listening' />
            {/* green */}
              <Testitems color='#bafaaf' fontColor='#258a13' name='Reading' />
            {/* pruple */}
              <Testitems color='#edc0ed' fontColor='#991f99' name='Writing' />
            </Itemscontainer>
            <Testbutton>Continue</Testbutton>
            </div>
          </Container>
        
    )
}

const Itemscontainer = styled.div`
height: 75%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

`
const Testbutton = styled.button`
cursor: pointer;	
background: blue;
width: 80%;
border: s1px solid #4d4c4d; 
margin: auto;
border-radius: 30px;
font-family: 'Open Sans', sans-serif;
height: 10%;
font-size: 1.6rem;
color: #4d4c4d;
margin-bottom: 10%;
background: rgb(195,215,247);
background: linear-gradient(90deg, rgba(195,215,247,1) 21%, rgba(250,182,175,1) 100%); 
`
const Container = styled.div`
height: 80vh;
background: white;
font-size: 4rem;
width: 60%;
margin: auto;
display: flex;

.summary{
  padding-top: 5%;
  text-align: center;
  color: #4d4c4d;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
}


.halfDivideContainer{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

left: 50%;
top: 50%;

position: absolute;
transform: translate(-50%, -50%);
box-shadow: 11px 10px 40px -10px rgba(123,126,140,0.62);
border-radius: 35px;

`

export default Resultcontainer