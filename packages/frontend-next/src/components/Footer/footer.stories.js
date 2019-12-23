import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Root from '../Root/root.component';
import Footer from './footer.component';

export default {
  title: 'Footer',
};

export const defaultStory = () => (
  <StaticRouter location="/" context={{}}>
    <Root>{() => <Footer />}</Root>
  </StaticRouter>
);

defaultStory.story = {
  name: 'default',
};
