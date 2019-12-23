import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Root from '../Root/root.component';
import ResizeLoader from './resizeloader.component';

export default {
  title: 'ResizeLoader',
};

export const defaultStory = () => (
  <StaticRouter location="/" context={{}}>
    <Root>{() => <ResizeLoader />}</Root>
  </StaticRouter>
);

defaultStory.story = {
  name: 'default',
};
