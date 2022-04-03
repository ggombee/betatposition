import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";

const KakaoShare = () => {
  const navigate = useNavigate();
  const url = window.location.href; //현재 url가져오기
  React.useEffect(() => {
    initKakao(); //
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
      }
    }
  };

  //버튼을 누르면 실행되는 함수
  const shareKakao = () => {
    //이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: "오늘의 디저트",
        description: "아메리카노, 빵, 케익",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          androidExecutionParams: "test",
        },
      },
      itemContent: {
        profileText: "Kakao",
        profileImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageText: "Cheese cake",
        titleImageCategory: "Cake",
        items: [
          {
            item: "Cake1",
            itemOp: "1000원",
          },
        ],
        sum: "Total",
        sumOp: "15000원",
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  };

  return (
    <Button
      onClick={() => navigate("/")}
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
      }}
    >
      카카오톡 공유하기
    </Button>
    // <div className="share-node" onClick={shareKakao}>
    //   <p>카톡</p>
    // </div>
  );
};

export default KakaoShare;
