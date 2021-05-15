import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as S from './BoardPgCreatePost.styled';

const BoardPgCreatePost = ({boardId}) => {
  const [textDesc, setTextDesc] = useState('');
  const [fileInput, setFileInput] = useState({});
  const user = useSelector(state => state.user);

  const uploadToS3 = async () => {
    try {
      // get secure s3 url from server
      const result = await axios.get("http://localhost:8080/s3/get-url");
      let uploadUrl = result.data.s3Url;
      // post image to s3 using generated url from our server
      await axios.put(uploadUrl, fileInput, {headers: {'Content-Type': 'imageFile.type'}});
      // break url at ? to only return url + 32char hex string
      return uploadUrl.split('?')[0];
    } catch (err) {
      console.log('failed to upload to s3', err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadUrl = await uploadToS3();
      // send board creation contents to board api
      await axios.post('http://localhost:8080/boards/post', {
        boardId,
        textDesc, 
        imgUrl: uploadUrl, 
        author: user.email
      });
      // redirect to homepage on successful creation of board
    } catch (err) {
      console.log(err);
    }    
  }

  return (
    <S.BoardPgCreatePost>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Fieldset>
            <S.Legend>Create a post</S.Legend>
            <S.FormContent>
              <S.FormItem>
                <S.Label htmlFor='image-upload'>Upload an Image</S.Label>
                <S.Input type='file' name='imgUpload' id='imgUpload' accept='image/*' aria-label='Upload an Image' onChange={(e) => setFileInput(e.target.files[0])} />
              </S.FormItem>
              <S.FormItem>
                <S.Label htmlFor='text-desc'>Post Content</S.Label>
                <S.TextArea type='text' rows='5' name='textDesc' id='textDesc' aria-label='Text Description' placeholder='Post Content...' value={textDesc} onChange={(e) => setTextDesc(e.target.value)} />
              </S.FormItem>
              <S.BtnContainer>
                <S.SubmitBtn type='submit'>Create Post</S.SubmitBtn>
              </S.BtnContainer>
            </S.FormContent>
          </S.Fieldset>
        </S.Form>
      </S.Wrapper>
    </S.BoardPgCreatePost>
  )
}

export default BoardPgCreatePost
