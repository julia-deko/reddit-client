/* eslint-disable import/no-default-export */
import { SubredditsList } from './SubredditsList';


export default {
  title: 'SubredditsList',
  component: SubredditsList,
};

const Template = (args) => <SubredditsList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  subreddits: [
    { id: 0, 
      display_name: 'pics', 
      icon_img: 'https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png'},
    { id: 1, 
      display_name: 'funny', 
      icon_img: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png'},
    { id: 2, 
      display_name: 'pics', 
      icon_img: 'https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png'},
    { id: 3, 
      display_name: 'funny', 
      icon_img: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png'},
    { id: 4, 
      display_name: 'pics', 
      icon_img: 'https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png'},
    { id: 5, 
      display_name: 'funny', 
      icon_img: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png'},
  ]
};
