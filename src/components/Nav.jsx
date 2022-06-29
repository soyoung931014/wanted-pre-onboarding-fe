import React from 'react';
import logo from '../logo.jpg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const id = window.localStorage.getItem('id');
  const password = window.localStorage.getItem('password');

  const handleLogout = () => {
    if (id !== undefined && password !== undefined) {
      window.localStorage.clear();
      alert('로그아웃 되었습니다');
      navigate('/login', { replace: true });
    } else {
      alert('로그아웃에 실패했습니다');
      return;
    }
  };
  return (
    <Container>
      <Box Required>
        <Img src={logo} />
      </Box>
      <Box>
        <Input type="text" />
      </Box>
      <Box>Home</Box>
      <Box>Mypage</Box>
      <Box Required>
        {id === null ? (
          <LoginState onClick={() => navigate('/login', { replace: true })}>
            Login
          </LoginState>
        ) : (
          <LoginState onClick={handleLogout}>Logout</LoginState>
        )}
      </Box>
    </Container>
  );
}
export default Nav;
const Container = styled.div`
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  border-bottom: solid black 2px;
  z-index: 4;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -10px;
  margin-left: 1.5rem;
  @media screen and (max-width: 1080px) {
    justify-content: center;
  }
`;
const Img = styled.img`
  height: 2.4rem;
`;
const Input = styled.input`
  width: 20rem;
  border: solid black 2px;
  opacity: 0.4;
  height: 1.5rem;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;
const LoginState = styled.div`
  margin-right: 2.2rem;
  &:hover {
    cursor: pointer;
    color: tomato;
  }
`;
