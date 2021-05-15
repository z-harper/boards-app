import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const BoardPgCreatePost = styled.div`
  padding: 2rem 1rem;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 1rem;
  background: rgba(0,118,101,0.2);
  border: 3px solid #bd9748;
  border-radius: 10px;
  color: #007665;

  @media screen and ${breakpoints.device.sm} {
    padding: 0 8px 8px 8px;
  }
`;

export const Form = styled.form``;

export const Fieldset = styled.fieldset``;

export const Legend = styled.legend`
  padding: 2px 10px;
  font-size: 18px;
  font-weight: bold;
  color: #007665;
  letter-spacing: 1.1px;
  border-radius: 6px;
`;

export const FormContent = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FormItem = styled.li`
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const Label = styled.label`
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #007665;
`;

export const Input = styled.input`
  font-size: 16px;
  color: #007665;

  ::placeholder {
    color: #ccc;
  }
`;

export const TextArea = styled.textarea`
  padding: 4px 8px;
  font-size: 16px;
  background: #007665;
  border-radius: 8px;
  color: #fff;

  ::placeholder {
    color: #fff;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  padding: 6px 16px;
  margin: 1rem 0;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  background: #007665;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #a88640;
  }
`;