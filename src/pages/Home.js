import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        {/* <div style={{ width: '400px', height: '200px' }}> */}
        <LogoImage src={logo} />
        {/* </div> */}
        <Title>
          나한테 딱 맞는 롤 포지션은 뭘까?
        </Title>
      </Wrapper>
    </Container>)
}

export default Home;


const Container = styled.div`
  display: flex;
  height : 100vh;
  width: 100%;
  background: #2260F2;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  flex-direction: vertical;
`

const LogoImage = styled.img`
  width : 400px;
  height : 200px;
  background-color: white; 
`;

const Title = styled.text`
  color: white;
  font-size: 20pt;
  // font-family: 
`


