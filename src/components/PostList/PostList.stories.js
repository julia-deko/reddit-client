/* eslint-disable import/no-default-export */
import { PostList } from './PostList';


export default {
  title: 'PostList',
  component: PostList,
};

const Template = (args) => <PostList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  posts: [
    { id: 1, 
      ups: 55, 
      title: 'an american truck in the streets of europe (paris, france)', 
      url: 'https://i.redd.it/ea5aqqw22pba1.jpg', 
      author: 'nothing', 
      created_utc: 1670171076, 
      num_comments: 101, 
    },
    { id: 2, 
      ups: 1888, 
      title: 'I painted a bar in watercolor', 
      url: 'https://i.redd.it/oyijcda5gnba1.jpg', 
      author: 'onewordpoet', 
      created_utc: 1670171076, 
      num_comments: 66, 
    },
    { id: 3, 
      ups: 321, 
      title: 'A beer bottle discovered at Challenger Deep, the deepest point on Earth at -35,000ft.', 
      url: 'https://i.redd.it/b06dm5jxlnba1.jpg', 
      author: 'RenShep', 
      created_utc: 1670171076, 
      num_comments: 899, 
    },
  ]
};
