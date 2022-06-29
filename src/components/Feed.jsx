import React, { useRef } from 'react';
import styled from 'styled-components';
import profileImg from '../profileImg.png';
import { FaRegHeart } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';
import { BiPaperPlane } from 'react-icons/bi';
import { TbDots } from 'react-icons/tb';
import { BsBookmark } from 'react-icons/bs';
import { BsEmojiSmile } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';
function Feed({ username, img }) {
  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  const inputComment = useRef();
  const email = localStorage.getItem('id');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [comment, setComment] = useState({
    id: '',
    comment: '',
  });

  const handleComment = (e) => {
    setComment({
      ...comment,
      id: new Date().getUTCMilliseconds(),
      [e.target.name]: e.target.value,
    });
  };

  const send = (e) => {
    e.preventDefault();
    setData([...data, comment]);
    inputComment.current.value = '';
  };

  const getError = () => {
    console.log('error');
    setLoading(true);
  };

  return (
    <Container>
      <Wrapper>
        <UserSection>
          <Div>
            <User>
              <Profile>
                <ProfileImg src={profileImg} alt="profileImg" />
              </Profile>
              <Nickname>{username}</Nickname>
            </User>
            <Icons>
              <TbDotsIcon />
            </Icons>
          </Div>
        </UserSection>
        <ImgSection>
          {loading === false ? (
            <div>로딩중</div>
          ) : (
            <Img
              src={img}
              onLoad={() => setLoading(true)}
              onError={getError}
              alt="feedImg"
            />
          )}
        </ImgSection>
        <Div>
          <Icons>
            <IconDiv>
              <FaRegHeartIcon />
            </IconDiv>
            <IconDiv>
              <BsChatDotsIcon />
            </IconDiv>
            <IconDiv>
              <BiPaperPlaneIcon />
            </IconDiv>
          </Icons>
          <Icons>
            <IconDiv>
              <BsBookmarkIcon />
            </IconDiv>
          </Icons>
        </Div>
        <Like>좋아요 0개</Like>
        <CommentsSection>
          <CommentsList>
            {data.map((el) => (
              <Comment key={el.id}>
                <UserEmail>{email}</UserEmail>
                <Text>{el.comment}</Text>
              </Comment>
            ))}
          </CommentsList>
          <CommentForm onSubmit={send}>
            <BsEmojiSmileIcon />
            <Input
              type="text"
              name="comment"
              ref={inputComment}
              placeholder="댓글달기..."
              onChange={handleComment}
            />
            <Button onClick={send}>게시</Button>
          </CommentForm>
        </CommentsSection>
      </Wrapper>
    </Container>
  );
}

export default Feed;
const Text = styled.div``;
const UserEmail = styled.div`
  margin-right: 10px;
  font-weight: 700;
`;
const Comment = styled.div`
  margin-left: 10px;
  display: flex;
`;
const BsEmojiSmileIcon = styled(BsEmojiSmile)`
  width: 2rem;
  height: 1.8rem;
  margin-right: 5px;
  @media screen and (max-width: 529px) {
    width: 1rem;
  }
`;
const Button = styled.button`
  color: #0e95f7;
  font-size: 1.2rem;
  background-color: white;
  @media screen and (max-width: 529px) {
    font-size: 0.7rem;
    width: 2rem;
  }
`;
const Input = styled.input`
  width: 23rem;
  height: 2rem;
  @media screen and (max-width: 529px) {
    width: 15.8rem;
  }
`;
const CommentForm = styled.form`
  border-top: solid #efefef 2px;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  position: relative;
  top: -3px;
`;
const CommentsList = styled.div`
  height: 7rem;
`;
const CommentsSection = styled.div`
  margin-top: 2px;
`;
const IconDiv = styled.div``;
const TbDotsIcon = styled(TbDots)`
  width: 30px;
  height: 50px;
`;
const FaRegHeartIcon = styled(FaRegHeart)`
  width: 30px;
  height: 50px;
`;
const BsChatDotsIcon = styled(BsChatDots)`
  width: 30px;
  height: 50px;
  margin-left: 15px;
`;
const BiPaperPlaneIcon = styled(BiPaperPlane)`
  width: 30px;
  height: 50px;
  margin-left: 15px;
`;
const BsBookmarkIcon = styled(BsBookmark)`
  width: 30px;
  height: 50px;
`;
const Container = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 30rem;
  height: 38rem;
  border: solid #d3d3d3 2px;
  padding-bottom: 2px;
  @media screen and (max-width: 529px) {
    width: 20rem;
  }
`;
const UserSection = styled.div``;
const ImgSection = styled.div`
  height: 20rem;
  width: 30rem;
`;
const Profile = styled.div`
  margin-right: 5px;
`;
const Nickname = styled.div``;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
const Div = styled.div`
  display: flex;
  width: 30rem;
  height: 3rem;
  justify-content: space-between;
  @media screen and (max-width: 529px) {
    width: 20rem;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7px;
  margin-right: 7px;
`;
const Like = styled.div`
  height: 2.3rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const ProfileImg = styled.img`
  width: 2.3rem;
`;
const Img = styled.img`
  width: 29.7rem;
  height: 20rem;
  @media screen and (max-width: 529px) {
    width: 19.8rem;
  }
`;
