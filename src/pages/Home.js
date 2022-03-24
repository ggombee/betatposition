import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
// import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <>
      <Container>
        <Header>세대 판별기</Header>
        <Wrapper>
          <Title>라떼는 말이야...?</Title>
          <Desc>아직도 자신이 신세대라고 생각하는가?</Desc>

          {/* <LogoImage src={logo} /> */}
          <Button
            onClick={handleClickButton}
            className="btn-danger"
            style={{
              fontFamily: "SimKyungha",
              fontSize: 25,
              marginTop: 20,
            }}
          >
            테스트 시작하기
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #ffa07a;
  text-align: center;
`;

const Header = styled.div`
  color: white;
  font-size: 80pt;
  font-family: "SimKyungha";
  height: 12vh;
`;

const Wrapper = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
`;

const Title = styled.div`
  color: white;
  font-size: 50pt;
  font-family: "SimKyungha";
  font-weight: 550;
`;

const Desc = styled.div`
  color: white;
  font-size: 20pt;
  font-family: "SimKyungha";
  font-weight: 550;
`;

// const Button = styled.text`
//   color: white;
//   font-size: 30pt;
//   font-family: "SimKyungha";
// `;
