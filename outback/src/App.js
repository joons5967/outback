
import 'bootstrap/dist/css/bootstrap.css'
import Header from './component/Header';
import Mainswiper from './component/Main';
import Main3 from './component/Main3';
import Main4 from './component/Main4';
import Main5 from './component/Main5';
import Footer from './component/Footer'






function App() {
  return (
    <>
<Header keyid="hd"></Header>
<Mainswiper keyid="mainSwiper" swiperview={[1]} swiperea={["swiper1.jpeg", "swiper3.jpeg","swiper6.jpeg","swiper2.jpeg", "swiper4.jpeg", "swiper5.jpeg"]}></Mainswiper>
<Main3></Main3>
<Main4></Main4>
<Main5></Main5>
<Mainswiper keyid="brandSwiper" swiperview={[3, 4, 6]} swiperea={["subswiper1.png", "subswiper2.jpeg","subswiper3.jpeg","subswiper4.jpeg", "subswiper5.jpeg", "subswiper6.jpeg"]}></Mainswiper>
<Footer></Footer>
    </>
  );
}



export default App;


