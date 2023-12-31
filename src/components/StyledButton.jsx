import styled from "styled-components";

export const StyledButton = styled.button`
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.5px;
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  background: #a328d6;
  color: #FFFFFF;
  &:hover{
    background: #ad35e0;
  }


`