import { useState } from 'react';
import axios from 'axios';
import * as S from './HomeNav.styled';
import { data } from './HomeNav.data';

const HomeNav = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [searchEmail, setSearchEmail] = useState('');
  const [isEmailFound, setIsEmailFound] = useState(false);
  const [foundUser, setFoundUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.get(`http://localhost:8080/user/search-email?email=${searchEmail}`);
      console.log(result);
      if (result.data.errorMessage) {
        window.alert('email not found');
      } else {
        setIsEmailFound(true);
        setSearchEmail('');
        setFoundUser(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <S.HomeNav>
      <S.LinksList>
          {data.links.map(navLink => {
            return (
              <S.LinkItem key={navLink.linkTo}>
                <S.Link to={navLink.linkTo}>
                  {navLink.displayAs}
                </S.Link>
              </S.LinkItem>
            )
          })}
          <S.AddFriends onClick={() => setTogglePopup(!togglePopup)}>Add Friends</S.AddFriends>
      </S.LinksList>
        {togglePopup && 
          <S.Popup>
            <S.PopupWrapper>
              <S.PopupTitle>Add Friends</S.PopupTitle>
              <S.PopupForm onSubmit={handleSubmit}>
                <S.Label htmlFor='userSearch'>
                  <S.LabelText>Find Friends</S.LabelText>
                </S.Label>
                <S.Input type='search' id='userSearch' placeholder='Search Email' value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)} />
                <S.SearchButton type='submit'>Search</S.SearchButton>
              </S.PopupForm>
              <S.PopupCloseBtnWrap>
                <S.PopupCloseBtn onClick={() => {setTogglePopup(!togglePopup); setSearchEmail('');}}>Close</S.PopupCloseBtn>
              </S.PopupCloseBtnWrap>
              {isEmailFound && 
                <S.PopupEmailFound>
                  <S.popupFoundMsg>User found!</S.popupFoundMsg>
                  <S.PopupFoundWrapper>
                    <S.PopupFoundDetails>
                      <S.PopupFoundItem><span style={{color: '#326f91', textDecoration: 'underline'}}>Email:</span> {foundUser.email}</S.PopupFoundItem>
                      <S.PopupFoundItem><span style={{color: '#326f91', textDecoration: 'underline'}}>First:</span> {foundUser.firstName}</S.PopupFoundItem>
                      <S.PopupFoundItem><span style={{color: '#326f91', textDecoration: 'underline'}}>Last:</span> {foundUser.lastName}</S.PopupFoundItem>
                    </S.PopupFoundDetails>
                    <S.PopupAddBtnWrap>
                      <S.PopupAddBtn>Add Friend</S.PopupAddBtn>
                    </S.PopupAddBtnWrap>
                  </S.PopupFoundWrapper>
                </S.PopupEmailFound>
              }
            </S.PopupWrapper>
          </S.Popup>
        }
    </S.HomeNav>
  )
}

export default HomeNav
