import React, { useState,  useRef } from 'react';
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.scss";


function Header(props) {
  const [hdbg, sethdbg] = useState("bg-transparent");
  const navbarToggleRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      sethdbg("bg-dark");
      
    } else {
      sethdbg("bg-transparent");
    }

     if(document.querySelector(".navbar-collapse.show")){
        navbarToggleRef.current.click();
     }

  };

  React.useEffect(
    ()=>{

      window.addEventListener('scroll', handleScroll);

      return ()=>{
        window.removeEventListener('scroll', handleScroll)
         
      }
    }
   
    ,[ hdbg ]
  )
  return (

    <header className={`fixed-top ${hdbg}` } id={props.keyid}>

      <Navbar expand="lg"  >
      <Container lg>
       <Navbar.Brand href="#home"><img src="./img/outbacklogo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" ref={navbarToggleRef} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="d-flex mx-auto" id='ul1' as="ul"
            navbarScroll
          >
            <li><Nav.Link href="#home">BRAND</Nav.Link></li>
        <li><Nav.Link href="/MENU" >MENU</Nav.Link></li>
        <li><Nav.Link href="#home">MEMBERSHIP</Nav.Link></li>
        <li><Nav.Link href="#home">BENEFIT</Nav.Link></li>
        <li><Nav.Link href="#home">COOKING CLASS</Nav.Link></li>
        <li><Nav.Link href="#home">STORE</Nav.Link></li>
          </Nav>
          <Nav className="d-flex mx-auto" id='ul1' as="ul">
           <li><Nav.Link href="#home">고객의 소리</Nav.Link></li>
          <li><Nav.Link href="#home">채용</Nav.Link></li>
          <li><Nav.Link href="#home">로그인</Nav.Link></li>
          <li id='li1'><Nav.Link href="#home">회원가입</Nav.Link></li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </header>



    

  )
}

export default Header



