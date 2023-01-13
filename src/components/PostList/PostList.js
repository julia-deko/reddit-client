import { Post } from '../Post/Post';

export function PostList({posts}) {
  return (
    <div>
      {posts.map(post => {
        return <Post 
          key={post.id}
          score={post.ups} 
          title={post.title} 
          imageURL={post.url} 
          author={post.author} 
          time={post.created_utc} 
          commentsAmount={post.num_comments} 
        />
      })}
    </div>
  );
}
