import React from 'react';
import {Arrowbutton} from './Componentui'
import "./Main5.scss";

const main5 = () => {
  return (
  <div className='container'>
    <div className='row mx-0'>

      <div className='box1 col-md-4 col-sm-12 px-4 py-4 img0 d-flex'>
        <div>
          RESERVE
          <p className='pn1'>예약하기</p>
        </div>
        <Arrowbutton bcolor="white"></Arrowbutton>
      </div>

      <div className='box2 col-md-4 col-sm-6 px-4 py-4 img1 d-flex'>
        <div>
        SAVEPOINT
      <p className='pn2'>사후 적립</p>
      </div>
      <Arrowbutton bcolor="white"></Arrowbutton>
      </div>

      <div className='box3 col-md-4 col-sm-6 px-4 py-4 img2 d-flex'>
        <div>
        DELIVERY
         <p className='pn3'>딜리버리 전화주문 <br />1000-0000</p>
        </div>
      <Arrowbutton className='arrow0' bcolor="white"></Arrowbutton>
      </div>

    </div>
 </div>
  );
};

export default main5;