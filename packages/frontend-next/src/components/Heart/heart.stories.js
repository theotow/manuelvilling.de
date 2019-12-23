import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Root from '../Root/root.component';
import Heart from './heart.component';

export default {
  title: 'Heart',
};

export const defaultStory = () => (
  <StaticRouter location="/" context={{}}>
    <Root>{() => <Heart />}</Root>
  </StaticRouter>
);

defaultStory.story = {
  name: 'default',
};
