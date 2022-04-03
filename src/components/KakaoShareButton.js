import React from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  // const url = "https://betatestmbti.netlify.app/";
  // const resultUrl = window.location.href;
  console.log("sss", window.location.href);

  React.useEffect(() => {
    Kakao.init("706b058dedece1187fba96396b9d2738");
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "data.name",
        description: "data.desc",
        imageUrl: " data.image",
        link: {
          mobileWebUrl: "resultUrl",
          webUrl: "resultUrl",
        },
      },
      buttons: [
        {
          title: "결과확인하기",
          link: {
            mobileWebUrl: " resultUrl",
            webUrl: " resultUrl",
          },
        },
      ],
    });
  };

  return (
    <Button
      onClick={shareKakao}
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
  );
};

export default KakaoShareButton;
