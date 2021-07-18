import styled from "styled-components";
import {eColors} from "../../GlobalStyles";

export const LoaderWrapper = styled.div`
  width: 100%;
  min-height:310px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  top:0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: showing .5s ease-in-out;
  @keyframes showing {
    0% {opacity: 0}
    100% {opacity: 1}
  }
`;
export const LoaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    border-radius: 50%;
    height: 10px;
    position: absolute;
    bottom: 50px;
    width: 80px;
    background-color: #c6c6c6;
    opacity: .1;
    animation: ease-in-out 1.5s shadow infinite;
    @keyframes shadow {
      0% {
        width: 70px
      }
      50% {
        width: 80px
      }
      100% {
        width: 70px
      }
    }
  }
`;
export const LoaderImage = styled.img`
    width: 60px;
    height: 60px;
    animation: rotator 1.5s ease-in-out infinite;
   
    position: relative;
  

  @keyframes rotator {
    0%   { transform: translateY(0) }
    30%   { transform: translateY(-3px) }
    60%  { transform: translateY(10px) }
}
`;
export const LoaderText = styled.p`
  color: ${eColors.LIGHT_TEXT};
  margin-top: 40px;
  font-size: 12px;
  line-height: 10px;
`;