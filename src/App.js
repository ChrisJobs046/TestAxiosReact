import './App.css';

import React from 'react';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/all';

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
      console.log(response.data.content);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.map( pas=> <p key={pas.titulo}>{pas.titulo}</p>)}</h1>
      <p>{post.sentimiento}</p>
    </div>
  );


  }

// export default function App(){

//   console [post, setPost] = React.useState([null]);

//   React.useEffect(() => {
//     axios.get(URL)
//     .then(res => {
//       setPost(res.data);
//       console.log(res.data);
//     });
// }, []);

// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

