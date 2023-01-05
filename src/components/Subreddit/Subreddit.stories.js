/* eslint-disable import/no-default-export */
import { Subreddit } from './Subreddit';


export default {
  title: 'Subreddit',
  component: Subreddit,
};

const Template = (args) => <Subreddit {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'AskReddit',
  imageURL: 'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png',
};
