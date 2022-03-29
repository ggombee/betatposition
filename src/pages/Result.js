import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
// import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import PangImage from "../assets/ggompang.jpg";
import queryString from "query-string";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mbti = queryString.parse(location.search).mbti;

  return (
    <>
      <Container>
        <Header>😼 예비집사 판별기 😼</Header>
        <Wrapper>
          <Title>결과 보기</Title>
          <LogoImage>
            <img
              src={PangImage}
              alt="옴팡사진"
              className="rounded-circle"
              width={200}
              height={200}
            />
          </LogoImage>
          <Desc
            style={{
              fontSize: "18pt",
            }}
          >
            나에게 맞는 고양이는 {mbti} 아비시니안 입니다.
          </Desc>
          <Desc
            style={{
              marginTop: 10,
            }}
          >
            밝고 활달한 성격에 아비시니안은 이집트 출신의 고양이로 유명하죠.
            귀찮게 하는 것을 싫어하지만,, 애교는 정말 많답니다. 애교는 정말
            많답니다.애교는 정말 많답니다.애교는 정말 많답니다.애교는 정말
            많답니다.애교는 정말 많답니다.애교는 정말 많답니다.
          </Desc>
          <ShareButtonGroup>
            <div className="addthis_inline_share_toolbox"></div>
          </ShareButtonGroup>
          <Button
            onClick={() => navigate("/")}
            className="btn-danger"
            style={{
              fontFamily: "SimKyungha",
              fontSize: 25,
              marginTop: 20,
            }}
          >
            테스트 다시하기
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #fffacd;
  flex-direction: column;
`;

const Header = styled.div`
  color: white;
  font-size: 40pt;
  font-family: "SimKyungha";
  height: 10vh;
  width: 100%;
  background: #ffa07a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 30pt;
  font-family: "SimKyungha";
  font-weight: 550;
`;

const Desc = styled.div`
  font-size: 15pt;
  font-family: "SimKyungha";
  font-weight: 550;
  width: 90%;
  text-align: center;
`;

const ShareButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
`;
