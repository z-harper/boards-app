import { useState } from 'react';
import { useSelector } from 'react-redux';
import Dropdown from '../Dropdown';

import * as S from './CreateBoardForm.styled';

const INITIAL_STATE = {
  name: '', 
  textDesc: '',
  imgUpload: '',
  addToProject: [],
  inviteFriends: [],
  inviteGroup: [],
}

const CreateBoardForm = () => {
  const [boardAttribs, setBoardAttribs] = useState(INITIAL_STATE);
  const user = useSelector(state => state.user);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    if (key !== 'imgUpload') {
      setBoardAttribs({...boardAttribs, [key]:value});
    } else {
      setBoardAttribs({...boardAttribs, imgUpload: e.target.files[0]});
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(boardAttribs);
    setBoardAttribs(INITIAL_STATE);
  }

  // add friends from friends dropdown
  const addItems = (items) => {
    setBoardAttribs({inviteFriends: items});
  }

  return (
    <S.CreateBoardForm>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Fieldset>
            <S.Legend>Create a Board</S.Legend>
            <S.FormContent>
              <S.FormItem>
                <S.Label htmlFor='name'>Board Name</S.Label>
                <S.Input type='text' name='name' id='name' aria-label='Board Name' placeholder='Name' value={boardAttribs.email} onChange={handleChange} />
              </S.FormItem>
              <S.FormItem>
                <S.Label htmlFor='text-desc'>Board Description</S.Label>
                <S.TextArea type='text' rows='5' name='textDesc' id='textDesc' aria-label='Text Description' placeholder='Description' value={boardAttribs.email} onChange={handleChange} />
              </S.FormItem>
              <S.FormItem>
                <S.Label htmlFor='image-upload'>Upload an Image</S.Label>
                <S.Input type='file' name='imgUpload' id='imgUpload' accept='image/*' aria-label='Upload an Image' onChange={handleChange} />
              </S.FormItem>
              <S.FormItem>
                <S.Label htmlfor='add-to-project'>Add board to a project?</S.Label>
                <S.Input type='text' name='addToProject' id='addToProject' aria-label='Add to Project' placeholder='create dropdown with users groups' />
              </S.FormItem>
              <S.FormItem>
                <S.Label htmlfor='invite-friends'>Invite friend(s) to board?</S.Label>
                <Dropdown title='Search friends...' mapKey={'email'} sortProperty={'lastName'} data={user.friends} addItems={addItems} />
              </S.FormItem>
              <S.FormItem>
                <S.Label htmlfor='invite-group'>Invite group(s) to board?</S.Label>
                <S.Input type='text' name='inviteGroup' id='inviteGroup' aria-label='Invite Group' placeholder='create checkbox with groups' />
              </S.FormItem>
              <S.BtnContainer>
                <S.SubmitBtn type='submit'>Create Board</S.SubmitBtn>
              </S.BtnContainer>
            </S.FormContent>
          </S.Fieldset>
        </S.Form>
      </S.Wrapper>
    </S.CreateBoardForm>
  )
}

export default CreateBoardForm
