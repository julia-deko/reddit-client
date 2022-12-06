/* eslint-disable import/no-default-export */
import { BaseInfo } from './BaseInfo';


export default {
  title: 'Example/BaseInfo',
  component: BaseInfo,
};

const Template = (args) => <BaseInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'What is Lorem Ipsum?',
  imageURL: 'https://i.redd.it/pwpu54hobi3a1.jpg'
};
