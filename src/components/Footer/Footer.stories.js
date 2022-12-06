/* eslint-disable import/no-default-export */
import { Footer } from './Footer';


export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  author: 'waz',
  time: 1670171076,
  commentsAmount: 55
};
