import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Root from '../Root/root.component';
import Entry from './entry.component';

export default {
  title: 'Entry',
};

export const defaultStory = () => (
  <StaticRouter location="/" context={{}}>
    <Root>{() => <Entry title="title" link="https://google.com" date="date" />}</Root>
  </StaticRouter>
);

defaultStory.story = {
  name: 'default',
};
