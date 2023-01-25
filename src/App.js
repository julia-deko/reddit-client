import logo from './logo.svg';
import './App.css';
import { PostList } from './components/PostList/PostList';
import { useQuery } from '@tanstack/react-query';
import { SubredditsList } from './components/SubredditsList/SubredditsList';

function getPosts() {
  return fetch('https://www.reddit.com/r/pics/.json')
    .then(response => response.json())
    .then(postsData => {
      return postsData.data.children.map(x => x.data);
    });
}

function getReddits() {
  return fetch('https://www.reddit.com/subreddits.json')
    .then(response => response.json()
      .then(subredditsData => subredditsData.data.children.map(x => x.data)));
}

export function App() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  const subredditsQuery = useQuery({
    queryKey: ['subreddits'],
    queryFn: getReddits,
  });
  return (
    <div className="App">
      { postsQuery.isSuccess ? <PostList posts={postsQuery.data}/> : <h1>Loading...</h1>}
      { subredditsQuery.isSuccess ? <SubredditsList subreddits={subredditsQuery.data}/> : <h1>Loading...</h1> }
    </div>
  );
}
