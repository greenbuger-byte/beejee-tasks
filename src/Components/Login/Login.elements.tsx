import styled from "styled-components";

export const LoginContainer = styled.div`
  
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginBox = styled.div`
  border: 1px solid whitesmoke;
  background-color: white;
  padding: 20px;
  margin-top: -50px;
  max-width: 300px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  z-index:999;
  position: relative;
`;


export const LoginHeader = styled.h1`
font-size: 30px;
  text-align: center;
`;

export const LoginCloseBtn = styled.div`
  position: absolute; 
  top: 10px;
  right: 10px;
  cursor: pointer;
  opacity: .8;
  &:hover{
    opacity: 1;
  }
`;

