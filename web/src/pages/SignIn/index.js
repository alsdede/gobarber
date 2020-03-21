import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { ReactComponent as Logo } from '~/assets/logo.svg';
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});
export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <div className="container">
        <Logo />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />

          <button type="submit">Acessar</button>
          <Link to="/register">Criar conta gratuita</Link>
        </Form>
      </div>
    </>
  );
}
