import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const CreateBoardForm = styled.div`
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: auto;
`;

export const Form = styled.form``;

export const Fieldset = styled.fieldset`
  padding: 8px 16px;
  border: 2px solid #007665;
  border-radius: 6px;
  //background: rgba(0, 118, 101, 0.2);
`;

export const Legend = styled.legend`
  padding: 2px 10px;
  font-size: 18px;
  font-weight: bold;
  color: #007665;
  letter-spacing: 1.1px;
  border: 1px solid #007665;
  border-radius: 6px;
  background: #e5f1ef;
`;

export const FormContent = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FormItem = styled.li`
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-top: 2px solid #a88640;
`;

export const Label = styled.label`
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

export const Input = styled.input`
  padding: 6px 12px; 
  font-size: 16px;
  color: #fff;
  background: #007665;
  border-left: 2px solid #a88640;
  border-bottom: 2px solid #a88640;
  border-radius: 0 0 0 10px;

  ::placeholder {
    color: #ccc;
  }
`;

export const TextArea = styled.textarea`
  padding: 4px 8px;
  font-size: 16px;
  background: #007665;
  border-left: 2px solid #a88640;
  border-bottom: 2px solid #a88640;
  border-radius: 0 0 0 10px;
  color: #fff;

  ::placeholder {
    color: #ccc;
  }
`;

export const Invited = styled.p``;

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