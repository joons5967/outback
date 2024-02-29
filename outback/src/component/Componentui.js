import styled from "styled-components"

export const Arrowbutton = styled.button`
    width: 40px;
    height: 40px;
    background: url(/img/arrow1.png) right bottom -1px no-repeat;
    border: 0;
    border-bottom: 1px solid ${(props) => props.bcolor? props.bcolor:"black"};
    -webkit-transition: width 0.6s cubic-bezier(0.165, 0.840, 0.440, 1.000);
    transition: width 0.6s cubic-bezier(0.165, 0.840, 0.440, 1.000);
    &:hover{
      width: 60px;
    }
`