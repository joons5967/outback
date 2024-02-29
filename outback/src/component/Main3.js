import React from 'react';
import "./Main3.scss"

const Main3 = () => {
  return (
    <div className='imgcontainer container' >  
      <div className='steak text-center'>
        <p className='text-white p1'>OUTBACK BENEFIT</p>
        <p className='text-white'>다양한 멤버쉽과 제휴 혜택 할인을 누리세요</p>
      <div className='d-flex bene justify-content-center'>
        <div className='px-5 py-5'>
          <img src="./img/bene1.png" alt="" />
          <p className='text-white'>MEMBERSHIP</p>
          <p className='text-white'>부메랑클럽 가입하고 <br /> 멤버십 혜택 풍성하게 즐겨보세요
          </p>
        </div>
        <div className='px-5 py-5'>
          <img src="./img/bene2.png" alt="" />
          <p className='text-white'>DISCOUNT</p>
          <p className='text-white'>아웃백 제휴 할인 혜택의 <br /> 기회를 놓치지 마세요</p>
        </div>
        <div className='px-5 py-5'>
          <img src="./img/bene3.png" alt="" />
          <p className='text-white'>GIFT CARD</p>
          <p className='text-white'>소중한 사람에게 <br /> 감사한 마음을 선물하세요</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main3;