import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userActions } from './userSlice';

export function LoginForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.requestLogin(email, password));
  };

  // TODO
  // 로그인 버튼 contrast 조정
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="loginFormEmail">
        <Form.Label>
          <b>이메일</b>
        </Form.Label>
        <Form.Control required type="email" name="email" value={email} onChange={handleEmail} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="loginFormPassword">
        <Form.Label>
          <b>비밀번호</b>
        </Form.Label>
        <Form.Control required type="password" name="password" value={password} onChange={handlePassword} />
      </Form.Group>
      <Button type="submit" variant="secondary" block>
        로그인
      </Button>
    </Form>
  );
}
