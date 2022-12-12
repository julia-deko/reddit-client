/* eslint-disable import/no-default-export */
import { Votes } from './Votes';


export default {
  title: 'Votes',
  component: Votes,
};

const Template = (args) => <Votes {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  score: 89
};
