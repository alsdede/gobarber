import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter no mínimo 6 digitos')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <div className="container">
        <img src={logo} alt="GoBarber  " />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo" />
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha secreta"
          />

          <button type="submit">Criar conta</button>
          <Link to="/">Já tenho login</Link>
        </Form>
      </div>
    </>
  );
}
