import React, { useState } from 'react';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  const addComment = () => {
    if (username && text) {
      setComments([...comments, { username, text }]);
      setUsername('');
      setText('');
    }
  };

  return (
    <div className="App">
      <h1>KATE3O</h1>
      <div className="comment-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write your comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addComment}>Submit</button>
      </div>
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.username}:</strong> {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
