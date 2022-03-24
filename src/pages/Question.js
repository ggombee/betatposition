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
          width: "70%",
          marginTop: 20,
        }}
      />
      <Title>
        {/* {questionNo > 0 ? selectedData.title : QuestionData[0].title} */}
        {QuestionData[questionNo].title}
      </Title>
      <Wrapper>
        <Button
          variant="warning"
          onClick={() => handleCLickAnswerA(questionNo)}
        >
          {QuestionData[questionNo].answera}
          {/* {questionNo > 0 ? selectedData.answera : QuestionData[0].answera} */}
        </Button>
        <Button
          variant="warning"
          style={{ marginLeft: "20px" }}
          onClick={handleCLickAnswerB}
        >
          {QuestionData[questionNo].answerb}

          {/* {questionNo > 0 ? selectedData.answerb : QuestionData[0].answerb} */}
        </Button>
      </Wrapper>
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

const Title = styled.text`
  color: white;
  font-size: 40pt;
  font-family: "SimKyungha";
  font-weight: 550;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
