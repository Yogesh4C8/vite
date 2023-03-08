import styled from 'styled-components';


export const StyledForm = styled.form`
  padding: 20px;
  display:flex;
  justify-content:center;
`

export const StyledInput = styled.input`
  padding: 6px;
  margin: 4px;
  border: none;
  background-color: rgb(207, 237, 237);
  border-bottom: 2px dashed black;
  &:focus {
    outline: none
  }
`

export const StyledButton = styled.button`
  background-color: skyblue;
  padding:0 20px;
  color: white;
  border: none;
  border-radius: 30%;
  cursor: pointer;
`