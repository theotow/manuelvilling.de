import React from 'react';
import Button from './button.component';
import { StaticRouter } from 'react-router-dom';
import Root from '../Root/root.component';

export default {
  title: 'Button',
};

export const defaultStory = () => (
  <StaticRouter location="/" context={{}}>
    <Root>{() => <Button>Poke me</Button>}</Root>
  </StaticRouter>
);

defaultStory.story = {
  name: 'default',
};

export const isBoxStory = () => (
  <StaticRouter location="/" context={{}}>
    <Root>{() => <Button isBox>this is a div</Button>}</Root>
  </StaticRouter>
);

isBoxStory.story = {
  name: 'isBox',
};
