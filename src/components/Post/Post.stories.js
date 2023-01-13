/* eslint-disable import/no-default-export */
import { Post } from './Post';

export default {
  title: 'Post',
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  score: 127,
  title: 'What is Lorem Ipsum?',
  imageURL: 'https://i.redd.it/pwpu54hobi3a1.jpg',
  author: 'waz',
  time: 1670171076,
  commentsAmount: 99,
};
