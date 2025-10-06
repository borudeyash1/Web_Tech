import logo from './logo.svg';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App"  >
      
      <h1>Data Fetcher</h1>
      <DataFetcher />
    </div>
  );
}

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul className="post-list">
        {data.map(post => (
          <li key={post.id} className='id'>
            <div className='card'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
