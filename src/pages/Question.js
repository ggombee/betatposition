import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/mockdata";
import { useNavigate } from "react-router-dom";

const Question = () => {
  // const [selectedData, setSelectedData] = React.useState({});
  const [questionNo, setQuestionNo] = React.useState(0);
  const [score, setScore] = React.useState(
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 }
  );
  const navigate = useNavigate();

  const handleCLickAnswerA = (no) => {
    console.log("zzzzzz", no);

    // setSelectedData(QuestionData[no + 1]);
    setQuestionNo(no + 1);
    setScore(QuestionData[questionNo].type);
    // setScore(
    //   score.map((data) => {
    //     if (data.id === QuestionData[questionNo].type) {
    //       data[score] = data[score] + 1;
    //       return data
    //     } else {
    //       return data
    //     }
    //   })
    // );

    // if (no === 0) {
    //   setScore(QuestionData[0].score);
    // } else {
    //   setScore(score + selectedData.score);
    // }

    if (QuestionData.length === no + 1) {
      navigate("/result");
    }
  };

  const handleCLickAnswerB = (no) => {
    // setSelectedData(QuestionData[no + 1]);
    setQuestionNo(no + 1);
  };

  console.log("quesionno", questionNo);
  // console.log("selectedData", selectedData);
  console.log("score", score);

  return (
    <Container>
      <ProgressBar
        variant="warning"
        animated
        now={(questionNo / QuestionData.length) * 100}
        style={{
          width: "80%",
          marginTop: 20,
        }}
      />
      <Contents>
        <Title>
          {/* {questionNo > 0 ? selectedData.title : QuestionData[0].title} */}
          {QuestionData[questionNo].title}
        </Title>
        <ButtonGroup>
          <Button
            variant="warning"
            onClick={() => handleCLickAnswerA(questionNo)}
            style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}
          >
            {QuestionData[questionNo].answera}
            {/* {questionNo > 0 ? selectedData.answera : QuestionData[0].answera} */}
          </Button>
          <Button
            variant="warning"
            onClick={handleCLickAnswerB}
            style={{
              width: "40%",
              marginLeft: "20px",
              minHeight: "200px",
              fontSize: "15pt",
            }}
          >
            {QuestionData[questionNo].answerb}
            {/* {questionNo > 0 ? selectedData.answerb : QuestionData[0].answerb} */}
          </Button>
        </ButtonGroup>
      </Contents>
      <ins
        class="kakao_ad_area"
        style="display: none"
        data-ad-unit="DAN-u2JDmzz9RNn61qmk"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
      <script
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      ></script>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #ffa07a;
  align-items: center;
  flex-direction: column;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  width: 100%;
`;

const Title = styled.text`
  width: 90%;
  text-align: center;
  color: white;
  font-size: 30pt;
  font-family: "SimKyungha";
  font-weight: 550;
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  font-family: "SimKyungha";
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
