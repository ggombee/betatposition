import React from 'react';

const SurveyCard = () => {
  // const []

  const hadleClickAnswer = (answer) => {
    alert(`선택한 답변은 ${answer} 입니다.`)
  }

  return (<>  <div>질문입니다</div><button onClick={(e) => hadleClickAnswer(e.target.value)}>답변1</button>
    <button onClick={(e) => hadleClickAnswer(e.target.value)}>답변2</button></>)
}

export default SurveyCard;