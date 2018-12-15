import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: center;
`;

export const Container = styled.div`
  color: #fff;
  min-width: 500px;
  background: #FF6666;
  box-shadow: -20px -20px 0px 0px rgba(100,100,100,.1);
`;

export const Tittle = styled.h1`
  font-size: 2.6rem;
  text-align: center;
  border-bottom: 1px solid;
`;

export const Subtittle = styled.p`
  margin-top: 0;
  font-size: 1.4rem;
`;

export const Write = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
`;

export const Input = styled.input`
  border: none;
  height: 3rem;
  padding: 0 1.5em;
  font-size: initial;
  background: #f7f1f1;
`;

export const Button = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 5px;
  font-weight: bold;
  padding: 0 1.3rem;
  background: #FF6666;
  text-transform: uppercase;
  transition: background .2s ease-out;
  border: 1px solid rgba(255,255,255,.3);
`;
