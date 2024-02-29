import React from 'react';
import footer from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={`${footer.bg} text-white pt-5`}>
      <div className={`container ${footer.bg}`}>
        <ul className={`d-flex ${footer.text}`}>
          <li className={`${footer.text} border px-2 py-1 me-2`}>아웃백 소개 ////</li>
          <li className={`${footer.text} border px-2 py-1 mx-2`}>채용 안내</li>
          <li className={`${footer.text} border px-2 py-1 mx-2`}>신규 입점 제의</li>
          <li className={`${footer.text} border px-2 py-1 mx-2`}>패밀리사이트</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;