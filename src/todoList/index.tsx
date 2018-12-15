import * as React from 'react';
import { useState } from 'react';

import { Wrapper, Container, Tittle, Subtittle, Write, Input, Button } from './styles';


export default function App() {
  const [ words, setWords ] = useState<string>('');
  const [ listWords, setListWords ] = useState<object>([]);

  function handleChange(e: React.FormEvent) {
    console.log(e.target);
    // setState({ words: e.target.value });
  }

  function handleSubmit() {
    console.log('clicando');
  }

  console.log(words, setWords);
  console.log(listWords, setListWords);
  return (
    <Wrapper>
      <Container>
        <Tittle>
          Todo List
          <Subtittle>Hooks and TypeScript</Subtittle>
        </Tittle>
        <form onClick={handleSubmit}>
          <Write>
            <Input onChange={value => handleChange(value)} />
            <Button type="submit">Add List</Button>
          </Write>
        </form>
      </Container>
    </Wrapper>
  );
}
