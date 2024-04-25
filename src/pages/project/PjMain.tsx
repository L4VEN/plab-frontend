// import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import hello from '../../assets/pj-hello.png';
import think from '../../assets/pj-think.png';

const PjMain = () => {
  return (
    <>
      <Header />
      <Section>
        <div className='inner'>
          <div className='title'>
            <img src={hello} className='pj-icon' />
            <h2>이번 주 인기 모집글</h2>
          </div>
          <div id='hot-board'>
            <Board>
              <h2>제목</h2>
            </Board>
          </div>
          <div className='title'>
            <img src={think} className='pj-icon' />
            <span className='select-board'>전체</span>
            <span className='select-board'>프로젝트</span>
            <span className='select-board'>스터디</span>
          </div>
        </div>
      </Section>
    </>
  );
};

const Board = styled.div`
  background-color: #fff;
  flex-shrink: 0;
  width: 275px;
  height: 275px;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #868d94;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Section = styled.section`
  .inner {
    max-width: 1280px;
  }
  .title {
    margin-top: 24px;
    > * {
      font-size: 20px;
    }
    display: flex;
    align-items: center;
    height: 75px;
    .pj-icon {
      padding: 10px;
    }
  }
  #hot-board {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 20px;
  }
  .select-board {
    font-size: 20px;
    font-weight: Bold;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    color: #bcbcbc;
  }
`;
export default PjMain;
