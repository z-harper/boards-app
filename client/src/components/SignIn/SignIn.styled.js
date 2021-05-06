import styled from 'styled-components';

export const SignIn = styled.div``;

export const Fieldset = styled.fieldset`
  border: none;
`;

export const Legend = styled.legend`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Form = styled.form``;

export const FormControl = styled.div``;

export const Label = styled.label`
  width: 100%;
  padding-left: 8px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1.1px;
  color: #004339;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 8px;
  font-size: 1rem;
  color: rgba(0, 118, 101, 1);
  background-color: rgba(0, 118, 101, .1);
  border: 1px solid rgba(0, 118, 101, 1);
  border-radius: 6px;
`;

export const SubmitButton = styled.button`
width: 100%;
margin-top: 1rem;
padding: 10px 12px;
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 16px;
color: #fff;
font-weight: bold;
text-decoration: none;
background-color: rgba(0, 118, 101, 0.8);
border-radius: 32px;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover {
  background-color: rgba(0, 118, 101, 1);
}
`;