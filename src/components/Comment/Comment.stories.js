/* eslint-disable import/no-default-export */
import { Comment } from './Comment';


export default {
  title: 'Comment',
  component: Comment,
};

const Template = (args) => <Comment {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  author: 'waz',
  time: 1670171076,
  text: 'hello'
};
