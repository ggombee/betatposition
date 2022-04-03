import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
// import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
// import PangImage from "../assets/ggompang.jpg";
import queryString from "query-string";
import { ResultData } from "../assets/data/resultdata";
import KakaoShare from "../components/share";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mbti = queryString.parse(location.search).mbti;
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  React.useEffect(() => {
    // window.location.reload();
  }, [mbti]);

  return (
    <>
      <Container>
        <Header>😼 예비집사 판별기 😼</Header>
        <Wrapper>
          <Title>결과 보기</Title>
          <LogoImage>
            <img
              src={resultData.image}
              alt="옴팡사진"
              className="rounded-circle"
              width={350}
              height={350}
            />
          </LogoImage>
          <Desc
            style={{
              fontSize: "18pt",
            }}
          >
            예비집사님과 찰떡궁합인 고양이는 {resultData.best}형 고양이 '
            {resultData.name}' 입니다.
          </Desc>
          <Desc
            style={{
              marginTop: 10,
            }}
          >
            {resultData.desc}
          </Desc>
          {/* <ShareButtonGroup>
            <div className="addthis_inline_share_toolbox" />
          </ShareButtonGroup> */}
          <div>
            <Button
              onClick={() => navigate("/")}
              className="btn-danger"
              style={{
                width: 170,
                fontFamily: "SimKyungha",
                fontSize: 25,
                marginTop: 20,
              }}
            >
              테스트 다시하기
            </Button>
            {/* <KakaoShare /> */}
            <Button
              // onClick={() => shareKakao()}
              // className="btn-primary"
              // className="btn-secondary"
              // className="btn-success"
              className="btn-warning"
              // className="btn-info"
              // className="btn-light"
              // className="btn-dark"
              style={{
                width: 170,
                fontFamily: "SimKyungha",
                fontSize: 25,
                marginTop: 20,
                marginLeft: 20,
                color: "white",
              }}
            >
              카카오톡 공유하기
            </Button>
            <KakaoShare />
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  height: 120vh;
  width: 100%;
  background: #fffacd;
  flex-direction: column;
`;

const Header = styled.div`
  color: white;
  font-size: 35pt;
  font-family: "SimKyungha";
  height: 10vh;
  width: 100%;
  background: #ffa07a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 70px;
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

// const ShareButtonGroup = styled.div`
//   margin-top: 20px;
//   display: flex;
//   // flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
