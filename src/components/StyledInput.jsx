import styled from "styled-components"

export const StyledInput = styled.input`
  width: 90%;
  height: 30px;
  margin-bottom: 6px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};

  &::placeholder{
    color: #c8b8ce;
  }
`