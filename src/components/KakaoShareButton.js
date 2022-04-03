import React from "react";
import Button from "react-bootstrap/Button";
// import { useNavigate, useLocation } from "react-router-dom";
const { Kakao } = window;

const KakaoShareButton = (data) => {
  const url = "https://betatestmbti.netlify.app/";
  // const shareUrl = url + 'src/assets/cat/'
  React.useEffect(() => {
    Kakao.init("706b058dedece1187fba96396b9d2738");
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: data.title,
        description: data.desc,
        imageUrl: data.image,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "결과확인하기",
          link: {
            mobileWebUrl: "공유할 url!",
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
