import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from '../../assets/arrow.svg';
import GBSW from '../../assets/GBSW.webp';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const LabRent = () => {
  const navigate = useNavigate();

  const RabEnroll = () => {
    navigate('/lab/board');
  };
  return (
    <Background>
      <Header />
      <Inner>
        <Head>
          <div className='rent-container'>
            <img src={GBSW} alt='경소고 로고' className='gbsw' />
            <div className='rent-box' onClick={RabEnroll}>
              <p className='rent'>실습실 대여하기</p>
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
  background-color: #f5f5f8;
  box-sizing: border-box;
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto; // 중앙 정렬
  font-family: 'Pretendard-Medium';
`;

const Head = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  & > .rent-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 250px;
    height: 250px;
    border: 1px solid #bebec7;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 2px 4px 12px #00000014;
  }

  & > .rent-container {
    align-items: center;
    justify-content: center;
    .gbsw {
      margin-top: 40px;
      width: 100px;
      height: 100px;
    }
  }

  & > .rent-container > .rent-box {
    margin-top: 10px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }

  & > .rent-container > .rent-box > .rent {
    color: #6a96ec;
    font-size: 20px;
    font-family: 'Pretendard-Bold';
  }

  & > .rent-container > .rent-box > .arrow {
    margin-left: 10px;
    width: 20px;
  }

  & > .notice-container {
    width: 800px;
    height: 250px;
    border: 1px solid #bebec7;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 2px 4px 12px #00000014;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 40px;
  }

  & > .notice-container > .notice-phrases {
    text-align: start;
    .important-notice {
      color: #fd1717;
      font-size: 20px;
      font-weight: 700;
    }
  }

  & > .notice-container > .notice-phrases > .first-promise > .unImportant-notice,
  & > .notice-container > .notice-phrases > .second-promise > .unImportant-notice {
    font-weight: 700;
    margin: 0;
    margin-bottom: 10px;
  }

  & > .notice-container > .notice-phrases > .first-promise,
  & > .notice-container > .notice-phrases > .second-promise {
    font-size: 17px;
    color: #000;
  }

  & > .notice-container > .notice-phrases > .first-promise > .explanation,
  & > .notice-container > .notice-phrases > .second-promise .explanation {
    margin: 0;
    margin-bottom: 20px;
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
  box-shadow: 2px 4px 12px #00000014;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;
export default LabRent;
