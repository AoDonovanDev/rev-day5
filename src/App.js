import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import { useState, useEffect } from 'react';

function App() {

  const [name, setName] = useState("");
  const [comments, setComments] = useState(null);
  const [posts, setPosts] = useState(null);

  function handleChange(e){
    setName(e.target.value);
  }

  useEffect(() => {
    const comments = [
      {
        comment: "looks good"
      }, 
      {
        comment: "i hate it"
      },
      {
        comment: "straight to jail"
      }, 
      {
        comment: "beep boop"
      }
    ]

    const posts = [
      {
        post: "post1"
      },
      {
        post: "post2"
      },
      {
        post: "post3"
      },
      {
        post: "post4"
      }
    ]


    setComments(comments);
    setPosts(posts);
  },[])

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello secret={"SECRET"}/>
        <h1>{name}</h1>
        <input type='text' onChange={handleChange}/>
        {posts?.map(p => <li>{p.post}</li>)}
        {comments?.map(c => <li>{c.comment}</li>)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
