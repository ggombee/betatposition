import React from "react";
// import Button from "react-bootstrap/Button";
// import { useNavigate, useLocation } from "react-router-dom";
const { Kakao } = window;

const KakaoShare = () => {
  React.useEffect(() => {
    Kakao.init("706b058dedece1187fba96396b9d2738");
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "내용!",
        description: "내용!",
        imageUrl: "내용!",
        link: {
          mobileWebUrl: "모바일 url!",
          androidExecParams: "test",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "공유할 url!",
          },
        },
      ],
    });
  };

  return (
    <>
      <button onClick={shareKakao}>카카오톡 공유하기</button>
    </>
  );
};

export default KakaoShare;
