import React from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  const url = "https://betatestmbti.netlify.app/";
  const resultUrl = window.location.href;
  console.log("sss", window.location.href);

  React.useEffect(() => {
    Kakao.init("706b058dedece1187fba96396b9d2738");
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "😼예비집사 판별기 결과😼",
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${data.name}이에요.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
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
