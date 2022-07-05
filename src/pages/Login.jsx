import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { emailRegExp, passwordRegExp } from '../common/validation';

function Login() {
  console.log('리렌더링?');
  const inputId = useRef(null);
  console.log(inputId);
  const inputPassword = useRef(null);
  const buttonLogin = useRef(null);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });

  //유효성 검사
  const handleValidation = (e, ref) => {
    let { value } = ref.current;
    let { name } = e.target;

    if (name === 'id') {
      if (emailRegExp.test(value) === false) {
        ref.current.style = 'border: 2px solid red';
        ref.current.validation = 'false';
      } else {
        ref.current.style = '';
        ref.current.validation = 'true';
      }
    }

    if (name === 'password') {
      if (!passwordRegExp.test(value)) {
        ref.current.style = 'border: 2px solid red';
        ref.current.validation = 'false';
      } else {
        ref.current.style = '';
        ref.current.validation = 'true';
      }
    }

    if (
      inputId.current.validation === 'true' &&
      inputPassword.current.validation === 'true'
    ) {
      buttonLogin.current.style = 'background:  blue';
    } else {
      buttonLogin.current.style = 'background: #0e95f7;';
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputId.current.value.length < 1) {
      inputId.current.focus();
      return;
    }
    if (inputPassword.current.value.length < 1) {
      inputPassword.current.focus();
      return;
    }

    if (
      inputId.current.validation === 'true' &&
      inputPassword.current.validation === 'true'
    ) {
      setUserInfo({
        ...userInfo,
        id: inputId.current.value,
        password: inputPassword.current.value,
      });

      const { id, password } = userInfo;
      window.localStorage.setItem('id', id);
      window.localStorage.setItem('password', password);
      alert('로그인 성공');
      navigate('/', { replace: true });
    }
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
            onChange={(e) => handleValidation(e, inputId)}
          />
        </Box>
        <Box>
          <LoginInput
            type="password"
            name="password"
            ref={inputPassword}
            placeholder="비밀번호"
            autoComplete="off"
            onChange={(e) => handleValidation(e, inputPassword)}
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
