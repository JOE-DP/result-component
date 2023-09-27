import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components'

function Resultoutput(){
    return(
        
          <Container>
            <h2>Your average result</h2>
            <div className='circle'>
              <div>
              <p>78<span>%</span></p>
              </div>
            </div>
            <h2>Brilliant!</h2>
            <h3>You have passed and will be able to enrol on the next stage of the course</h3>

          </Container>
        
    )
}


export default Resultoutput

const Container = styled.div`
height: 100%;
background: rgb(195,215,247);
background: radial-gradient(circle, rgba(195,215,247,1) 21%, rgba(250,182,175,1) 100%); 
width: 100%;
border-radius: 35px;
display: flex;
flex-direction: column;
align-items: center;
h2, p, h3{
  margin-top: 10%;
  color: #4d4c4d;
  font-family: 'Open Sans', sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
}
p{
  margin-top: 0%;
  font-weight: normal;
  font-size: 3rem;
}
h3{
  font-weight: normal;
  font-size: 1.2rem;
  text-align: center;
  margin: 3%;
}
span{
  color: #5e5d5e;
}

.resultContainer{
  padding-top: 50%;
  border: 2px solid black;
  background-color: red;
  margin-top: 10%;
  width: 300px;
  height: px;
  display: flex;
}
.circle {
  margin-top: 10%;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: #c3d7f7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
`