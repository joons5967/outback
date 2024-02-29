import React from 'react';
import main4 from "./Main4.module.scss"
const Main4 = () => {
  return (
    <div className='container px-5 my-5 py-4'>
      <div className={`row mx-0 ${main4.row}`}>
        <div className="col-lg-3 side">
          <strong>BOOMERANG</strong>
           <h2>REWARD</h2>
            <p>부메랑 카드 <br />
            리워드 혜택을 만나보세요</p> 
            <a href="">자세히 보기</a>
        </div>
        <ul className='col-lg-9 row'>
        <li className='col-md-4 col-sm-6 mb-4'>
          <em>01</em>
          <p className={`${main4.p1}`}>와인 2잔 10,700원</p>
          <p className={`${main4.p2}`}>와인 2잔을 10,700원에 <br />즐길 수 있는 혜택 제공</p>
        </li>
        <li className='col-md-4 col-sm-6 mb-4'>
        <em>02</em>
          <p className={`${main4.p1}`}>1년 1회, 부메랑 쿠폰</p>
          <p className={`${main4.p2}`}>부메랑 회원이라면 누구나 <br />1만원 할인 혜택 제공</p>
        </li>
        <li className='col-md-4 col-sm-6 mb-4'>
        <em>03</em>
          <p className={`${main4.p1}`}>본-인 스테이크 쿠폰</p>
          <p className={`${main4.p2}`}>본-인 스테이크 한정 <br />1만원 할인 혜택 제공</p>
        </li>
      
        <li className='col-md-4 col-sm-6 mb-4 mb-md-0'> 
          <em>04</em>
          <p className={`${main4.p1}`}>10%할인 혹은 2%적립</p> 
          <p className={`${main4.p2}`}>부메랑 카드만 있다면 <br />10%할인 혹은 2%적립!!!</p>
        </li>
        <li className='col-md-4 col-sm-6 mb-4 mb-sm-0'> 
        {/* mb-sm-0은 sm이상일떄부터0이되는거고 sm전까진 mb-4인것 */}
        <em>05</em>
          <p className={`${main4.p1}`}>부메랑 포인트</p>
          <p className={`${main4.p2}`}>3000P이상 보유 시, <br />10P 단위로 현금처럼 사용 가능</p>
        </li>
        <li className='col-md-4 col-sm-6 '>
        <em>06</em>
          <p className={`${main4.p1}`}>부메랑 회원전용 이벤트 참여</p>
          <p className={`${main4.p2}`}>부메랑 전용 다양한 이벤트 <br />참여 기회 제공</p>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Main4;