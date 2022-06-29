import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
  const inputId = useRef();
  const inputPassword = useRef();
  const buttonLogin = useRef();
  const navigate = useNavigate();

  const emailRegExp =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  const handleChangeInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleValidation = (e) => {
    handleChangeInfo(e);
    if (e.target.name === 'id') {
      if (emailRegExp.test(e.target.value) === false) {
        inputId.current.style = 'border: 2px solid red';
        console.log(inputId, 'hihi');
        setEmailValidation(false);
      } else {
        inputId.current.style = '';
        setEmailValidation(true);
      }
    }
    if (e.target.name === 'password') {
      if (passwordRegExp.test(e.target.value) === false) {
        inputPassword.current.style = 'border: 2px solid red';
        setPasswordValidation(false);
      } else {
        inputPassword.current.style = '';
        setPasswordValidation(true);
      }
    }
    if (emailValidation === true && passwordValidation === true) {
      buttonLogin.current.style = 'background: blue';
    } else {
      buttonLogin.current.style = 'background: #0e95f7;';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.id.length < 1) {
      inputId.current.focus();
      return;
    }
    if (userInfo.password.length < 1) {
      inputPassword.current.focus();
      return;
    }
    const { id, password } = userInfo;
    window.localStorage.setItem('id', id);
    window.localStorage.setItem('password', password);
    alert('로그인 성공');
    navigate('/', { replace: true });
  };

  return (
    <Container>
      <Section>
        <Box Title>
          <Title>로그인</Title>
        </Box>
        <Box>
          <LoginInput
            type="text"
            name="id"
            ref={inputId}
            placeholder="이메일"
            onChange={handleValidation}
          />
        </Box>
        <Box>
          <LoginInput
            type="password"
            name="password"
            ref={inputPassword}
            placeholder="비밀번호"
            autoComplete="off"
            onChange={handleValidation}
          />
        </Box>
        <Box Button>
          <Button onClick={handleSubmit} ref={buttonLogin}>
            로그인
          </Button>
        </Box>
      </Section>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  width: 20vw;
  height: 25vh;
  border: solid black 2px;
  padding: 20px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
`;
const Box = styled.div`
  margin-bottom: ${(props) => (props.Title ? '20px' : 0)};
  margin-top: ${(props) => (props.Button ? '20px' : '5px')}; ;
`;
const LoginInput = styled.input`
  width: 17vw;
  height: 3vh;
`;
const Button = styled.button`
  width: 17vw;
  height: 3vh;
  background-color: #0e95f7;
  &:hover {
    cursor: pointer;
  }
`;
