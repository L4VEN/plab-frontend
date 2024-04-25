import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from '../../assets/arrow.svg';
import GBSW from '../../assets/GBSW.webp';
import Footer from '../../components/Footer';

const LabRent = () => {
  const navigate = useNavigate();
  const Home = () => {
    navigate('/');
  };

  const Login = () => {
    navigate('/login');
  };

  const RabEnroll = () => {
    navigate('/lab/board');
  };
  return (
    <Background>
      <Nav>
        <div className='head'>
          <div className='head-left'>
            <h1 className='logo' onCanPlay={Home}>
              플랩
            </h1>
            <p className='labRent'>실습실 대여</p>
          </div>
          <div className='head-right'>
            <button className='loginBtn' onClick={Login}>
              로그인
            </button>
          </div>
        </div>
      </Nav>
      <Inner>
        <Head>
          <div className='rent-container'>
            <img src={GBSW} alt='경소고 로고' className='gbsw' />
            <div className='rent-box'>
              <p className='rent' onClick={RabEnroll}>
                실습실 대여하기
              </p>
              <img src={Arrow} alt='오른쪽 표시 화살표' className='arrow' />
            </div>
          </div>
          <div className='notice-container'>
            <div className='notice-phrases'>
              <p className='important-notice'>매일 점심 시간 (13시 40분) 신청 마감</p>
              <div className='first-promise'>
                <p className='unImportant-notice'>야자 시간 전 미리 문 열어놓기 !</p>
                <p className='explanation'>
                  미리 안 열어놓고 야자시간에 열쇠달라고 해도 안 열어줌, 손으로 따다 적발 시 벌점 20점
                </p>
              </div>
              <div className='second-promise'>
                <p className='unImportant-notice'>실습실 사용 후 정리는 매너이자 필수 !</p>
                <p className='explanation'>
                  전원, 냉난방, 조명, 책상 의자 배치 등 정리 / 지켜지지 않을 시 2주간 실습실 이용 제한
                </p>
              </div>
            </div>
          </div>
        </Head>
        <Body></Body>
      </Inner>
      <Footer />
    </Background>
  );
};
const Background = styled.div`
  width: 100%;
  background-color: #f4f4f4; /* 배경색을 원하는 색상으로 지정하세요 */
  box-sizing: border-box;
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto; // 중앙 정렬
  font-family: 'Pretendard-Medium';
`;

const Nav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-shrink: 0;
  justify-content: center; // 수평 가운데 정렬
  background-color: #fff;

  & > .head {
    width: 60%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
  }

  & > .head > .head-left {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  & > .head > .head-left > .logo {
    font-size: 40px;
    font-family: '달라왕 Bold';
    color: #6a96ec;
    &:hover {
      cursor: pointer;
    }
  }

  & > .head > .head-left > .labRent {
    font-size: 20px;
    font-family: 'Pretendard-Medium';
  }

  & > .head > .head-right > .loginBtn {
    width: 100px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 25px;
    background-color: #fff;
    font-family: 'Pretendard-Regular';
    font-size: 14px;
    font-weight: 400;
    color: #000;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Head = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  /* Head의 자식 요소들을 수평으로 배치 */
  & > .rent-container {
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    border: solid #bebec7;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0px 4px 8px 0px #0000001a;
  }

  & > .rent-container > .gbsw {
    width: 100px;
    margin-left: 40px;
    margin-top: 50px;
  }

  & > .rent-container > .rent-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > .rent-container > .rent-box > .rent {
    color: #6a96ec;
    font-size: 20px;
    font-family: 'Pretendard-Bold';
    &:hover {
      cursor: pointer;
    }
  }

  & > .rent-container > .rent-box > .arrow {
    margin-left: 10px;
    width: 20px;
  }

  & > .notice-container {
    width: 800px;
    height: 250px;
    border: solid #bebec7;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0px 4px 8px 0px #0000001a;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > .notice-container > .notice-phrases > .important-notice {
    color: #fd1717;
    font-size: 20px;
    font-family: 'Pretendard-Bold';
  }

  & > .notice-container > .notice-phrases > .first-promise > .unImportant-notice,
  & > .notice-container > .notice-phrases > .second-promise > .unImportant-notice {
    font-family: 'Pretendard-Bold';
  }

  & > .notice-container > .notice-phrases > .first-promise,
  & > .notice-container > .notice-phrases > .second-promise {
    font-size: 17px;
    color: #000;
  }

  & > .notice-container > .notice-phrases > .first-promise > .explanation,
  & > .notice-container > .notice-phrases > .second-promise .explanation {
    font-size: 17px;
    color: #bebec7;
  }
`;

const Body = styled.div`
  width: 1078px;
  height: 799px;
  border: 1px solid #bebec7;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px #0000001a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;
export default LabRent;
