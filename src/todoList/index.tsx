import * as React from 'react';
import { useState } from 'react';

import { Wrapper, Container, Tittle, Subtittle, Write, Input, Button } from './styles';


export default function App() {
  const [ state, setState ] = useState({
    words: '',
    listWords: ['']
  })

  function handleChange(e: React.FormEvent) {
    const value = ((e.target) as any).value;

    setState({ ...state, words: value });
  }

  function handleSubmit() {
    // setState([ ...state, listWords: state.words ]);
  }

  console.log(state);
  return (
    <Wrapper>
      <Container>
        <Tittle>
          Todo List
          <Subtittle>Hooks and TypeScript</Subtittle>
        </Tittle>
        <Write>
          <Input onChange={value => handleChange(value)} />
          <Button onClick={handleSubmit}>Add List</Button>
        </Write>
      </Container>
    </Wrapper>
  );
}
