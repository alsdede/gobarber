import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  .container {
    width: 450px;
    max-width: 450px;

    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
    padding:50px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
      box-shadow: 0 10px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    }
}
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding:10px;
  }
  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  span {
    color:red;
    align-self:flex-start;
    margin: 0 0 5px;
    font-weight: 400;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#3b9eff')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
